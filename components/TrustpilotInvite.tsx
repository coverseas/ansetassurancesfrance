"use client";

import Script from "next/script";

/**
 * Trustpilot Automatic Feedback Service (AFS).
 * Charge le loader d'invitations Trustpilot et enregistre le compte.
 *
 * La clé d'intégration est fournie via NEXT_PUBLIC_TRUSTPILOT_KEY.
 * Tant que la clé n'est pas définie (ex. en preview), rien n'est chargé.
 *
 * Une fois enregistré, on peut envoyer une invitation à laisser un avis
 * après une conversion (souscription, demande de contact) avec :
 *   window.tp('createInvitation', {
 *     recipientEmail, recipientName, referenceId, source: 'InvitationScript',
 *   });
 */
const TP_KEY = process.env.NEXT_PUBLIC_TRUSTPILOT_KEY;
const TP_TEMPLATE_ID = process.env.NEXT_PUBLIC_TRUSTPILOT_TEMPLATE_ID;

declare global {
  interface Window {
    tp?: (...args: unknown[]) => void;
  }
}

/**
 * Envoie une invitation à laisser un avis Trustpilot après une conversion.
 * No-op silencieux si Trustpilot n'est pas configuré (clé absente, script non chargé).
 */
export function sendTrustpilotInvitation(params: {
  recipientEmail: string;
  recipientName: string;
  referenceId: string;
}) {
  if (typeof window === "undefined" || typeof window.tp !== "function") return;

  const invitation: Record<string, string> = {
    recipientEmail: params.recipientEmail,
    recipientName: params.recipientName,
    referenceId: params.referenceId,
    source: "InvitationScript",
  };
  if (TP_TEMPLATE_ID) invitation.templateId = TP_TEMPLATE_ID;

  window.tp("createInvitation", invitation);
}

export function TrustpilotInvite() {
  if (!TP_KEY) return null;

  return (
    <Script id="trustpilot-afs" strategy="afterInteractive">
      {`(function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
        var a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;var f=d.getElementsByTagName(s)[0];
        f.parentNode.insertBefore(a,f)})(window,document,'script','https://invitejs.trustpilot.com/tp.min.js','tp');
        tp('register', '${TP_KEY}');`}
    </Script>
  );
}
