import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

const BREVO_API_URL = "https://api.brevo.com/v3/smtp/email";
const BREVO_API_KEY = process.env.BREVO_API_KEY;
const FROM_EMAIL = process.env.BREVO_FROM_EMAIL ?? "";
const FROM_NAME = process.env.BREVO_FROM_NAME ?? "ANSET Assurances";
const ANSET_CC_EMAIL = process.env.ANSET_SINISTRE_CC ?? "";

const MAX_FILE_SIZE = 1024 * 1024 * 1.5;
const MAX_TOTAL_SIZE = 1024 * 1024 * 4;
const MAX_FILES = 6;
const ALLOWED_TYPES = ["application/pdf", "image/jpeg", "image/jpg", "image/png", "image/heic", "image/heif"];

const GROUPAMA_EMAIL = "chienchat@protectionjuridique.fr";

interface BrevoEmailPayload {
  sender: { name: string; email: string };
  to: Array<{ email: string; name?: string }>;
  cc?: Array<{ email: string; name?: string }>;
  replyTo?: { email: string; name?: string };
  subject: string;
  htmlContent: string;
  attachment?: Array<{ name: string; content: string }>;
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function sendBrevoEmail(payload: BrevoEmailPayload) {
  if (!BREVO_API_KEY) {
    throw new Error("BREVO_API_KEY non configurée");
  }
  if (!FROM_EMAIL) {
    throw new Error("BREVO_FROM_EMAIL non configurée");
  }

  const res = await fetch(BREVO_API_URL, {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": BREVO_API_KEY,
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

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    if (formData.get("website")) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const contractNumber = String(formData.get("contractNumber") ?? "").trim();
    const animalName = String(formData.get("animalName") ?? "").trim();
    const sinistreType = String(formData.get("sinistreType") ?? "").trim();
    const sinistreDate = String(formData.get("sinistreDate") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const consent = formData.get("consent") === "on";

    if (!firstName || !lastName || !email || !contractNumber || !animalName) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }
    if (!consent) {
      return NextResponse.json({ error: "Vous devez accepter la transmission de vos données." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Adresse email invalide." }, { status: 400 });
    }

    const fileEntries = formData.getAll("files");
    const files = fileEntries.filter((entry): entry is File => entry instanceof File && entry.size > 0);

    if (files.length === 0) {
      return NextResponse.json({ error: "Veuillez joindre au moins un justificatif." }, { status: 400 });
    }
    if (files.length > MAX_FILES) {
      return NextResponse.json({ error: `Maximum ${MAX_FILES} fichiers.` }, { status: 400 });
    }

    let totalSize = 0;
    for (const file of files) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json({ error: `Fichier "${file.name}" trop volumineux (max 1.5 Mo).` }, { status: 400 });
      }
      if (!ALLOWED_TYPES.includes(file.type)) {
        return NextResponse.json({ error: `Format non autorisé pour "${file.name}". PDF, JPG, PNG ou HEIC uniquement.` }, { status: 400 });
      }
      totalSize += file.size;
    }
    if (totalSize > MAX_TOTAL_SIZE) {
      return NextResponse.json({ error: "Taille totale dépassée (max 4 Mo)." }, { status: 400 });
    }

    const attachments = await Promise.all(
      files.map(async (file) => ({
        name: file.name,
        content: Buffer.from(await file.arrayBuffer()).toString("base64"),
      }))
    );

    const fullName = `${firstName} ${lastName}`;
    const submissionDate = new Date().toLocaleString("fr-FR", { dateStyle: "long", timeStyle: "short", timeZone: "Europe/Paris" });

    const typeLabel: Record<string, string> = {
      accident: "Accident",
      maladie: "Maladie",
      suivi: "Visite de suivi",
    };

    const groupamaHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; color: #0a1f44;">
        <h1 style="font-size: 20px; margin: 0 0 8px; color: #0a1f44;">Nouvelle demande de remboursement</h1>
        <p style="font-size: 13px; color: #5a6c80; margin: 0 0 24px;">Transmise via le portail ANSET Assurances · ${submissionDate}</p>
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
          <tr><td style="padding: 8px 12px 8px 0; font-weight: 600; width: 40%; vertical-align: top; color: #5a6c80;">Souscripteur</td><td style="padding: 8px 0; vertical-align: top;">${escapeHtml(fullName)}</td></tr>
          <tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; color: #5a6c80;">Email</td><td style="padding: 8px 0; vertical-align: top;"><a href="mailto:${escapeHtml(email)}" style="color: #0a1f44;">${escapeHtml(email)}</a></td></tr>
          ${phone ? `<tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; color: #5a6c80;">Téléphone</td><td style="padding: 8px 0; vertical-align: top;">${escapeHtml(phone)}</td></tr>` : ""}
          <tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; color: #5a6c80;">N° de contrat</td><td style="padding: 8px 0; vertical-align: top; font-family: ui-monospace, monospace;">${escapeHtml(contractNumber)}</td></tr>
          <tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; color: #5a6c80;">Animal</td><td style="padding: 8px 0; vertical-align: top;">${escapeHtml(animalName)}</td></tr>
          ${sinistreType && typeLabel[sinistreType] ? `<tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; color: #5a6c80;">Type</td><td style="padding: 8px 0; vertical-align: top;">${typeLabel[sinistreType]}</td></tr>` : ""}
          ${sinistreDate ? `<tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; color: #5a6c80;">Date du sinistre</td><td style="padding: 8px 0; vertical-align: top;">${escapeHtml(sinistreDate)}</td></tr>` : ""}
          <tr><td style="padding: 8px 12px 8px 0; font-weight: 600; vertical-align: top; color: #5a6c80;">Pièces jointes</td><td style="padding: 8px 0; vertical-align: top;">${files.length} fichier${files.length > 1 ? "s" : ""}</td></tr>
        </table>
        ${message ? `<div style="background: #f7f8fa; padding: 16px; border-radius: 8px; margin-bottom: 20px;"><p style="font-weight: 600; margin: 0 0 8px; font-size: 13px; color: #5a6c80;">Message du souscripteur</p><p style="margin: 0; white-space: pre-wrap; font-size: 14px; line-height: 1.5;">${escapeHtml(message)}</p></div>` : ""}
        <p style="font-size: 11px; color: #5a6c80; margin: 32px 0 0; padding-top: 16px; border-top: 1px solid #e5e7eb; line-height: 1.5;">Distributeur : COVERSEAS SASU · 6 rue d'Armaillé, 75017 Paris · ORIAS 26000597. Le souscripteur a accepté la transmission de ses données à Groupama PJ pour gestion du sinistre.</p>
      </div>
    `;

    const groupamaCc = ANSET_CC_EMAIL ? [{ email: ANSET_CC_EMAIL }] : undefined;

    await sendBrevoEmail({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email: GROUPAMA_EMAIL, name: "Groupama Protection Juridique" }],
      cc: groupamaCc,
      replyTo: { email, name: fullName },
      subject: `Demande de remboursement ANSET — ${fullName} — Contrat ${contractNumber}`,
      htmlContent: groupamaHtml,
      attachment: attachments,
    });

    const clientHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; color: #0a1f44;">
        <h1 style="font-size: 22px; margin: 0 0 8px; letter-spacing: -0.5px;">Votre demande a bien été transmise.</h1>
        <p style="font-size: 14px; line-height: 1.6; margin: 16px 0;">Bonjour ${escapeHtml(firstName)},</p>
        <p style="font-size: 14px; line-height: 1.6; margin: 0 0 16px;">Nous accusons réception de votre demande de remboursement concernant <strong>${escapeHtml(animalName)}</strong> (contrat n° ${escapeHtml(contractNumber)}). Votre dossier accompagné de ${files.length} pièce${files.length > 1 ? "s" : ""} justificative${files.length > 1 ? "s" : ""} a été transmis à <strong>Groupama Protection Juridique</strong>, qui assure votre contrat. Vous serez recontacté directement par leur service sinistres.</p>
        <div style="background: #f7f8fa; padding: 16px 20px; border-radius: 8px; margin: 24px 0;">
          <p style="font-weight: 600; margin: 0 0 12px; font-size: 13px; color: #5a6c80; text-transform: uppercase; letter-spacing: 0.5px;">Récapitulatif</p>
          <p style="margin: 4px 0; font-size: 13px;"><span style="color: #5a6c80;">Souscripteur :</span> ${escapeHtml(fullName)}</p>
          <p style="margin: 4px 0; font-size: 13px;"><span style="color: #5a6c80;">N° de contrat :</span> ${escapeHtml(contractNumber)}</p>
          <p style="margin: 4px 0; font-size: 13px;"><span style="color: #5a6c80;">Animal :</span> ${escapeHtml(animalName)}</p>
          ${sinistreType && typeLabel[sinistreType] ? `<p style="margin: 4px 0; font-size: 13px;"><span style="color: #5a6c80;">Type :</span> ${typeLabel[sinistreType]}</p>` : ""}
          <p style="margin: 4px 0; font-size: 13px;"><span style="color: #5a6c80;">Pièces jointes :</span> ${files.length}</p>
          <p style="margin: 4px 0; font-size: 13px;"><span style="color: #5a6c80;">Soumis le :</span> ${submissionDate}</p>
        </div>
        <p style="font-size: 14px; line-height: 1.6; margin: 0 0 16px;"><strong>Une question sur votre dossier ?</strong> Contactez directement le service sinistres Groupama PJ au <strong>+33 1 41 43 77 16</strong> (taper 3), du lundi au vendredi de 9h à 17h30 (heure métropole), ou écrivez à <a href="mailto:chienchat@protectionjuridique.fr" style="color: #0a1f44;">chienchat@protectionjuridique.fr</a>.</p>
        <p style="font-size: 14px; line-height: 1.6; margin: 0 0 24px;">Pour toute question sur votre contrat, l'équipe ANSET reste à votre disposition.</p>
        <p style="font-size: 14px; line-height: 1.6; margin: 0 0 4px;">À vos côtés, à tout moment.</p>
        <p style="font-size: 14px; line-height: 1.6; margin: 0; font-weight: 600;">L'équipe ANSET Assurances</p>
        <p style="font-size: 11px; color: #5a6c80; margin: 32px 0 0; padding-top: 16px; border-top: 1px solid #e5e7eb; line-height: 1.6;">ANSET Assurances est une marque de COVERSEAS SASU, courtier en assurances immatriculé à l'ORIAS sous le n° 26000597. Le contrat Santé chien & chat est assuré par Groupama Protection Juridique (RCS Paris 321 776 775), sous le contrôle de l'ACPR.</p>
      </div>
    `;

    await sendBrevoEmail({
      sender: { name: FROM_NAME, email: FROM_EMAIL },
      to: [{ email, name: fullName }],
      subject: "Confirmation de votre demande de remboursement — ANSET Assurances",
      htmlContent: clientHtml,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[sinistre] error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi. Réessayez ou contactez-nous directement." }, { status: 500 });
  }
}