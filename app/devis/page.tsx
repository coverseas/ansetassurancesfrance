import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FileText, CalendarClock, Phone, Clock, ShieldCheck } from "lucide-react";
import { CONTACT, CALENDLY } from "@/lib/constants";
import DevisForm from "@/components/forms/DevisForm";

export const metadata: Metadata = {
  title: "Demander un devis",
  description: "Demandez votre devis d'assurance auto ou moto en quelques secondes, ou prenez rendez-vous avec un conseiller ANSET. Réponse rapide, accompagnement humain 6j/7.",
};

const PRODUCT_LABELS: Record<string, string> = {
  auto: "auto",
  moto: "moto, cyclo & scooter",
  "zen-facture": "Zen Facture",
};

export default async function DevisPage({
  searchParams,
}: {
  searchParams: Promise<{ produit?: string }>;
}) {
  const { produit } = await searchParams;
  const key = produit && PRODUCT_LABELS[produit] ? produit : "autre";
  const productName = PRODUCT_LABELS[key];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-b from-anset-moutarde-soft to-white py-16 md:py-24 border-b border-anset-blue/10">
        <div className="container-anset max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-moutarde-dark transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <span className="inline-flex items-center gap-2 text-anset-moutarde-dark text-[11px] font-black uppercase tracking-[2.5px] mb-5">
            <FileText className="w-3.5 h-3.5" strokeWidth={2.2} aria-hidden="true" />
            Demande de devis
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[56px] font-black text-anset-blue tracking-[-0.04em] leading-[1.05] mb-6">
            Votre devis{productName ? " " : " assurance"}
            {productName && <span className="text-anset-moutarde-dark"> {productName}</span>},
            <br />
            <span className="text-anset-moutarde-dark">sur mesure</span>.
          </h1>
          <p className="text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl">
            Remplissez le formulaire et un conseiller ANSET revient vers vous avec une offre claire et adaptée. Vous préférez en parler de vive voix ? Prenez rendez-vous, on vous rappelle.
          </p>
        </div>
      </section>

      {/* DEUX CHEMINS */}
      <section className="py-12 md:py-16">
        <div className="container-anset max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <a href="#formulaire" className="bg-anset-moutarde-soft rounded-2xl p-6 border border-anset-moutarde/30 hover:shadow-premium transition-all block group">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-premium-sm">
                <FileText className="w-5 h-5 text-anset-moutarde-dark" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h2 className="text-lg font-black text-anset-blue tracking-tight mb-1">Demander un devis en ligne</h2>
              <p className="text-sm text-anset-slate font-medium leading-relaxed">
                Le plus simple : quelques informations et nous préparons votre offre.
              </p>
            </a>

            <Link href={CALENDLY.sectionHref} className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm hover:border-anset-corail/40 hover:shadow-premium transition-all block group">
              <div className="w-12 h-12 bg-anset-corail-soft rounded-xl flex items-center justify-center mb-4">
                <CalendarClock className="w-5 h-5 text-anset-corail-dark" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h2 className="text-lg font-black text-anset-blue tracking-tight mb-1 group-hover:text-anset-corail-dark transition-colors">Parler à un conseiller</h2>
              <p className="text-sm text-anset-slate font-medium leading-relaxed">
                Réservez un créneau, un conseiller vous rappelle à l'horaire choisi.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FORMULAIRE */}
      <section id="formulaire" className="scroll-mt-24 pb-14 md:pb-20">
        <div className="container-anset max-w-3xl">
          <div className="mb-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-moutarde-dark mb-2">Le formulaire</p>
            <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight leading-[1.15] mb-3">
              Dites-nous ce que vous voulez assurer.
            </h2>
            <p className="text-base text-anset-slate leading-relaxed font-medium">
              Vous recevez une confirmation par email, puis votre devis personnalisé.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-premium border border-anset-blue/8 p-6 md:p-10">
            <DevisForm defaultProduct={key} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8">
            <div className="flex items-start gap-2.5">
              <ShieldCheck className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.2} aria-hidden="true" />
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Sans engagement, gratuit.</p>
            </div>
            <div className="flex items-start gap-2.5">
              <Clock className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.2} aria-hidden="true" />
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Réponse sous 24h ouvrées.</p>
            </div>
            <div className="flex items-start gap-2.5">
              <Phone className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.2} aria-hidden="true" />
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Un conseiller dédié, {CONTACT.hours}.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
