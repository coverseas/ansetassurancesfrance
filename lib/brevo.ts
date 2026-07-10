/**
 * Helper d'envoi d'emails transactionnels via l'API Brevo.
 * Source unique pour toutes les routes qui notifient un conseiller
 * (contact, résiliation, sinistre, hand-off du chatbot Poé).
 */

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";

export interface BrevoEmailPayload {
  sender: { name: string; email: string };
  to: Array<{ email: string; name?: string }>;
  cc?: Array<{ email: string; name?: string }>;
  replyTo?: { email: string; name?: string };
  subject: string;
  htmlContent: string;
}

/** Échappe les caractères HTML pour une insertion sûre dans un email. */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/** Expéditeur par défaut (sender VÉRIFIÉ dans Brevo). */
export function defaultSender(): { name: string; email: string } {
  return {
    name: process.env.BREVO_FROM_NAME ?? "ANSET Assurances",
    email: process.env.BREVO_FROM_EMAIL ?? "",
  };
}

/** Envoie un email via Brevo. Lève une erreur si la configuration ou l'appel échoue. */
export async function sendBrevoEmail(payload: BrevoEmailPayload) {
  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) throw new Error("BREVO_API_KEY non configurée");
  if (!payload.sender.email) throw new Error("BREVO_FROM_EMAIL non configurée");

  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error("[brevo] Erreur API:", res.status, errorText);
    throw new Error(`Brevo error: ${res.status}`);
  }
  return res.json();
}
