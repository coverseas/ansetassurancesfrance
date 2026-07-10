import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { PRODUCTS, CONTACT, CALENDLY, COMPANY } from "@/lib/constants";
import { getReference } from "@/lib/poe/knowledge";
import { LEAD_TOOL, handleLeadHandoff, type LeadInput } from "@/lib/poe/lead";
import { rateLimit } from "@/lib/rate-limit";

// La base de connaissances est lue depuis le disque (fs) : la route doit
// tourner sur le runtime Node.js, pas Edge.
export const runtime = "nodejs";
// Le hand-off implique un aller-retour supplémentaire (appel outil) : on
// laisse un peu de marge au-delà du défaut.
export const maxDuration = 30;

// Modèle configurable. Défaut : Haiku 4.5 (rapide et économique pour un
// chatbot public). Passer une autre valeur via ANSET_CHATBOT_MODEL si besoin.
const MODEL = process.env.ANSET_CHATBOT_MODEL ?? "claude-haiku-4-5";

// Garde-fou : nombre max d'allers-retours outil dans un même tour de chat.
const MAX_TOOL_ROUNDS = 3;

const MAX_MESSAGES = 20; // borne l'historique renvoyé (coût / abus)
const MAX_CHARS = 2000; // longueur max d'un message utilisateur

// Rate limiting : 15 messages / minute par IP.
const RATE_LIMIT = 15;
const RATE_WINDOW_MS = 60_000;

type ChatMessage = { role: "user" | "assistant"; content: string };

function buildSystemPrompt(): string {
  const productLines = PRODUCTS.map((p) => {
    const dispo = p.comingSoon ? "bientôt (souscription à venir)" : "disponible";
    return `- ${p.name} — ${p.porteurMention} — ${dispo}.`;
  }).join("\n");

  return `Tu es Poé, l'agente IA d'ANSET Assurances. ANSET Assurances est la marque commerciale de ${COMPANY.legalName} SASU, courtier en assurance immatriculé à l'ORIAS sous le numéro ${COMPANY.oriasNumber}.

Ton rôle : renseigner les visiteurs du site sur les assurances proposées, les orienter vers le bon parcours (devis en ligne, prise de rendez-vous, contact) et les rassurer. Tu incarnes le service ANSET : chaleureux, humain, proche des familles d'outre-mer et de métropole.

Nos assurances et leurs assureurs partenaires :
${productLines}

Parcours et contacts utiles :
- Devis santé chien & chat : souscription 100% en ligne sur la page "/produits/sante-chien-chat" (section souscription).
- Autres produits (auto, habitation, PNO, santé, moto) : orienter vers la prise de rendez-vous ou la liste d'attente selon la disponibilité.
- Prise de rendez-vous avec un conseiller : page "/contact" (section rendez-vous). Lien de réservation : ${CALENDLY.url}.
- Email de contact : ${CONTACT.email}.
- Horaires conseillers : ${CONTACT.hours}. En dehors, tu prends le relais 24h/24.

Règles impératives :
- Réponds toujours en français, de façon concise (2 à 5 phrases), sans jargon, et termine si possible par une prochaine étape concrète.
- N'invente JAMAIS de tarifs précis, de plafonds de garantie, de délais, de numéros de contrat, ni de mentions légales. Si tu ne connais pas une information précise, propose un rendez-vous avec un conseiller.
- N'invente aucun partenariat ni aucun produit hors de la liste ci-dessus.
- Tu n'as pas accès aux données personnelles ni aux contrats des clients. Pour toute demande sur un dossier existant, un sinistre ou une résiliation, invite à prendre rendez-vous ou à écrire à ${CONTACT.email}.
- Reste sur le sujet de l'assurance et d'ANSET. Si la question est hors sujet, recadre poliment.
- Tu prépares la mise en relation avec un conseiller humain quand c'est pertinent ; tu ne conclus pas de contrat toi-même.

Mise en relation avec un conseiller (outil transmettre_au_conseiller) :
- Quand le visiteur souhaite être rappelé, obtenir un devis personnalisé, ou dès que sa demande dépasse ce que tu peux traiter, propose-lui de transmettre sa demande à un conseiller qui le recontactera.
- S'il accepte, recueille au fil de la conversation, sans le brusquer : son prénom, un moyen de contact (email OU téléphone) et un bref résumé de son besoin. Demande une seule information à la fois.
- Avant d'appeler l'outil, assure-toi que le visiteur a bien accepté d'être recontacté et rappelle brièvement que ces informations serviront uniquement à le rappeler.
- N'appelle l'outil transmettre_au_conseiller que lorsque tu as réellement ces informations. N'invente jamais un email, un téléphone ou un nom.
- Après l'appel de l'outil, confirme au visiteur ce qui a été transmis, en te fondant sur le résultat renvoyé par l'outil.

Base de connaissances (source de vérité à privilégier pour les détails de garanties, conditions et procédures ; ne va jamais au-delà de ce qu'elle contient) :
${getReference() || "(aucune fiche de référence disponible pour le moment)"}`;
}

