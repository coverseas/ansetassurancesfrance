import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Cat, PawPrint, Stethoscope, Calendar, Shield, FileCheck, AlertCircle, CalendarClock, MapPin, Check, X, Download, FileText, BookOpen } from "lucide-react";
import { CALENDLY } from "@/lib/constants";
import CoverseasSubscription from "@/components/CoverseasSubscription";

export const metadata: Metadata = {
  title: "Santé chien & chat · ANSET Assurances",
  description: "Assurance santé pour votre chien ou votre chat. Deux formules au choix (accident ou accident + maladie), avec ou sans franchise. Risque porté par Groupama PJ.",
};

const backLinkCls = "inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-moutarde-dark transition-colors mb-8";
const pillCls = "inline-flex items-center gap-2 text-anset-moutarde-dark text-[11px] font-black uppercase tracking-[2.5px] mb-5";
const h1Cls = "text-3xl md:text-5xl lg:text-[56px] font-black text-anset-blue tracking-[-0.04em] leading-[1.05] mb-6";
const leadCls = "text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl mb-8";
const heroBgCls = "bg-gradient-to-b from-anset-moutarde-soft to-white py-16 md:py-24 border-b border-anset-blue/10";
const sectionCls = "py-14 md:py-18";
const sectionMistCls = "py-14 md:py-18 bg-anset-mist/30 border-y border-anset-blue/10";
const sectionTitleCls = "text-2xl md:text-3xl font-black text-anset-blue tracking-tight leading-[1.15] mb-3";
const sectionLabelCls = "text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-moutarde-dark mb-2";
const formulaCardCls = "bg-white rounded-[20px] border-2 p-6 md:p-7 shadow-premium-sm";
const featureRowCls = "flex items-start gap-2.5 text-sm text-anset-slate leading-relaxed font-medium";
const ctaPrimaryCls = "inline-flex items-center justify-center gap-2 bg-anset-blue text-white text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-blue-dark transition-colors shadow-premium";
const ctaSecondaryCls = "inline-flex items-center justify-center gap-2 bg-white text-anset-blue border-2 border-anset-blue text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-mist transition-colors";

