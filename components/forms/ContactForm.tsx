"use client";

import { useState, useRef } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";
import { sendTrustpilotInvitation } from "@/components/TrustpilotInvite";

const labelCls = "block text-[11px] font-black uppercase tracking-[1.5px] text-anset-blue/70 mb-1.5";
const inputCls = "w-full px-3.5 py-2.5 text-sm rounded-xl border border-anset-blue/15 bg-white focus:outline-none focus:border-anset-lilas focus:ring-2 focus:ring-anset-lilas/15 transition-colors font-medium text-anset-blue placeholder:text-anset-slate/50";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        setSubmitting(false);
        return;
      }
      setSuccess(true);
      formRef.current?.reset();

      // Invitation Trustpilot — sauf pour une réclamation (on ne sollicite pas
      // un avis public auprès d'un client mécontent).
      const email = String(formData.get("email") ?? "").trim();
      const subject = String(formData.get("subject") ?? "");
      if (email && subject !== "reclamation") {
        const name = [formData.get("firstName"), formData.get("lastName")]
          .map((v) => String(v ?? "").trim())
          .filter(Boolean)
          .join(" ");
        sendTrustpilotInvitation({
          recipientEmail: email,
          recipientName: name || "Client",
          referenceId: `contact-${Date.now()}`,
        });
      }
    } catch (err) {
      setError("Connexion impossible. Vérifiez votre réseau et réessayez.");
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 bg-anset-menthe/15 rounded-full flex items-center justify-center mx-auto mb-5">
          <Check className="w-7 h-7 text-anset-menthe" strokeWidth={2.5} />
        </div>
        <h3 className="text-2xl font-black text-anset-blue tracking-tight mb-3">Message envoyé !</h3>
        <p className="text-sm text-anset-slate font-medium leading-relaxed max-w-md mx-auto mb-6">
          Vous allez recevoir une confirmation par email. Notre équipe revient vers vous rapidement.
        </p>
        <button onClick={() => setSuccess(false)} className="inline-flex items-center gap-2 text-sm font-black text-anset-blue hover:text-anset-lilas transition-colors">
          Envoyer un autre message →
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <label className={labelCls} htmlFor="firstName">Prénom *</label>
          <input id="firstName" name="firstName" type="text" required className={inputCls} autoComplete="given-name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="lastName">Nom *</label>
          <input id="lastName" name="lastName" type="text" required className={inputCls} autoComplete="family-name" />
        </div>
        <div>
          <label className={labelCls} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required className={inputCls} autoComplete="email" />
        </div>
        <div>
          <label className={labelCls} htmlFor="phone">Téléphone (optionnel)</label>
          <input id="phone" name="phone" type="tel" className={inputCls} autoComplete="tel" />
        </div>
      </div>

      <div>
        <label className={labelCls} htmlFor="subject">Sujet *</label>
        <select id="subject" name="subject" required className={inputCls}>
          <option value="">— Choisissez —</option>
          <option value="devis">Demande de devis</option>
          <option value="info">Question commerciale</option>
          <option value="contrat">Question sur mon contrat existant</option>
          <option value="reclamation">Réclamation</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className={labelCls} htmlFor="message">Votre message *</label>
        <textarea id="message" name="message" required rows={6} className={inputCls} placeholder="Décrivez votre demande en quelques mots..." />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 rounded border-anset-blue/30 text-anset-lilas focus:ring-anset-lilas" />
        <label htmlFor="consent" className="text-xs text-anset-slate font-medium leading-relaxed">
          J'accepte que mes données soient utilisées pour répondre à ma demande, conformément à la <a href="/politique-de-confidentialite" className="text-anset-lilas underline hover:opacity-80 font-bold">politique de confidentialité</a>. *
        </label>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
          <p className="text-sm text-red-800 font-medium">{error}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-anset-blue text-white text-sm font-black px-7 py-3.5 rounded-2xl hover:bg-anset-blue-dark transition-colors shadow-premium disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Envoi en cours…
          </>
        ) : (
          <>Envoyer mon message</>
        )}
      </button>
    </form>
  );
}