function sanitize(messages: unknown): ChatMessage[] | null {
  if (!Array.isArray(messages)) return null;
  const cleaned: ChatMessage[] = [];
  for (const m of messages) {
    if (!m || typeof m !== "object") continue;
    const role = (m as ChatMessage).role;
    const content = (m as ChatMessage).content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") continue;
    const text = content.slice(0, MAX_CHARS).trim();
    if (!text) continue;
    cleaned.push({ role, content: text });
  }
  // L'API exige un premier message "user".
  while (cleaned.length && cleaned[0].role !== "user") cleaned.shift();
  return cleaned.length ? cleaned.slice(-MAX_MESSAGES) : null;
}

export async function POST(request: NextRequest) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "Configuration manquante (ANTHROPIC_API_KEY)." },
      { status: 500 },
    );
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const limit = rateLimit(`chat:${ip}`, RATE_LIMIT, RATE_WINDOW_MS);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Trop de messages. Merci de patienter un instant." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const messages = sanitize((body as { messages?: unknown })?.messages);
  if (!messages) {
    return NextResponse.json({ error: "Aucun message valide." }, { status: 400 });
  }

  const anthropic = new Anthropic();
  // Prompt système (produits + base de connaissances) mis en cache : stable
  // d'un message à l'autre, il est facturé au tarif "cache read" (~10x moins
  // cher) après la première requête. Le marqueur couvre aussi les outils.
  const system: Anthropic.TextBlockParam[] = [
    { type: "text", text: buildSystemPrompt(), cache_control: { type: "ephemeral" } },
  ];

  // Historique de travail : commence avec les messages client (texte simple),
  // puis s'enrichit des tours outil (assistant tool_use + tool_result).
  const conversation: Anthropic.MessageParam[] = messages.map((m) => ({
    role: m.role,
    content: m.content,
  }));

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for (let round = 0; round < MAX_TOOL_ROUNDS; round++) {
          const stream = anthropic.messages.stream({
            model: MODEL,
            max_tokens: 1024,
            system,
            tools: [LEAD_TOOL],
            messages: conversation,
          });

          for await (const event of stream) {
            if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
              controller.enqueue(encoder.encode(event.delta.text));
            }
          }

          const final = await stream.finalMessage();
          if (final.stop_reason !== "tool_use") break;

          // Exécute les outils demandés puis relance un tour pour que Poé
          // formule sa réponse à partir des résultats.
          conversation.push({ role: "assistant", content: final.content });
          const toolResults: Anthropic.ToolResultBlockParam[] = [];
          for (const block of final.content) {
            if (block.type !== "tool_use") continue;
            let result = "ÉCHEC : outil inconnu.";
            if (block.name === LEAD_TOOL.name) {
              result = await handleLeadHandoff(block.input as LeadInput);
            }
            toolResults.push({ type: "tool_result", tool_use_id: block.id, content: result });
          }
          conversation.push({ role: "user", content: toolResults });
        }
        controller.close();
      } catch (err) {
        console.error("Chatbot stream error:", err);
        controller.error(err);
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}
