import { Cat, Bike, Globe, Check, Bell } from "lucide-react";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { Button } from "@/components/ui/Button";
import { URLS } from "@/lib/constants";

export function EspaceClientSection() {
  return (
    <section className="bg-white border-t border-anset-blue/10">
      <div className="container-anset py-14 md:py-16 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center">
        <div className="flex flex-col gap-3">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail">
            Votre espace ANSET
          </p>
          <h2 className="text-2xl md:text-3xl text-anset-blue tracking-tight leading-[1.15]">
            Vos contrats, <span className="accent">vos sinistres</span>, vos remboursements.
          </h2>
          <p className="text-sm text-anset-slate font-medium leading-relaxed max-w-md">
            Tout est centralisé dans votre espace personnel : suivi en temps réel, attestations en un clic, remboursements visibles dès qu'ils tombent.
          </p>
          <ul className="flex flex-col gap-1.5 mt-2">
            <li className="text-xs text-anset-blue flex items-center gap-2 font-semibold">
              <Check className="w-3.5 h-3.5 text-anset-menthe flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
              Vue d'ensemble de vos contrats
            </li>
            <li className="text-xs text-anset-blue flex items-center gap-2 font-semibold">
              <Check className="w-3.5 h-3.5 text-anset-menthe flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
              Déclaration et suivi de sinistre
            </li>
            <li className="text-xs text-anset-blue flex items-center gap-2 font-semibold">
              <Check className="w-3.5 h-3.5 text-anset-menthe flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
              Documents téléchargeables à tout moment
            </li>
          </ul>
          <div className="mt-3">
            <Button as="a" href={URLS.espaceClient} variant="secondary" size="md">
              Accéder à mon espace
            </Button>
          </div>
        </div>

        <div className="bg-anset-blue rounded-[20px] p-6 relative overflow-hidden min-h-[260px] flex flex-col justify-center">
          <LeafPattern color="white" opacity={0.16} size={180} className="-right-8 -top-8" />
          <LeafPattern color="white" opacity={0.12} size={140} rotate={180} className="-left-6 -bottom-10" />
          <div className="bg-anset-cream rounded-xl p-4 relative z-10 shadow-[0_10px_30px_rgba(16,46,93,0.2)]">
            <div className="flex justify-between items-center mb-3">
              <div>
                <div className="text-[9px] font-black text-anset-blue tracking-[1.4px]">
                  MON ESPACE ANSET
                </div>
                <div className="text-[8.5px] text-anset-slate font-semibold">
                  3 contrats actifs
                </div>
              </div>
              <Bell className="w-3.5 h-3.5 text-anset-slate" aria-hidden="true" />
            </div>

            <div className="flex items-center gap-2.5 py-2 border-b border-anset-blue/8">
              <div className="w-7 h-7 rounded-lg bg-anset-corail flex items-center justify-center flex-shrink-0">
                <Cat className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-[9.5px] font-black text-anset-blue">Léo · Chat européen</div>
                <div className="text-[8.5px] text-anset-slate font-semibold mt-0.5">Formule Confort · Actif</div>
              </div>
              <div className="text-[11px] font-black text-anset-blue">
                12€<span className="text-[8px] text-anset-slate font-bold">/mois</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 py-2 border-b border-anset-blue/8">
              <div className="w-7 h-7 rounded-lg bg-anset-moutarde flex items-center justify-center flex-shrink-0">
                <Bike className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-[9.5px] font-black text-anset-blue">Yamaha XSR 700</div>
                <div className="text-[8.5px] text-anset-slate font-semibold mt-0.5">Tous risques · Actif</div>
              </div>
              <div className="text-[11px] font-black text-anset-blue">
                42€<span className="text-[8px] text-anset-slate font-bold">/mois</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              <div className="w-7 h-7 rounded-lg bg-anset-menthe flex items-center justify-center flex-shrink-0">
                <Globe className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <div className="text-[9.5px] font-black text-anset-blue">Voyage Maurice</div>
                <div className="text-[8.5px] text-anset-slate font-semibold mt-0.5">12 au 26 oct. · Actif</div>
              </div>
              <div className="text-[11px] font-black text-anset-blue">
                38€<span className="text-[8px] text-anset-slate font-bold">/total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}