export default function SanteChienChatPage() {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className={heroBgCls}>
        <div className="container-anset max-w-5xl">
          <Link href="/" className={backLinkCls}>
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <span className={pillCls}>
            <PawPrint className="w-3.5 h-3.5" strokeWidth={2.2} aria-hidden="true" />
            Santé animale · Mes biens
          </span>
          <h1 className={h1Cls}>
            La santé de votre chien, de votre chat. <span className="text-anset-moutarde-dark">Couverte, où que vous soyez.</span>
          </h1>
          <p className={leadCls}>
            Deux formules pour protéger votre animal contre les accidents, et — si vous le souhaitez — contre les maladies. Souscription en ligne en quelques minutes, remboursement après envoi des justificatifs, résiliable à tout moment après un an.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="#souscription" className={ctaPrimaryCls}>
              Obtenir mon devis
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link href={CALENDLY.sectionHref} className={ctaSecondaryCls}>
              <CalendarClock className="w-4 h-4" aria-hidden="true" />
              Parler à un conseiller
            </Link>
          </div>
          <p className="mt-6 text-xs text-anset-slate/70 font-medium">
            Souscription 100% en ligne · Risque porté par Groupama Protection Juridique
          </p>
        </div>
      </section>

      {/* DEUX FORMULES */}
      <section className={sectionCls}>
        <div className="container-anset max-w-5xl">
          <div className="text-center mb-10">
            <p className={sectionLabelCls}>Nos formules</p>
            <h2 className={sectionTitleCls}>
              Deux niveaux de couverture, <span className="text-anset-moutarde-dark">au choix</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            <div className={`${formulaCardCls} border-anset-blue/12`}>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-anset-slate/60 font-black">Formule</p>
                  <h3 className="text-2xl font-black text-anset-blue tracking-tight mt-1">Smart</h3>
                </div>
                <div className="bg-anset-moutarde-soft text-anset-moutarde-dark text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Accident
                </div>
              </div>
              <p className="text-sm text-anset-slate font-medium leading-relaxed mb-5">
                Une couverture essentielle pour les accidents du quotidien : chute, morsure, ingestion de corps étranger, brûlure, piqûre.
              </p>
              <ul className="space-y-2.5 mb-5">
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Frais médicaux et chirurgicaux en cas d'accident</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Hospitalisation et transport en ambulance animalière</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Frais d'euthanasie en cas d'accident (jusqu'à 100€)</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Inhumation en cas de décès accidentel (jusqu'à 100€)</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Assistance (transport ou garde, jusqu'à 200€/an)</li>
              </ul>
              <div className="pt-4 border-t border-anset-blue/10 text-xs text-anset-slate font-medium">
                <strong className="text-anset-blue">Animal éligible :</strong> chien ou chat de plus de 2 mois, hors catégorie 1 et 2.
              </div>
            </div>

            <div className={`${formulaCardCls} border-anset-moutarde/40 relative`}>
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-anset-moutarde text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                Couverture complète
              </div>
              <div className="flex items-center justify-between mb-5 mt-2">
                <div>
                  <p className="text-[10px] uppercase tracking-[2px] text-anset-slate/60 font-black">Formule</p>
                  <h3 className="text-2xl font-black text-anset-blue tracking-tight mt-1">Premium</h3>
                </div>
                <div className="bg-anset-moutarde-soft text-anset-moutarde-dark text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                  Accident + Maladie
                </div>
              </div>
              <p className="text-sm text-anset-slate font-medium leading-relaxed mb-5">
                Tout ce que couvre Smart, plus les frais médicaux et chirurgicaux en cas de maladie, le suivi vétérinaire annuel et une injection vaccinale par an jusqu'aux 2 ans de l'animal.
              </p>
              <ul className="space-y-2.5 mb-5">
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Toutes les garanties de la formule Smart</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Frais médicaux et chirurgicaux en cas de maladie</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />1 consultation de suivi médical par an (jusqu'à 30€)</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />1 injection vaccinale par an jusqu'aux 2 ans</li>
                <li className={featureRowCls}><Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} />Stérilisation/castration/césarienne sous conditions médicales (jusqu'à 150€)</li>
              </ul>
              <div className="pt-4 border-t border-anset-blue/10 text-xs text-anset-slate font-medium">
                <strong className="text-anset-blue">Animal éligible :</strong> chien ou chat entre 2 mois et 8 ans à la souscription, hors catégorie 1 et 2.
              </div>
            </div>

          </div>

          <div className="mt-8 bg-anset-blue/[0.03] rounded-2xl p-5 md:p-6 border border-anset-blue/10">
            <p className="text-xs uppercase tracking-[2px] text-anset-moutarde-dark font-black mb-2">Plafond annuel</p>
            <p className="text-anset-blue font-bold leading-relaxed">
              <span className="text-2xl md:text-3xl font-black mr-2">2 000€ TTC</span> remboursés par année d'assurance, dont 1 600€ pour les frais de soins et 400€ pour les médicaments.
            </p>
          </div>
        </div>
      </section>

      {/* TUNNEL DE SOUSCRIPTION */}
      <section id="souscription" className="scroll-mt-24 py-14 md:py-18 bg-anset-mist/30 border-y border-anset-blue/10">
        <div className="container-anset max-w-4xl">
          <div className="text-center mb-8">
            <p className={sectionLabelCls}>Souscription en ligne</p>
            <h2 className={sectionTitleCls}>
              Assurez votre compagnon <span className="text-anset-moutarde-dark">en quelques minutes</span>.
            </h2>
            <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium max-w-2xl mx-auto mt-3">
              Renseignez les informations sur votre animal, choisissez votre formule et signez en ligne. Un conseiller reste disponible si vous avez la moindre question.
            </p>
          </div>
          <CoverseasSubscription title="Souscription assurance santé chien & chat" />
        </div>
      </section>

      {/* AVEC OU SANS FRANCHISE */}
      <section className={sectionMistCls}>
        <div className="container-anset max-w-5xl">
          <div className="mb-8">
            <p className={sectionLabelCls}>L'option franchise</p>
            <h2 className={sectionTitleCls}>
              Avec ou sans franchise, <span className="text-anset-moutarde-dark">vous décidez</span>.
            </h2>
            <p className="text-base text-anset-slate leading-relaxed font-medium max-w-2xl mt-3">
              Vous choisissez la formule qui correspond à votre profil et à votre budget. Votre conseiller vous accompagne pour identifier l'option la plus pertinente.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-anset-blue/[0.08] rounded-lg flex items-center justify-center">
                  <span className="text-anset-blue font-black text-sm">€</span>
                </div>
                <h3 className="text-lg font-black text-anset-blue tracking-tight">Avec franchise</h3>
              </div>
              <p className="text-sm text-anset-slate font-medium leading-relaxed mb-4">
                30% des frais médicaux et chirurgicaux restent à votre charge à chaque sinistre, avec un minimum de 30€ et un plafond de 200€ par sinistre. La cotisation est plus douce.
              </p>
              <p className="text-xs text-anset-slate/70 font-medium leading-relaxed">
                Adapté si vous voulez optimiser votre prime mensuelle et que vous acceptez une participation aux soins occasionnels.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border-2 border-anset-moutarde/30 shadow-premium-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-anset-moutarde-soft rounded-lg flex items-center justify-center">
                  <Check className="w-4 h-4 text-anset-moutarde-dark" strokeWidth={2.5} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-black text-anset-blue tracking-tight">Sans franchise</h3>
              </div>
              <p className="text-sm text-anset-slate font-medium leading-relaxed mb-4">
                Aucune retenue sur les remboursements : vous touchez intégralement vos frais médicaux et chirurgicaux dans les limites du plafond annuel. Cotisation un peu plus élevée.
              </p>
              <p className="text-xs text-anset-slate/70 font-medium leading-relaxed">
                Adapté si vous préférez la tranquillité d'esprit et un remboursement maximum à chaque visite vétérinaire.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* DELAIS DE CARENCE */}
      <section className={sectionCls}>
        <div className="container-anset max-w-5xl">
          <div className="text-center mb-10">
            <p className={sectionLabelCls}>Délais de carence</p>
            <h2 className={sectionTitleCls}>
              Quand votre couverture <span className="text-anset-moutarde-dark">commence-t-elle</span> ?
            </h2>
            <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium max-w-2xl mx-auto mt-3">
              À partir de la date d'effet de votre contrat, votre couverture s'active progressivement selon le type d'événement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm text-center">
              <div className="w-12 h-12 bg-anset-menthe/15 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-5 h-5 text-anset-menthe" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="text-3xl font-black text-anset-blue mb-1">15 jours</div>
              <p className="text-sm font-bold text-anset-blue mb-1">Accident</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">
                Couverture activée 15 jours après la prise d'effet du contrat.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm text-center">
              <div className="w-12 h-12 bg-anset-moutarde-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-5 h-5 text-anset-moutarde" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="text-3xl font-black text-anset-blue mb-1">45 jours</div>
              <p className="text-sm font-bold text-anset-blue mb-1">Maladie & suivi médical</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">
                Pour la formule Premium uniquement, après 45 jours d'attente.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm text-center">
              <div className="w-12 h-12 bg-anset-moutarde-soft rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-5 h-5 text-anset-moutarde-dark" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div className="text-3xl font-black text-anset-blue mb-1">120 jours</div>
              <p className="text-sm font-bold text-anset-blue mb-1">Chirurgie suite maladie</p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">
                Pour la formule Premium uniquement, après 120 jours d'attente.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* COUVERTURE GEOGRAPHIQUE */}
      <section className={sectionMistCls}>
        <div className="container-anset max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-10 items-start">
            <div className="w-14 h-14 bg-anset-blue/[0.08] rounded-2xl flex items-center justify-center flex-shrink-0">
              <MapPin className="w-7 h-7 text-anset-blue" strokeWidth={1.6} aria-hidden="true" />
            </div>
            <div>
              <p className={sectionLabelCls}>Où êtes-vous couvert ?</p>
              <h2 className={sectionTitleCls}>
                Une couverture qui voyage <span className="text-anset-moutarde-dark">avec votre animal</span>.
              </h2>
              <p className="text-base text-anset-slate leading-relaxed font-medium mt-3">
                Votre contrat protège votre animal en cas d'accident ou de maladie en France métropolitaine, en Guadeloupe, en Martinique, à La Réunion, en Nouvelle-Calédonie, en Polynésie française, dans tous les pays de l'Union européenne, à Andorre, à Monaco, ainsi qu'au Royaume-Uni et en Suisse.
              </p>
              <p className="text-sm text-anset-slate/80 leading-relaxed font-medium mt-3 italic">
                Particulièrement utile pour les Ultramarins qui retournent au pays avec leur compagnon : votre couverture s'étend automatiquement à votre territoire d'origine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONDITIONS DE SOUSCRIPTION */}
      <section className={sectionCls}>
        <div className="container-anset max-w-5xl">
          <div className="text-center mb-10">
            <p className={sectionLabelCls}>Conditions de souscription</p>
            <h2 className={sectionTitleCls}>
              Suis-je <span className="text-anset-moutarde-dark">éligible</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-anset-moutarde-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <FileCheck className="w-5 h-5 text-anset-moutarde-dark" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-black text-anset-blue tracking-tight mb-1">Vous, le souscripteur</h3>
                <p className="text-xs text-anset-slate font-medium leading-relaxed">
                  Au moins 18 ans. Résidence en France métropolitaine, Guadeloupe, Martinique, La Réunion, Nouvelle-Calédonie ou Polynésie française. Vous êtes le propriétaire de l'animal ou un membre de la famille.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-anset-menthe/15 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cat className="w-5 h-5 text-anset-menthe" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-black text-anset-blue tracking-tight mb-1">Votre animal</h3>
                <p className="text-xs text-anset-slate font-medium leading-relaxed">
                  Chien ou chat hors catégorie 1 ou 2. Identifié par tatouage ou puce électronique et enregistré au fichier I-CAD. Âgé de plus de 2 mois (Smart) ou entre 2 mois et 8 ans (Premium).
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-anset-moutarde-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-5 h-5 text-anset-moutarde" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-black text-anset-blue tracking-tight mb-1">Vaccinations à jour</h3>
                <p className="text-xs text-anset-slate font-medium leading-relaxed">
                  Pour le chat : rage, typhus, coryza, leucose. Pour le chien : rage, maladie de Carré, hépatite de Rubarth, leptospirose, parvovirose. Le carnet de santé en fait foi.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm flex items-start gap-4">
              <div className="w-10 h-10 bg-anset-lilas-soft rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 text-anset-lilas" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-sm font-black text-anset-blue tracking-tight mb-1">Pas d'antécédents</h3>
                <p className="text-xs text-anset-slate font-medium leading-relaxed">
                  Les maladies, accidents ou malformations survenus avant la souscription ou pendant les délais de carence ne sont pas couverts.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CE QUI N'EST PAS COUVERT */}
      <section className={sectionMistCls}>
        <div className="container-anset max-w-4xl">
          <div className="mb-8">
            <p className={sectionLabelCls}>Transparence</p>
            <h2 className={sectionTitleCls}>
              Ce qui <span className="text-anset-moutarde-dark">n'est pas couvert</span>.
            </h2>
            <p className="text-base text-anset-slate leading-relaxed font-medium mt-3 max-w-2xl">
              Nous préférons être clairs dès le départ. Voici les principaux cas où votre contrat ne s'applique pas, pour vous éviter toute mauvaise surprise.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-anset-blue/10 p-6 md:p-7 shadow-premium-sm">
            <ul className="space-y-3">
              {[
                "Les maladies ou accidents antérieurs à la souscription, et leurs suites.",
                "Les maladies qui auraient pu être évitées par les vaccins préventifs (sauf preuve de vaccination).",
                "Les interventions à caractère esthétique (coupe de queue, d'oreilles, de griffes, ablation des ergots).",
                "Les frais d'antipuces, anti-tiques et vermifuges, ainsi que les compléments alimentaires.",
                "Les détartrages et soins dentaires à titre préventif.",
                "Les troubles du comportement et leurs traitements.",
                "Les conséquences d'une activité de chasse, de compétition, de dressage, ou d'un usage professionnel de l'animal.",
                "Les dommages que votre animal pourrait causer à un tiers (à couvrir séparément en responsabilité civile).",
                "Les chiens classés en catégorie 1 (chiens d'attaque) ou 2 (chiens de garde et de défense) — non assurables par ce contrat.",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-anset-slate leading-relaxed font-medium">
                  <X className="w-4 h-4 text-anset-moutarde-dark flex-shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-anset-slate/70 italic mt-5 leading-relaxed">
              La liste complète des exclusions figure dans les Dispositions Générales du contrat, remises avant souscription.
            </p>
          </div>
        </div>
      </section>

      {/* EN CAS DE SINISTRE */}
      <section className={sectionCls}>
        <div className="container-anset max-w-5xl">
          <div className="text-center mb-10">
            <p className={sectionLabelCls}>En cas de sinistre</p>
            <h2 className={sectionTitleCls}>
              Quatre étapes, <span className="text-anset-moutarde-dark">remboursement rapide</span>.
            </h2>
            <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium max-w-2xl mx-auto mt-3">
              Un parcours simple, accompagné par Poé et par votre conseiller ANSET si vous en avez besoin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
              <div className="text-anset-moutarde-dark font-black text-4xl mb-3">01</div>
              <h3 className="text-base font-black text-anset-blue tracking-tight mb-2">Téléchargez la feuille de soins</h3>
              <p className="text-sm text-anset-slate font-medium leading-relaxed">
                Directement ci-dessous, ou auprès de votre conseiller ANSET.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
              <div className="text-anset-moutarde-dark font-black text-4xl mb-3">02</div>
              <h3 className="text-base font-black text-anset-blue tracking-tight mb-2">Chez le vétérinaire</h3>
              <p className="text-sm text-anset-slate font-medium leading-relaxed">
                Le vétérinaire complète, signe et tamponne la feuille. En cas d'accident, vous remplissez votre partie.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
              <div className="text-anset-menthe font-black text-4xl mb-3">03</div>
              <h3 className="text-base font-black text-anset-blue tracking-tight mb-2">Rassemblez vos justificatifs</h3>
              <p className="text-sm text-anset-slate font-medium leading-relaxed">
                Feuille de soins, factures nominatives acquittées, ordonnances du vétérinaire.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
              <div className="text-anset-lilas font-black text-4xl mb-3">04</div>
              <h3 className="text-base font-black text-anset-blue tracking-tight mb-2">Envoyez sous 30 jours</h3>
              <p className="text-sm text-anset-slate font-medium leading-relaxed">
                Par email à <strong className="text-anset-blue">chienchat@protectionjuridique.fr</strong> ou par courrier à Groupama PJ.
              </p>
            </div>

          </div>

          {/* DOCUMENTS À TÉLÉCHARGER */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/sinistre/sante-animale" className="bg-anset-moutarde text-white rounded-2xl p-6 md:p-7 hover:bg-anset-moutarde-dark transition-colors group block">
              <p className="text-[10px] uppercase tracking-[2px] text-white/70 font-black mb-1">Le plus rapide</p>
              <p className="text-lg font-black tracking-tight mb-2">Déposer ma demande en ligne →</p>
              <p className="text-sm text-white/85 font-medium leading-relaxed">
                Formulaire dédié avec upload des pièces. Confirmation par email.
              </p>
            </Link>
            <div className="bg-anset-blue/[0.04] rounded-2xl p-6 md:p-7 border border-anset-blue/10">
              <p className="text-[10px] uppercase tracking-[2px] text-anset-moutarde-dark font-black mb-1">Par téléphone</p>
              <p className="text-base text-anset-blue font-black tracking-tight mb-1">
                +33 1 41 43 77 16 · taper 3
              </p>
              <p className="text-xs text-anset-slate font-medium leading-relaxed">
                Groupama PJ — lundi au vendredi 9h-17h30 (heure métropole). Ou <strong className="text-anset-blue">chienchat@protectionjuridique.fr</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTEUR DE RISQUE */}
      <section className={sectionMistCls}>
        <div className="container-anset max-w-4xl">
          <div className="bg-white rounded-2xl border border-anset-blue/10 p-6 md:p-8 shadow-premium-sm">
            <p className={sectionLabelCls}>Le porteur de risque</p>
            <h2 className="text-xl md:text-2xl font-black text-anset-blue tracking-tight mb-4">
              Risque porté par Groupama Protection Juridique.
            </h2>
            <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium mb-4">
              Le contrat est assuré par <strong className="text-anset-blue">Groupama PJ</strong> (Société Française de Protection Juridique), société anonyme régie par le Code des assurances, immatriculée au RCS de Paris sous le n° 321 776 775, placée sous le contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).
            </p>
            <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium mb-4">
              Il est distribué par <strong className="text-anset-blue">COVERSEAS SASU</strong>, exerçant sous la marque commerciale ANSET ASSURANCES, courtier en assurance immatriculé à l'ORIAS sous le numéro 26000597.
            </p>
            <p className="text-xs text-anset-slate/70 italic leading-relaxed">
              Vos contrats : DG2622088V01 (avec franchise) et DG2622089V01 (sans franchise). Les Dispositions Générales complètes vous sont remises lors de la souscription.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-anset-blue text-white">
        <div className="container-anset max-w-3xl text-center">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-white/60 mb-3">
            Prêt à protéger votre compagnon ?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.1] mb-3">
            Obtenez votre devis<br />
            <span className="text-anset-moutarde-dark">en quelques minutes.</span>
          </h2>
          <p className="text-base text-white/75 font-medium mb-8">
            Sans engagement. Vous découvrirez le tarif exact selon le profil de votre animal.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="#souscription" className="inline-flex items-center justify-center gap-2 bg-white text-anset-blue text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-mist transition-colors">
              Démarrer mon devis
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link href={CALENDLY.sectionHref} className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-white/10 transition-colors">
              <CalendarClock className="w-4 h-4" aria-hidden="true" />
              Parler à un conseiller
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}