import { Cat, Bike, Globe, Check, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { PRODUCTS, URLS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  cat: Cat,
  motorbike: Bike,
  world: Globe,
};

const productUrlMap: Record<string, string> = {
  "sante-chien-chat": URLS.souscriptionSanteAnimale,
  "moto-cyclo": URLS.souscriptionMoto,
  voyage: URLS.souscriptionVoyage,
};

const colorThemes = {
  corail: {
    bgGradient: "bg-gradient-to-br from-anset-corail-soft via-anset-corail-soft/60 to-anset-corail/30",
    circleColor: "from-anset-corail/60",
    leafColor: "var(--anset-corail)",
    iconColor: "text-anset-corail",
    tagText: "text-anset-corail-dark",
  },
  moutarde: {
    bgGradient: "bg-gradient-to-br from-anset-moutarde-soft via-anset-moutarde-soft/60 to-anset-moutarde/30",
    circleColor: "from-anset-moutarde/60",
    leafColor: "var(--anset-moutarde)",
    iconColor: "text-anset-moutarde",
    tagText: "text-anset-moutarde-dark",
  },
  menthe: {
    bgGradient: "bg-gradient-to-br from-anset-menthe-soft via-anset-menthe-soft/60 to-anset-menthe/40",
    circleColor: "from-anset-menthe/60",
    leafColor: "var(--anset-menthe)",
    iconColor: "text-anset-menthe",
    tagText: "text-anset-menthe-dark",
  },
} as const;

export function ProductsSection() {
  return (
    <section id="offres" className="bg-white relative overflow-hidden border-t border-anset-blue/10">
      <LeafPattern color="var(--anset-blue)" opacity={0.04} size={200} className="-right-12 -top-12" />
      <div className="container-anset py-16 md:py-20 relative z-10">
        <div className="max-w-2xl mb-10">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
            Trois offres dès le lancement
          </p>
          <h2 className="text-3xl md:text-[28px] lg:text-[30px] text-anset-blue tracking-tight">
            Nos premières assurances <span className="accent">pour vous</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.icon];
            const theme = colorThemes[product.color];
            const url = productUrlMap[product.slug] || "#";

            return (
              <article
                key={product.slug}
                className="rounded-2xl border border-anset-blue/8 bg-anset-cream overflow-hidden flex flex-col"
              >
                <div className={`relative h-36 md:h-40 flex items-center justify-center overflow-hidden ${theme.bgGradient}`}>
                  <div
                    className={`absolute -top-12 -right-12 w-44 h-44 rounded-full opacity-40 bg-gradient-radial ${theme.circleColor} to-transparent`}
                    style={{
                      background: `radial-gradient(circle, ${theme.leafColor} 0%, transparent 70%)`,
                      opacity: 0.4,
                    }}
                    aria-hidden="true"
                  />
                  <LeafPattern color={theme.leafColor} opacity={0.18} size={130} className="-left-5 -bottom-8" />
                  <LeafPattern color={theme.leafColor} opacity={0.18} size={90} rotate={160} className="-right-7 -top-4" />

                  <span className={`absolute top-3 left-3 bg-white/97 px-2.5 py-1 rounded text-[9px] font-black tracking-[1.4px] ${theme.tagText} z-10`}>
                    {product.category}
                  </span>

                  {product.onlineSubscription && (
                    <span className="absolute top-3 right-3 bg-anset-blue text-white px-2 py-1 rounded text-[9px] font-black tracking-[0.8px] flex items-center gap-1 z-10">
                      <Zap className="w-2.5 h-2.5" aria-hidden="true" />
                      EN LIGNE
                    </span>
                  )}

                  <div className="relative z-10 bg-white w-[72px] h-[72px] rounded-full flex items-center justify-center shadow-[0_10px_24px_rgba(0,0,0,0.08)]">
                    {Icon && <Icon className={`w-9 h-9 ${theme.iconColor}`} strokeWidth={1.5} aria-hidden="true" />}
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/97 px-2.5 py-1.5 rounded-md flex items-baseline gap-0.5 z-10 shadow-[0_4px_10px_rgba(0,0,0,0.06)]">
                    <span className="text-[8px] text-anset-slate font-bold">dès</span>
                    <span className="text-base font-black text-anset-blue tracking-tight">
                      {product.priceFrom}{product.priceCurrency}
                    </span>
                    <span className="text-[9px] text-anset-slate font-bold">{product.pricePeriod}</span>
                  </div>
                </div>

                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  <h3 className="text-base md:text-lg font-black text-anset-blue tracking-tight leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-xs md:text-sm text-anset-slate leading-relaxed font-medium">
                    {product.description}
                  </p>
                  <ul className="flex flex-col gap-1 py-1">
                    {product.features.map((feat) => (
                      <li key={feat} className="text-[11px] text-anset-blue flex items-center gap-1.5 font-semibold">
                        <Check className="w-3 h-3 text-anset-menthe flex-shrink-0" strokeWidth={2.5} aria-hidden="true" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-1.5 mt-1">
                    <Button as="a" href={url} variant="secondary" size="sm" className="flex-1">
                      Mon devis
                    </Button>
                    <Button as="a" href={`/produits/${product.slug}`} variant="ghost" size="sm" className="flex-1">
                      Détails
                    </Button>
                  </div>
                  <p className="text-[9px] text-anset-slate/60 text-right mt-1 italic">
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