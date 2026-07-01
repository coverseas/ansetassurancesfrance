"use client";

import { useState, useRef } from "react";
import { Loader2, Check, AlertCircle } from "lucide-react";

const labelCls = "block text-[11px] font-black uppercase tracking-[1.5px] text-anset-blue/70 mb-1.5";
const inputCls = "w-full px-3.5 py-2.5 text-sm rounded-xl border border-anset-blue/15 bg-white focus:outline-none focus:border-anset-lilas focus:ring-2 focus:ring-anset-lilas/15 transition-colors font-medium text-anset-blue placeholder:text-anset-slate/50";

export default function ResiliationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [reference, setReference] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const formData = new FormData(e.currentTarget);
      const res = await fetch("/api/resiliation", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Une erreur est survenue.");
        setSubmitting(false);
        return;
      }
      setReference(data.reference ?? null);
      setSuccess(true);
      formRef.current?.reset();
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
        <h3 className="text-2xl font-black text-anset-blue tracking-tight mb-3">Demande enregistrée</h3>
        {reference && (
          <p className="text-xs font-bold text-anset-lilas uppercase tracking-[1.5px] mb-3">Référence : {reference}</p>
        )}
        <p className="text-sm text-anset-slate font-medium leading-relaxed max-w-md mx-auto">
          Vous recevez à l'instant un accusé de réception par email. La confirmation de prise en compte avec la date d'effet vous parviendra sous 30 jours maximum, conformément à l'article L113-15-2 du Code des assurances.
        </p>
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
        <label className={labelCls} htmlFor="contractType">Type de contrat *</label>
        <select id="contractType" name="contractType" required className={inputCls}>
          <option value="">— Choisissez —</option>
          <option value="sante-animale">Santé chien-chat</option>
          <option value="moto-cyclo">Moto et cyclo</option>
          <option value="autre">Autre</option>
        </select>
      </div>

      <div>
        <label className={labelCls} htmlFor="contractNumber">Numéro de contrat *</label>
        <input id="contractNumber" name="contractNumber" type="text" required className={inputCls} placeholder="Ex : 505 241" />
      </div>

      <div>
        <label className={labelCls} htmlFor="effectDate">Date d'effet souhaitée (optionnel)</label>
        <input id="effectDate" name="effectDate" type="date" className={inputCls} />
        <p className="text-[11px] text-anset-slate font-medium mt-1.5">À défaut, la résiliation prendra effet selon les délais légaux applicables au contrat.</p>
      </div>

      <div>
        <label className={labelCls} htmlFor="motif">Motif (optionnel)</label>
        <textarea id="motif" name="motif" rows={3} className={inputCls} placeholder="Vous n'êtes pas tenu de donner un motif." />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input type="checkbox" id="consent" name="consent" required className="mt-1 w-4 h-4 rounded border-anset-blue/30 text-anset-lilas focus:ring-anset-lilas" />
        <label htmlFor="consent" className="text-xs text-anset-slate font-medium leading-relaxed">
          Je confirme être titulaire du contrat ou son représentant légal, et je demande la résiliation conformément à l'article L113-15-2 du Code des assurances. *
        </label>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-2.5">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={2} />
          <p className="text-sm text-red-800 font-medium">{error}</p>
        </div>
      )}

      <button type="submit" disabled={submitting} className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-anset-blue text-white text-sm font-black px-7 py-3.5 rounded-2xl hover:bg-anset-blue-dark transition-colors shadow-premium disabled:opacity-60 disabled:cursor-not-allowed">
        {submitting ? (<><Loader2 className="w-4 h-4 animate-spin" />Envoi en cours…</>) : (<>Confirmer ma demande de résiliation</>)}
      </button>
    </form>
  );
}