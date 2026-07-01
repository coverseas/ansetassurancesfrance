import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, ArrowRight, CalendarClock, Check, Clock } from "lucide-react";
import { CALENDLY } from "@/lib/constants";

export type ProductColor = "lilas" | "menthe" | "moutarde" | "corail";

type Theme = {
  heroBg: string;
  pill: string;
  accent: string;
  chipBg: string;
  chipIcon: string;
  label: string;
};

const THEMES: Record<ProductColor, Theme> = {
  lilas: {
    heroBg: "bg-gradient-to-b from-anset-lilas-soft to-white",
    pill: "text-anset-lilas-dark",
    accent: "text-anset-lilas-dark",
    chipBg: "bg-anset-lilas-soft",
    chipIcon: "text-anset-lilas-dark",
    label: "text-anset-lilas-dark",
  },
  menthe: {
    heroBg: "bg-gradient-to-b from-anset-menthe-soft to-white",
    pill: "text-anset-menthe-dark",
    accent: "text-anset-menthe-dark",
    chipBg: "bg-anset-menthe-soft",
    chipIcon: "text-anset-menthe-dark",
    label: "text-anset-menthe-dark",
  },
  moutarde: {
    heroBg: "bg-gradient-to-b from-anset-moutarde-soft to-white",
    pill: "text-anset-moutarde-dark",
    accent: "text-anset-moutarde-dark",
    chipBg: "bg-anset-moutarde-soft",
    chipIcon: "text-anset-moutarde-dark",
    label: "text-anset-moutarde-dark",
  },
  corail: {
    heroBg: "bg-gradient-to-b from-anset-corail-soft to-white",
    pill: "text-anset-corail-dark",
    accent: "text-anset-corail-dark",
    chipBg: "bg-anset-corail-soft",
    chipIcon: "text-anset-corail-dark",
    label: "text-anset-corail-dark",
  },
};

export type Garantie = { icon: LucideIcon; title: string; desc: string };
export type Avantage = { title: string; desc: string };

export type ProductLandingData = {
  color: ProductColor;
  icon: LucideIcon;
  pillText: string;
  title: string;
  titleAccent: string;
  lead: string;
  bientotHref: string;
  garantiesTitle: string;
  garantiesAccent: string;
  garantiesIntro?: string;
  garanties: Garantie[];
  avantages: Avantage[];
  aSavoir: string[];
  porteurTitle: string;
  porteurBody: string;
  ctaTitle: string;
  ctaAccent: string;
  ctaSubtitle: string;
};

const h1Cls = "text-3xl md:text-5xl lg:text-[56px] font-black text-anset-blue tracking-[-0.04em] leading-[1.05] mb-6";
const leadCls = "text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl mb-8";
const sectionCls = "py-14 md:py-18";
const sectionMistCls = "py-14 md:py-18 bg-anset-mist/30 border-y border-anset-blue/10";
const sectionTitleCls = "text-2xl md:text-3xl font-black text-anset-blue tracking-tight leading-[1.15] mb-3";
const ctaPrimaryCls = "inline-flex items-center justify-center gap-2 bg-anset-blue text-white text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-blue-dark transition-colors shadow-premium";
const ctaSecondaryCls = "inline-flex items-center justify-center gap-2 bg-white text-anset-blue border-2 border-anset-blue text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-mist transition-colors";

