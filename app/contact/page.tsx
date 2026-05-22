import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT, COMPANY } from "@/lib/constants";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez ANSET Assurances par téléphone, email, ou via notre formulaire. Conseillers humains 6j/7, Poé l'IA 24h/24.",
};

export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-anset-lilas-soft to-white py-16 md:py-24 border-b border-anset-blue/10">
        <div className="container-anset max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-lilas transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <span className="inline-flex items-center gap-2 text-anset-lilas text-[11px] font-black uppercase tracking-[2.5px] mb-5">
            <Mail className="w-3.5 h-3.5" strokeWidth={2.2} aria-hidden="true" />
            Nous contacter
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-[56px] font-black text-anset-blue tracking-[-0.04em] leading-[1.05] mb-6">
            Une question ?<br />
            <span className="text-anset-lilas">Parlez-nous.</span>
          </h1>
          <p className="text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl">
            Téléphone, email, formulaire : choisissez le canal qui vous convient. Nos conseillers répondent 6 jours sur 7, et Poé prend le relais en dehors des horaires.
          </p>
        </div>
      </section>

      <section className="py-14 md:py-18">
        <div className="container-anset max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <a href={CONTACT.phoneHref} className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm hover:border-anset-corail/40 hover:shadow-premium transition-all block group">
              <div className="w-12 h-12 bg-anset-corail-soft rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-5 h-5 text-anset-corail-dark" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-anset-blue tracking-tight mb-1 group-hover:text-anset-corail-dark transition-colors">Téléphone</h3>
              <p className="text-xl font-black text-anset-blue tracking-tight mb-2">{CONTACT.phoneDisplay}</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">
                Lundi-vendredi 9h-19h<br />
                Samedi 9h-13h
              </p>
            </a>

            <a href={CONTACT.emailHref} className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm hover:border-anset-moutarde/40 hover:shadow-premium transition-all block group">
              <div className="w-12 h-12 bg-anset-moutarde-soft rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-anset-moutarde-dark" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black text-anset-blue tracking-tight mb-1 group-hover:text-anset-moutarde-dark transition-colors">Email</h3>
              <p className="text-sm font-bold text-anset-blue mb-2 break-all">{CONTACT.email}</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">
                Réponse sous 24h ouvrées<br />
                en moyenne
              </p>
            </a>

            <Link href="#formulaire" className="bg-anset-lilas text-white rounded-2xl p-6 hover:opacity-90 transition-all block">
              <div className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center mb-4">
                <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-lg font-black tracking-tight mb-1">Formulaire</h3>
              <p className="text-sm font-bold mb-2">Écrivez-nous</p>
              <p className="text-xs text-white/85 font-medium leading-relaxed">
                Confirmation par email<br />
                après envoi
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-anset-mist/30 border-y border-anset-blue/10">
        <div className="container-anset max-w-5xl">
          <div className="mb-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-lilas mb-2">Selon votre besoin</p>
            <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight leading-[1.15] mb-3">
              Le bon email <span className="text-anset-lilas">au bon endroit</span>.
            </h2>
            <p className="text-base text-anset-slate leading-relaxed font-medium max-w-2xl">
              Adressez votre demande à la bonne équipe pour un traitement plus rapide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href={CONTACT.emailHref} className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm hover:border-anset-blue/30 transition-all block">
              <p className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/60 font-black mb-1">Information &amp; devis</p>
              <p className="text-base font-black text-anset-blue mb-1">{CONTACT.email}</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Question commerciale, demande de devis, renseignement général.</p>
            </a>
            <Link href="/sinistre/sante-animale" className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm hover:border-anset-moutarde/40 transition-all block">
              <p className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/60 font-black mb-1">Sinistre santé animale</p>
              <p className="text-base font-black text-anset-blue mb-1">Formulaire dédié →</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Déclaration et upload des pièces. Transmission directe à Groupama PJ.</p>
            </Link>
            <a href={CONTACT.emailReclamationsHref} className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm hover:border-anset-corail/40 transition-all block">
              <p className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/60 font-black mb-1">Réclamation</p>
              <p className="text-base font-black text-anset-blue mb-1">{CONTACT.emailReclamations}</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Mécontentement sur un service ou un contrat. Réponse sous 10 jours ouvrés.</p>
            </a>
            <a href={CONTACT.emailDpoHref} className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm hover:border-anset-lilas/40 transition-all block">
              <p className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/60 font-black mb-1">RGPD · Données personnelles</p>
              <p className="text-base font-black text-anset-blue mb-1">{CONTACT.emailDpo}</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">Exercice de vos droits, demande d'accès ou de suppression.</p>
            </a>
          </div>
        </div>
      </section>

      <section id="formulaire" className="py-14 md:py-18">
        <div className="container-anset max-w-3xl">
          <div className="mb-8">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-lilas mb-2">Écrivez-nous</p>
            <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight leading-[1.15] mb-3">
              Votre message, <span className="text-anset-lilas">direct dans notre boîte</span>.
            </h2>
            <p className="text-base text-anset-slate leading-relaxed font-medium">
              Remplissez le formulaire ci-dessous, vous recevrez une confirmation et notre équipe vous répondra rapidement.
            </p>
          </div>
          <div className="bg-white rounded-3xl shadow-premium border border-anset-blue/8 p-6 md:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 bg-anset-mist/30 border-y border-anset-blue/10">
        <div className="container-anset max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="bg-white rounded-2xl p-6 md:p-7 border border-anset-blue/10 shadow-premium-sm">
              <div className="w-10 h-10 bg-anset-blue/[0.08] rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-anset-blue" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-base font-black text-anset-blue tracking-tight mb-2">Notre adresse</h3>
              <p className="text-sm text-anset-slate font-medium leading-relaxed mb-1">{COMPANY.address.street}</p>
              <p className="text-sm text-anset-slate font-medium leading-relaxed mb-3">{COMPANY.address.zip} {COMPANY.address.city}</p>
              <p className="text-xs text-anset-slate/70 font-medium leading-relaxed">
                COVERSEAS SASU · ORIAS {COMPANY.oriasNumber}<br />
                Courtier d'assurance ou de réassurance
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-7 border border-anset-blue/10 shadow-premium-sm">
              <div className="w-10 h-10 bg-anset-blue/[0.08] rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-5 h-5 text-anset-blue" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className="text-base font-black text-anset-blue tracking-tight mb-3">Horaires conseillers</h3>
              <div className="space-y-2 mb-3">
                {CONTACT.hoursDetailed.map((slot) => (
                  <div key={slot.day} className="flex items-center justify-between text-sm">
                    <span className="text-anset-slate font-medium">{slot.day}</span>
                    <span className="text-anset-blue font-bold">{slot.time}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-anset-slate/70 font-medium leading-relaxed">
                En dehors des horaires, Poé prend le relais 24h/24.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-anset-blue text-white">
        <div className="container-anset max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.1] mb-3">
            Vous savez nous joindre.<br />
            <span className="text-anset-lilas">À vous de jouer.</span>
          </h2>
          <p className="text-base text-white/75 font-medium mb-8">
            Pour souscrire ou simplement vous renseigner.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#offres" className="inline-flex items-center justify-center gap-2 bg-white text-anset-blue text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-mist transition-colors">
              Découvrir nos offres
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <a href={CONTACT.phoneHref} className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-white/10 transition-colors">
              <Phone className="w-4 h-4" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}