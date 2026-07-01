import { Cat, Bike, Car, Home, KeyRound, HeartPulse, Check, Zap, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { PRODUCTS, URLS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  cat: Cat,
  motorbike: Bike,
  car: Car,
  home: Home,
  key: KeyRound,
  "heart-pulse": HeartPulse,
};

const productUrlMap: Record<string, string> = {
  "sante-chien-chat": URLS.souscriptionSanteAnimale,
  "moto-cyclo": URLS.souscriptionMoto,
  auto: URLS.souscriptionAuto,
  habitation: URLS.souscriptionHabitation,
  pno: URLS.souscriptionPNO,
  sante: URLS.souscriptionSante,
};

const colorThemes = {
  corail: {
    bgGradient: "bg-gradient-to-br from-anset-corail-soft via-anset-corail-soft/60 to-anset-corail/30",
    leafColor: "var(--anset-corail)",
    iconColor: "text-anset-corail",
    tagText: "text-anset-corail-dark",
    glowColor: "rgba(211,111,107,0.3)",
  },
  moutarde: {
    bgGradient: "bg-gradient-to-br from-anset-moutarde-soft via-anset-moutarde-soft/60 to-anset-moutarde/30",
    leafColor: "var(--anset-moutarde)",
    iconColor: "text-anset-moutarde",
    tagText: "text-anset-moutarde-dark",
    glowColor: "rgba(230,157,70,0.3)",
  },
  menthe: {
    bgGradient: "bg-gradient-to-br from-anset-menthe-soft via-anset-menthe-soft/60 to-anset-menthe/40",
    leafColor: "var(--anset-menthe)",
    iconColor: "text-anset-menthe",
    tagText: "text-anset-menthe-dark",
    glowColor: "rgba(119,170,146,0.3)",
  },
  lilas: {
    bgGradient: "bg-gradient-to-br from-anset-lilas-soft via-anset-lilas-soft/60 to-anset-lilas/30",
    leafColor: "var(--anset-lilas)",
    iconColor: "text-anset-lilas",
    tagText: "text-anset-lilas-dark",
    glowColor: "rgba(113,86,137,0.3)",
  },
} as const;

export function ProductsSection() {
  return (
    <section id="offres" className="bg-white relative overflow-hidden border-t border-anset-blue/8">
      <LeafPattern color="var(--anset-blue)" opacity={0.04} size={200} className="-right-12 -top-12" />
      <div className="container-anset py-20 md:py-28 relative z-10">
        <div className="max-w-2xl mb-12 md:mb-16">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-3">
            Nos assurances
          </p>
          <h2 className="text-3xl md:text-[40px] lg:text-[48px] text-anset-blue tracking-[-0.035em] leading-[1.05] font-black">
            Une assurance <span className="accent">pour chaque besoin</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.icon];
            const theme = colorThemes[product.color];
            const url = productUrlMap[product.slug] || "#";

            return (
              <article
                key={product.slug}
                className="rounded-3xl border border-anset-blue/8 bg-white overflow-hidden flex flex-col shadow-premium-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-premium-hover hover:border-anset-blue/15"
              >
                <div className={`relative h-44 md:h-48 flex items-center justify-center overflow-hidden ${theme.bgGradient}`}>
                  <div
                    className="absolute -top-12 -right-12 w-48 h-48 rounded-full"
                    style={{ background: `radial-gradient(circle, ${theme.glowColor} 0%, transparent 70%)` }}
                    aria-hidden="true"
                  />
                  <LeafPattern color={theme.leafColor} opacity={0.2} size={140} className="-left-5 -bottom-8" />
                  <LeafPattern color={theme.leafColor} opacity={0.2} size={95} rotate={160} className="-right-7 -top-4" />

                  <span className={`absolute top-4 left-4 bg-white/97 px-3 py-1.5 rounded-md text-[10px] font-black tracking-[1.4px] ${theme.tagText} z-10 shadow-premium-sm`}>
                    {product.category}
                  </span>

                  {product.comingSoon ? (
                    <span className="absolute top-4 right-4 bg-anset-blue/85 text-white px-2.5 py-1.5 rounded-md text-[10px] font-black tracking-[0.8px] flex items-center gap-1 z-10 shadow-premium-sm">
                      <Clock className="w-3 h-3" aria-hidden="true" />
                      BIENTÔT
                    </span>
                  ) : product.onlineSubscription ? (
                    <span className="absolute top-4 right-4 bg-anset-blue text-white px-2.5 py-1.5 rounded-md text-[10px] font-black tracking-[0.8px] flex items-center gap-1 z-10 shadow-premium-sm">
                      <Zap className="w-3 h-3" aria-hidden="true" />
                      EN LIGNE
                    </span>
                  ) : null}

                  <div className="relative z-10 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-premium-lg">
                    {Icon && <Icon className={`w-10 h-10 ${theme.iconColor}`} strokeWidth={1.5} aria-hidden="true" />}
                  </div>

                  {!product.comingSoon && (
                    <div className="absolute bottom-4 right-4 bg-white/97 px-3 py-2 rounded-lg flex items-baseline gap-0.5 z-10 shadow-premium-sm">
                      <span className="text-[9px] text-anset-slate font-bold">dès</span>
                      <span className="text-lg font-black text-anset-blue tracking-tight">
                        {product.priceFrom}{product.priceCurrency}
                      </span>
                      <span className="text-[10px] text-anset-slate font-bold">{product.pricePeriod}</span>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-7 flex flex-col gap-3 flex-1">
                  <h3 className="text-xl md:text-2xl font-black text-anset-blue tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-sm text-anset-slate leading-relaxed font-medium">
                    {product.description}
                  </p>
                  <ul className="flex flex-col gap-1.5 py-1">
                    {product.features.map((feat) => (
                      <li key={feat} className="text-xs text-anset-blue flex items-center gap-2 font-semibold">
                        <Check className="w-3.5 h-3.5 text-anset-menthe flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-2 mt-2">
                    <Button as="a" href={url} variant="secondary" size="md" className="flex-1">
                      {product.comingSoon ? "Être prévenu" : "Mon devis"}
                    </Button>
                    <Button as="a" href={`/produits/${product.slug}`} variant="ghost" size="md" className="flex-1">
                      Détails
                    </Button>
                  </div>
                  <p className="text-[10px] text-anset-slate/60 text-right mt-1 italic">
                    {product.porteurMention}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