export function ProductLanding(props: ProductLandingData) {
  const t = THEMES[props.color];
  const Icon = props.icon;
  const labelCls = `text-[10px] md:text-xs font-black uppercase tracking-[2.5px] mb-2 ${t.label}`;

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className={`${t.heroBg} py-16 md:py-24 border-b border-anset-blue/10`}>
        <div className="container-anset max-w-5xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-blue transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <span className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[2.5px] mb-5 ${t.pill}`}>
            <Icon className="w-3.5 h-3.5" strokeWidth={2.2} aria-hidden="true" />
            {props.pillText}
          </span>
          <h1 className={h1Cls}>
            {props.title} <span className={t.accent}>{props.titleAccent}</span>
          </h1>
          <p className={leadCls}>{props.lead}</p>
          <div className="flex flex-wrap gap-3">
            <Link href={props.bientotHref} className={ctaPrimaryCls}>
              Obtenir mon devis
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link href={CALENDLY.sectionHref} className={ctaSecondaryCls}>
              <CalendarClock className="w-4 h-4" aria-hidden="true" />
              Parler à un conseiller
            </Link>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 text-xs text-anset-slate/70 font-medium">
            <Clock className="w-3.5 h-3.5" aria-hidden="true" />
            Bientôt en ligne · Risque porté par Acheel
          </p>
        </div>
      </section>

      {/* GARANTIES */}
      <section className={sectionCls}>
        <div className="container-anset max-w-5xl">
          <div className="mb-10">
            <p className={labelCls}>Vos garanties</p>
            <h2 className={sectionTitleCls}>
              {props.garantiesTitle} <span className={t.accent}>{props.garantiesAccent}</span>
            </h2>
            {props.garantiesIntro && (
              <p className="text-base text-anset-slate leading-relaxed font-medium max-w-2xl mt-3">
                {props.garantiesIntro}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {props.garanties.map((g) => {
              const GIcon = g.icon;
              return (
                <div key={g.title} className="bg-white rounded-2xl p-5 border border-anset-blue/10 shadow-premium-sm">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${t.chipBg}`}>
                    <GIcon className={`w-5 h-5 ${t.chipIcon}`} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-black text-anset-blue tracking-tight mb-1.5">{g.title}</h3>
                  <p className="text-sm text-anset-slate font-medium leading-relaxed">{g.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* POURQUOI ANSET */}
      <section className={sectionMistCls}>
        <div className="container-anset max-w-5xl">
          <div className="mb-8">
            <p className={labelCls}>Pourquoi ANSET</p>
            <h2 className={sectionTitleCls}>
              Un courtier <span className={t.accent}>vraiment à vos côtés</span>.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {props.avantages.map((a, idx) => (
              <div key={a.title} className="bg-white rounded-2xl p-6 border border-anset-blue/10 shadow-premium-sm">
                <div className={`text-4xl font-black mb-3 ${t.accent}`}>0{idx + 1}</div>
                <h3 className="text-base font-black text-anset-blue tracking-tight mb-2">{a.title}</h3>
                <p className="text-sm text-anset-slate font-medium leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BON A SAVOIR */}
      <section className={sectionCls}>
        <div className="container-anset max-w-4xl">
          <div className="mb-8">
            <p className={labelCls}>Bon à savoir</p>
            <h2 className={sectionTitleCls}>
              Les points <span className={t.accent}>à retenir</span>.
            </h2>
          </div>
          <div className="bg-white rounded-2xl border border-anset-blue/10 p-6 md:p-7 shadow-premium-sm">
            <ul className="space-y-3">
              {props.aSavoir.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-anset-slate leading-relaxed font-medium">
                  <Check className="w-4 h-4 text-anset-menthe flex-shrink-0 mt-0.5" strokeWidth={2.5} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-xs text-anset-slate/70 italic mt-5 leading-relaxed">
              Le détail des garanties, plafonds et exclusions figure dans les Dispositions Générales du contrat, remises avant souscription.
            </p>
          </div>
        </div>
      </section>

      {/* PORTEUR DE RISQUE */}
      <section className={sectionMistCls}>
        <div className="container-anset max-w-4xl">
          <div className="bg-white rounded-2xl border border-anset-blue/10 p-6 md:p-8 shadow-premium-sm">
            <p className={labelCls}>Le porteur de risque</p>
            <h2 className="text-xl md:text-2xl font-black text-anset-blue tracking-tight mb-4">
              {props.porteurTitle}
            </h2>
            <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium mb-4">
              {props.porteurBody}
            </p>
            <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium">
              Il est distribué par <strong className="text-anset-blue">COVERSEAS SASU</strong>, exerçant sous la marque commerciale ANSET ASSURANCES, courtier en assurance immatriculé à l'ORIAS sous le numéro 26000597.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-16 md:py-20 bg-anset-blue text-white">
        <div className="container-anset max-w-3xl text-center">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-white/60 mb-3">
            Intéressé par cette offre ?
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.1] mb-3">
            {props.ctaTitle}<br />
            <span className={t.accent}>{props.ctaAccent}</span>
          </h2>
          <p className="text-base text-white/75 font-medium mb-8">{props.ctaSubtitle}</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href={props.bientotHref} className="inline-flex items-center justify-center gap-2 bg-white text-anset-blue text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-mist transition-colors">
              Être prévenu du lancement
              <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
            </Link>
            <Link href={CALENDLY.sectionHref} className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white/30 text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-white/10 transition-colors">
              <CalendarClock className="w-4 h-4" aria-hidden="true" />
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
