/**
 * Hand-off de Poé vers un conseiller humain.
 *
 * Poé dispose d'un outil `transmettre_au_conseiller` qu'elle appelle lorsqu'elle
 * a recueilli, au fil de la conversation, de quoi rappeler le visiteur :
 * prénom, un moyen de contact (email et/ou téléphone) et un résumé du besoin.
 * L'appel déclenche l'envoi d'un email à la boîte de réception ANSET.
 */
import type Anthropic from "@anthropic-ai/sdk";
import { sendBrevoEmail, defaultSender, escapeHtml } from "@/lib/brevo";
import { CONTACT } from "@/lib/constants";

const LEAD_TO_EMAIL = process.env.ANSET_CONTACT_TO ?? CONTACT.email;

export const LEAD_TOOL: Anthropic.Tool = {
  name: "transmettre_au_conseiller",
  description:
    "Transmet la demande du visiteur à un conseiller ANSET, qui le recontactera. " +
    "N'appelle cet outil QUE lorsque le visiteur a explicitement accepté d'être recontacté " +
    "ET que tu as recueilli son prénom, au moins un moyen de contact (email ou téléphone) " +
    "et un résumé de son besoin. N'invente jamais ces informations : demande-les au visiteur.",
  input_schema: {
    type: "object",
    properties: {
      prenom: { type: "string", description: "Prénom du visiteur." },
      nom: { type: "string", description: "Nom de famille du visiteur (facultatif)." },
      email: { type: "string", description: "Adresse email du visiteur (email ou téléphone requis)." },
      telephone: { type: "string", description: "Numéro de téléphone du visiteur (email ou téléphone requis)." },
      produit: { type: "string", description: "Produit ou sujet concerné (ex. auto, santé chien & chat, moto…)." },
      resume: { type: "string", description: "Résumé clair du besoin ou de la question du visiteur." },
    },
    required: ["prenom", "resume"],
  },
};

export interface LeadInput {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  produit?: string;
  resume?: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Exécute le hand-off. Renvoie un message (string) destiné à devenir le
 * `tool_result` renvoyé à Claude : soit une confirmation, soit une consigne
 * pour redemander une information manquante ou signaler un échec technique.
 */
export async function handleLeadHandoff(input: LeadInput): Promise<string> {
  const prenom = (input.prenom ?? "").trim();
  const nom = (input.nom ?? "").trim();
  const email = (input.email ?? "").trim();
  const telephone = (input.telephone ?? "").trim();
  const produit = (input.produit ?? "").trim();
  const resume = (input.resume ?? "").trim();

  if (!prenom || !resume) {
    return "ÉCHEC : il manque le prénom ou le résumé du besoin. Redemande poliment l'information manquante au visiteur avant de retenter.";
  }
  if (!email && !telephone) {
    return "ÉCHEC : aucun moyen de contact fourni. Demande au visiteur son email ou son numéro de téléphone avant de retenter.";
  }
  if (email && !isValidEmail(email)) {
    return "ÉCHEC : l'adresse email semble invalide. Redemande une adresse email correcte (ou un numéro de téléphone) au visiteur.";
  }

  const fullName = [prenom, nom].filter(Boolean).join(" ");
  const submissionDate = new Date().toLocaleString("fr-FR", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Paris",
  });

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px 8px 0;font-weight:600;width:32%;vertical-align:top;color:#5a6c80;">${label}</td><td style="padding:8px 0;">${value}</td></tr>`;

  const adminHtml = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#0a1f44;"><h1 style="font-size:20px;margin:0 0 8px;">Nouveau lead via Poé (chatbot)</h1><p style="font-size:13px;color:#5a6c80;margin:0 0 24px;">${submissionDate}</p><table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px;">${row("Prénom / Nom", escapeHtml(fullName))}${email ? row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#0a1f44;">${escapeHtml(email)}</a>`) : ""}${telephone ? row("Téléphone", escapeHtml(telephone)) : ""}${produit ? row("Produit / sujet", escapeHtml(produit)) : ""}</table><div style="background:#f7f8fa;padding:16px 20px;border-radius:8px;margin-bottom:20px;"><p style="font-weight:600;margin:0 0 8px;font-size:13px;color:#5a6c80;">Besoin du visiteur</p><p style="margin:0;white-space:pre-wrap;font-size:14px;line-height:1.5;">${escapeHtml(resume)}</p></div><p style="font-size:12px;color:#5a6c80;margin:0 0 20px;">Le visiteur a accepté d'être recontacté par un conseiller.</p><p style="font-size:11px;color:#5a6c80;margin:32px 0 0;padding-top:16px;border-top:1px solid #e5e7eb;line-height:1.5;">COVERSEAS SASU · ORIAS 26000597 · Lead généré automatiquement par l'agente IA Poé.</p></div>`;

  const contactLabel = [email, telephone].filter(Boolean).join(" · ");
  const subject = `[ANSET Poé] Nouveau lead — ${fullName}${produit ? ` (${produit})` : ""}`;

  try {
    await sendBrevoEmail({
      sender: defaultSender(),
      to: [{ email: LEAD_TO_EMAIL }],
      ...(email && isValidEmail(email) ? { replyTo: { email, name: fullName } } : {}),
      subject,
      htmlContent: adminHtml,
    });
  } catch (err) {
    console.error("[poe/lead] échec envoi email:", err);
    return `ÉCHEC TECHNIQUE : la demande n'a pas pu être transmise. Invite le visiteur à écrire à ${CONTACT.email} ou à prendre rendez-vous avec un conseiller.`;
  }

  return `SUCCÈS : la demande de ${fullName} (${contactLabel}) a bien été transmise à un conseiller. Confirme-le chaleureusement au visiteur et indique qu'un conseiller le recontactera sous 24h ouvrées.`;
}
