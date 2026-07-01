import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { PRODUCTS, CONTACT, CALENDLY, COMPANY } from "@/lib/constants";
import { getReference } from "@/lib/poe/knowledge";
import { rateLimit } from "@/lib/rate-limit";

// Modèle configurable. Défaut : Haiku 4.5 (rapide et économique pour un
// chatbot public). Passer une autre valeur via ANSET_CHATBOT_MODEL si besoin.
const MODEL = process.env.ANSET_CHATBOT_MODEL ?? "claude-haiku-4-5";

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

  const stream = anthropic.messages.stream({
    model: MODEL,
    max_tokens: 1024,
    system: buildSystemPrompt(),
    messages,
  });

  const encoder = new TextEncoder();
  const readable = new ReadableStream<Uint8Array>({
    async start(controller) {
      try {
        for await (const event of stream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
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
