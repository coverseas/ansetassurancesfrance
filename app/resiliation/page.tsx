import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, FileText, Mail, Clock } from "lucide-react";
import { CONTACT, COMPANY } from "@/lib/constants";
import ResiliationForm from "@/components/forms/ResiliationForm";

export const metadata: Metadata = {
  title: "Résilier mon contrat",
  description: "Procédure de résiliation conforme à l'article L113-15-2 du Code des assurances. Formulaire dédié, accusé de réception immédiat.",
};

export default function ResiliationPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-anset-lilas-soft to-white py-16 md:py-20 border-b border-anset-blue/10">
        <div className="container-anset max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-lilas transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <span className="inline-flex items-center gap-2 text-anset-lilas text-[11px] font-black uppercase tracking-[2.5px] mb-5">
            <FileText className="w-3.5 h-3.5" strokeWidth={2.2} aria-hidden="true" />
            Résiliation de contrat
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-anset-blue tracking-[-0.04em] leading-[1.05] mb-6">
            Résilier mon contrat <span className="text-anset-lilas">en quelques clics</span>.
          </h1>
          <p className="text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl">
            Procédure simplifiée conforme à l'article L113-15-2 du Code des assurances. Remplissez le formulaire ci-dessous, vous recevrez un accusé de réception immédiat.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-anset max-w-3xl">
          <div className="bg-white rounded-3xl shadow-premium border border-anset-blue/8 p-6 md:p-10">
            <ResiliationForm />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-anset-mist/30 border-y border-anset-blue/10">
        <div className="container-anset max-w-4xl">
          <div className="mb-8">
            <p className="text-[10px] uppercase tracking-[2.5px] text-anset-lilas font-black mb-2">Vos droits</p>
            <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight mb-3">
              Ce qui se passe <span className="text-anset-lilas">après votre demande</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
              <div className="w-10 h-10 bg-anset-blue/[0.08] rounded-xl flex items-center justify-center mb-3">
                <Mail className="w-5 h-5 text-anset-blue" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-black text-anset-blue tracking-tight mb-1">Accusé immédiat</h3>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Confirmation de réception par email dès l'envoi du formulaire, avec référence de dossier.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
              <div className="w-10 h-10 bg-anset-blue/[0.08] rounded-xl flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-anset-blue" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-black text-anset-blue tracking-tight mb-1">Traitement sous 30 jours</h3>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Confirmation avec date d'effet et prorata éventuel, dans le délai légal maximum.</p>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
              <div className="w-10 h-10 bg-anset-blue/[0.08] rounded-xl flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5 text-anset-blue" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-sm font-black text-anset-blue tracking-tight mb-1">Cadre légal</h3>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Article L113-15-2 (loi du 16 août 2022). Vous n'avez pas à motiver votre demande.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container-anset max-w-3xl">
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-anset-blue/10 shadow-premium-sm">
            <h2 className="text-xl md:text-2xl font-black text-anset-blue tracking-tight mb-3">Autres modes de résiliation</h2>
            <p className="text-sm text-anset-slate font-medium leading-relaxed mb-4">Si vous préférez, vous pouvez également résilier par :</p>
            <ul className="space-y-2 text-sm text-anset-slate font-medium leading-relaxed list-disc list-inside marker:text-anset-lilas">
              <li><span className="font-bold text-anset-blue">Email :</span> <a href={CONTACT.emailHref} className="text-anset-lilas font-bold underline">{CONTACT.email}</a> en précisant votre numéro de contrat et votre identité</li>
              <li><span className="font-bold text-anset-blue">Courrier postal :</span> {COMPANY.legalName}, {COMPANY.address.street}, {COMPANY.address.zip} {COMPANY.address.city}</li>
              <li><span className="font-bold text-anset-blue">Téléphone :</span> <a href={CONTACT.phoneHref} className="text-anset-lilas font-bold">{CONTACT.phoneDisplay}</a> aux horaires d'ouverture</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}