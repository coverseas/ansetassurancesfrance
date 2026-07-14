import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 15;

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const FROM_EMAIL = process.env.BREVO_FROM_EMAIL ?? "";
const FROM_NAME = process.env.BREVO_FROM_NAME ?? "ANSET Assurances";
const RESILIATION_TO_EMAIL = process.env.ANSET_RESILIATION_TO ?? "hello@ansetassurances.com";

interface BrevoEmailPayload {
  sender: { name: string; email: string };
  to: Array<{ email: string; name?: string }>;
  replyTo?: { email: string; name?: string };
  subject: string;
  htmlContent: string;
}

function escapeHtml(str: string) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

async function sendBrevoEmail(payload: BrevoEmailPayload) {
  if (!BREVO_API_KEY) throw new Error("BREVO_API_KEY non configurée");
  if (!FROM_EMAIL) throw new Error("BREVO_FROM_EMAIL non configurée");
  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: { accept: "application/json", "api-key": BREVO_API_KEY, "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!res.ok) {
    const errorText = await res.text();
    console.error("[brevo] Erreur API:", res.status, errorText);
    throw new Error(`Brevo error: ${res.status}`);
  }
  return res.json();
}

const contractTypeLabel: Record<string, string> = {
  "sante-animale": "Santé chien-chat",
  "moto-cyclo": "Moto et cyclo",
  "autre": "Autre",
};

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    if (formData.get("website")) return NextResponse.json({ ok: true }, { status: 200 });

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const contractType = String(formData.get("contractType") ?? "").trim();
    const contractNumber = String(formData.get("contractNumber") ?? "").trim();
    const effectDate = String(formData.get("effectDate") ?? "").trim();
    const motif = String(formData.get("motif") ?? "").trim();
    const consent = formData.get("consent") === "on";

    if (!firstName || !lastName || !email || !contractType || !contractNumber) return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    if (!consent) return NextResponse.json({ error: "Vous devez confirmer votre demande." }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });

    const fullName = `${firstName} ${lastName}`;
    const submissionDate = new Date().toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short", timeZone: "Europe/Paris" });
    const reference = `RES-${Date.now().toString(36).toUpperCase()}`;
    const typeLabel = contractTypeLabel[contractType] ?? contractType;

    const adminHtml = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#0a1f44;"><h1 style="font-size:20px;margin:0 0 8px;">Demande de résiliation</h1><p style="font-size:13px;color:#5a6c80;margin:0 0 4px;">Référence : <strong>${reference}</strong></p><p style="font-size:13px;color:#5a6c80;margin:0 0 24px;">${submissionDate}</p><table style="width:100%;border-collapse:collapse;margin-bottom:20px;font-size:14px;"><tr><td style="padding:8px 12px 8px 0;font-weight:600;width:35%;vertical-align:top;color:#5a6c80;">Assuré</td><td style="padding:8px 0;">${escapeHtml(fullName)}</td></tr><tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#5a6c80;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#0a1f44;">${escapeHtml(email)}</a></td></tr>${phone ? `<tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#5a6c80;">Téléphone</td><td style="padding:8px 0;">${escapeHtml(phone)}</td></tr>` : ""}<tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#5a6c80;">Type de contrat</td><td style="padding:8px 0;">${escapeHtml(typeLabel)}</td></tr><tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#5a6c80;">N° de contrat</td><td style="padding:8px 0;"><strong>${escapeHtml(contractNumber)}</strong></td></tr>${effectDate ? `<tr><td style="padding:8px 12px 8px 0;font-weight:600;vertical-align:top;color:#5a6c80;">Date effet souhaitée</td><td style="padding:8px 0;">${escapeHtml(effectDate)}</td></tr>` : ""}</table>${motif ? `<div style="background:#f7f8fa;padding:16px 20px;border-radius:8px;margin-bottom:20px;"><p style="font-weight:600;margin:0 0 8px;font-size:13px;color:#5a6c80;">Motif</p><p style="margin:0;white-space:pre-wrap;font-size:14px;">${escapeHtml(motif)}</p></div>` : ""}<div style="background:#fff5f5;border:1px solid #fecaca;padding:12px 16px;border-radius:8px;margin-bottom:20px;"><p style="font-size:13px;color:#991b1b;margin:0;font-weight:600;">Traitement obligatoire sous 30 jours (L113-15-2).</p></div><p style="font-size:11px;color:#5a6c80;margin:32px 0 0;padding-top:16px;border-top:1px solid #e5e7eb;">COVERSEAS SASU · ORIAS 26000597</p></div>`;

    await sendBrevoEmail({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: RESILIATION_TO_EMAIL }],
      replyTo: { email, name: fullName },
      subject: `[ANSET Résiliation ${reference}] Contrat ${contractNumber} — ${fullName}`,
      htmlContent: adminHtml,
    });

    const clientHtml = `<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;max-width:600px;margin:0 auto;padding:32px 24px;color:#0a1f44;"><h1 style="font-size:22px;margin:0 0 8px;letter-spacing:-0.5px;">Accusé de réception de votre demande de résiliation</h1><p style="font-size:13px;color:#5a6c80;margin:0 0 24px;">Référence : <strong>${reference}</strong></p><p style="font-size:14px;line-height:1.6;margin:16px 0;">Bonjour ${escapeHtml(firstName)},</p><p style="font-size:14px;line-height:1.6;margin:0 0 16px;">Nous accusons réception de votre demande de résiliation, déposée le ${submissionDate} via notre site internet, conformément à l'article L113-15-2 du Code des assurances.</p><div style="background:#f7f8fa;padding:16px 20px;border-radius:8px;margin:24px 0;"><p style="font-weight:600;margin:0 0 8px;font-size:13px;color:#5a6c80;text-transform:uppercase;letter-spacing:0.5px;">Récapitulatif</p><p style="margin:4px 0;font-size:13px;"><span style="color:#5a6c80;">Référence :</span> <strong>${reference}</strong></p><p style="margin:4px 0;font-size:13px;"><span style="color:#5a6c80;">Type de contrat :</span> ${escapeHtml(typeLabel)}</p><p style="margin:4px 0;font-size:13px;"><span style="color:#5a6c80;">N° de contrat :</span> <strong>${escapeHtml(contractNumber)}</strong></p>${effectDate ? `<p style="margin:4px 0;font-size:13px;"><span style="color:#5a6c80;">Date d'effet souhaitée :</span> ${escapeHtml(effectDate)}</p>` : ""}</div><p style="font-size:14px;line-height:1.6;margin:0 0 16px;"><strong>Délai de traitement :</strong> la confirmation de la date effective de résiliation vous sera adressée dans un délai maximal de 30 jours.</p><p style="font-size:14px;line-height:1.6;margin:0 0 24px;">Conservez précieusement cet email comme preuve de votre démarche. Pour toute question, vous pouvez nous joindre par retour d'email.</p><p style="font-size:14px;line-height:1.6;margin:0 0 4px;">Bien cordialement,</p><p style="font-size:14px;line-height:1.6;margin:0;font-weight:600;">L'équipe ANSET Assurances</p><p style="font-size:11px;color:#5a6c80;margin:32px 0 0;padding-top:16px;border-top:1px solid #e5e7eb;line-height:1.6;">ANSET Assurances est une marque de COVERSEAS SASU, courtier en assurances immatriculé à l'ORIAS sous le n° 26000597.</p></div>`;

    await sendBrevoEmail({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email, name: fullName }],
      subject: `Accusé de réception — Résiliation ${reference}`,
      htmlContent: clientHtml,
    });

    return NextResponse.json({ ok: true, reference }, { status: 200 });
  } catch (error) {
    console.error("[resiliation] error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi. Réessayez ou contactez-nous par email." }, { status: 500 });
  }
}