import Image from "next/image";
import { CalendarHeart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { URLS, TRUSTPILOT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <LeafPattern color="var(--anset-blue)" opacity={0.05} size={200} className="hidden lg:block -left-12 top-20" />

      <div className="container-anset relative z-10 py-14 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-10 lg:gap-14 items-stretch">

        <div className="flex flex-col justify-center order-2 lg:order-1">
          <span className="inline-flex items-center gap-2 text-anset-corail-dark text-[11px] font-black uppercase tracking-[2.5px] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-anset-corail shadow-[0_0_0_4px_rgba(211,111,107,0.18)]" aria-hidden="true"></span>
            Lancement métropole
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-[68px] xl:text-[78px] font-black text-anset-blue leading-[0.95] tracking-[-0.048em]">
            À vos côtés,<br />
            à tout moment.<br />
            <span className="text-anset-corail">Même en France.</span>
          </h1>

          <p className="mt-7 text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-lg">
            Vingt-cinq ans d'expertise et de chaleur au service des familles d'outre-mer. Aujourd'hui en métropole, avec des conseillers experts et Ana, notre agente IA, qui répond jour et nuit.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-2.5">
            <Button as="a" href={URLS.souscriptionSanteAnimale} variant="secondary" size="lg">
              Mon devis en 2 minutes
            </Button>
            <Button as="a" href="/contact" variant="ghost" size="lg">
              Parler à un conseiller
            </Button>
          </div>

          <div className="mt-10 pt-7 border-t border-anset-blue/10 flex flex-wrap items-center gap-x-7 gap-y-3">
            <div className="flex items-center gap-2.5">
              <div className="bg-trustpilot text-white w-6 h-6 rounded flex items-center justify-center text-sm font-black leading-none">★</div>
              <div className="text-[12px] text-anset-slate leading-tight">
                <span className="text-trustpilot text-[12px] tracking-wider block leading-none mb-0.5">★★★★★</span>
                <strong className="text-anset-blue font-black">{TRUSTPILOT.rating}/5</strong> sur {TRUSTPILOT.name}
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <CalendarHeart className="w-6 h-6 text-anset-menthe" strokeWidth={1.8} aria-hidden="true" />
              <div className="text-[12px] text-anset-slate leading-tight">
                <strong className="text-anset-blue font-black">25 années</strong><br />d'expertise outre-mer
              </div>
            </div>
          </div>
        </div>

        <div className="relative rounded-[24px] overflow-hidden shadow-[0_24px_60px_rgba(16,46,93,0.18)] min-h-[440px] lg:min-h-[560px] order-1 lg:order-2">
          <Image
            src="/images/hero-ultramer.png"
            alt="ANSET Assurances · Diaspora ultramarine — Réunion, Polynésie Française, Nouvelle-Calédonie en France"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "50% 30%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}
