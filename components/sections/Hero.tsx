import { Clock, ShieldCheck, Heart, Phone, Cat, Bike } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { URLS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-anset-mist">
      <LeafPattern color="var(--anset-blue)" opacity={0.06} size={300} className="-top-20 -left-16" />
      <LeafPattern color="var(--anset-corail)" opacity={0.07} size={380} rotate={170} className="bottom-0 -right-20" />
      <div className="container-anset relative z-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center">
        <div>
          <span className="inline-block bg-anset-corail-soft text-anset-corail-dark px-3 py-1 rounded-full text-xs font-bold tracking-wide">
            LANCEMENT MÉTROPOLE
          </span>
          <h1 className="mt-5 text-display-md md:text-display-lg text-anset-blue font-black">
            L'assurance qui parle <em className="text-anset-corail not-italic">vos codes</em>,<br className="hidden md:block" /> partout en France.
          </h1>
          <p className="mt-5 text-base md:text-lg text-anset-slate leading-relaxed max-w-xl">
            Vingt-cinq ans d'expertise au service des familles d'outre-mer. Aujourd'hui en métropole, pour vous, votre compagnon et vos deux-roues. Des porteurs de référence, un service humain, la chaleur qu'on connaît à la maison.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Button as="a" href={URLS.souscriptionSanteAnimale} variant="primary" size="lg">Mon devis en 2 minutes</Button>
            <Button as="a" href="/contact" variant="ghost" size="lg">Parler à un conseiller</Button>
          </div>
        </div>
        <div className="relative aspect-[4/3] lg:aspect-square bg-anset-blue rounded-brand overflow-hidden shadow-lg shadow-anset-blue/10">
          <LeafPattern color="white" opacity={0.18} size={280} className="-right-10 -bottom-10" />
          <LeafPattern color="white" opacity={0.12} size={180} rotate={180} className="-left-8 -top-8" />
          <div className="absolute inset-0 flex items-center justify-center gap-4">
            <div className="bg-white/15 backdrop-blur-sm w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center">
              <Cat className="text-anset-corail w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div className="bg-white/15 backdrop-blur-sm w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center">
              <Bike className="text-anset-moutarde w-16 h-16 md:w-20 md:h-20" strokeWidth={1.5} aria-hidden="true" />
            </div>
          </div>
          <div className="absolute top-4 left-4 bg-white text-anset-blue rounded-lg px-3 py-2 text-xs font-bold flex items-center gap-1.5 shadow-md">
            <Clock className="w-3.5 h-3.5 text-anset-moutarde" />Devis 2 min
          </div>
          <div className="absolute top-4 right-4 bg-white text-anset-blue rounded-lg px-3 py-2 text-xs font-bold flex items-center gap-1.5 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-anset-menthe" />Sans engagement
          </div>
          <div className="absolute bottom-4 left-4 bg-white text-anset-blue rounded-lg px-3 py-2 text-xs font-bold flex items-center gap-1.5 shadow-md">
            <Heart className="w-3.5 h-3.5 text-anset-corail" />Depuis 2000
          </div>
          <div className="absolute bottom-4 right-4 bg-white text-anset-blue rounded-lg px-3 py-2 text-xs font-bold flex items-center gap-1.5 shadow-md">
            <Phone className="w-3.5 h-3.5 text-anset-ciel" />Conseiller humain
          </div>
        </div>
      </div>
    </section>
  );
}