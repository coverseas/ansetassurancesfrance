import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, Download, FileText, BookOpen } from "lucide-react";
import SinistreForm from "@/components/forms/SinistreForm";

export const metadata: Metadata = {
  title: "Dépôt de prise en charge — Santé chien-chat",
  description: "Formulaire de demande de remboursement pour votre contrat santé chien-chat ANSET. Transmission directe à Groupama Protection Juridique.",
};

export default function SinistreSanteAnimalePage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-b from-anset-moutarde-soft to-white py-12 md:py-20 border-b border-anset-blue/10">
        <div className="container-anset max-w-4xl">
          <Link href="/produits/sante-chien-chat" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-moutarde-dark transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à la santé chien-chat
          </Link>
          <span className="inline-flex items-center gap-2 text-anset-moutarde-dark text-[11px] font-black uppercase tracking-[2.5px] mb-5">
            <Heart className="w-3.5 h-3.5" strokeWidth={2.2} aria-hidden="true" />
            Dépôt de prise en charge
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-anset-blue tracking-[-0.04em] leading-[1.05] mb-4">
            Déposez votre demande <span className="text-anset-moutarde-dark">en quelques minutes</span>.
          </h1>
          <p className="text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl">
            Remplissez le formulaire ci-dessous avec vos pièces justificatives. Votre dossier sera transmis directement à Groupama Protection Juridique.
          </p>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-anset-mist/30 border-b border-anset-blue/10">
        <div className="container-anset max-w-3xl">
          <h2 className="text-lg md:text-xl font-black text-anset-blue tracking-tight mb-1.5">Documents utiles à télécharger</h2>
          <p className="text-sm text-anset-slate font-medium leading-relaxed mb-5">
            Le formulaire de prise en charge à remplir et le mode d'emploi pour vous faire rembourser vos soins.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="/docs/Feuille%20de%20soins-102025-VDef.pdf"
              download
              className="group flex items-center gap-4 bg-white rounded-2xl p-4 md:p-5 border border-anset-blue/10 shadow-premium-sm hover:border-anset-moutarde-dark/40 hover:shadow-premium transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-anset-moutarde-soft flex items-center justify-center flex-shrink-0 text-anset-moutarde-dark">
                <FileText className="w-5 h-5" strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-anset-blue tracking-tight leading-tight">Formulaire de prise en charge</p>
                <p className="text-xs text-anset-slate font-medium mt-0.5">Feuille de soins à compléter · PDF</p>
              </div>
              <Download className="w-4 h-4 text-anset-slate group-hover:text-anset-moutarde-dark transition-colors flex-shrink-0" strokeWidth={2.2} aria-hidden="true" />
            </a>
            <a
              href="/docs/Mode-emploi-comment%20se%20faire%20rembourser%20les%20soins-102025-VDef.pdf"
              download
              className="group flex items-center gap-4 bg-white rounded-2xl p-4 md:p-5 border border-anset-blue/10 shadow-premium-sm hover:border-anset-moutarde-dark/40 hover:shadow-premium transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-anset-moutarde-soft flex items-center justify-center flex-shrink-0 text-anset-moutarde-dark">
                <BookOpen className="w-5 h-5" strokeWidth={1.9} aria-hidden="true" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-black text-anset-blue tracking-tight leading-tight">Tuto remboursement</p>
                <p className="text-xs text-anset-slate font-medium mt-0.5">Comment se faire rembourser · PDF</p>
              </div>
              <Download className="w-4 h-4 text-anset-slate group-hover:text-anset-moutarde-dark transition-colors flex-shrink-0" strokeWidth={2.2} aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="container-anset max-w-3xl">
          <div className="bg-white rounded-3xl shadow-premium border border-anset-blue/8 p-5 md:p-10">
            <SinistreForm />
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-anset-mist/30 border-y border-anset-blue/10">
        <div className="container-anset max-w-3xl">
          <div className="bg-white rounded-2xl p-5 md:p-7 border border-anset-blue/10 shadow-premium-sm">
            <h2 className="text-lg md:text-xl font-black text-anset-blue tracking-tight mb-3">Besoin d'aide pour votre déclaration ?</h2>
            <p className="text-sm text-anset-slate font-medium leading-relaxed mb-3">
              Vous pouvez aussi joindre directement Groupama Protection Juridique :
            </p>
            <ul className="space-y-1.5 text-sm text-anset-slate font-medium leading-relaxed list-disc list-inside marker:text-anset-moutarde-dark">
              <li><span className="font-bold text-anset-blue">Téléphone :</span> +33 1 41 43 77 16 (taper 3), lundi-vendredi 9h-17h30</li>
              <li><span className="font-bold text-anset-blue">Email :</span> chienchat@protectionjuridique.fr</li>
              <li><span className="font-bold text-anset-blue">Courrier :</span> Groupama Protection Juridique, TSA 41234, 92874 Boulogne-Billancourt Cedex 9</li>
            </ul>
          </div>
        </div>
      </section>

    </main>
  );
}