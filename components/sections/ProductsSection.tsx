import { Cat, Bike } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { PRODUCTS, URLS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { paw: Cat, motorbike: Bike };

const colorThemes = {
  corail: { bg: "bg-anset-corail-soft", pcat: "text-anset-corail-dark", visBg: "bg-anset-corail", leafColor: "var(--anset-corail)" },
  moutarde: { bg: "bg-anset-moutarde-soft", pcat: "text-anset-moutarde-dark", visBg: "bg-anset-moutarde", leafColor: "var(--anset-moutarde)" },
} as const;

const productUrlMap: Record<string, string> = {
  "sante-chien-chat": URLS.souscriptionSanteAnimale,
  "moto-cyclo": URLS.souscriptionMoto,
};

export function ProductsSection() {
  return (
    <section id="offres" className="bg-white relative overflow-hidden">
      <LeafPattern color="var(--anset-blue)" opacity={0.04} size={250} className="-right-12 -top-12" />
      <div className="container-anset py-16 md:py-24 relative z-10">
        <div className="max-w-2xl mb-10 md:mb-14">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-anset-corail mb-2">Deux offres dès le lancement</p>
          <h2 className="text-display-sm md:text-display-md text-anset-blue">Nos premières assurances pour vous</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
          {PRODUCTS.map((product) => {
            const Icon = iconMap[product.icon];
            const theme = colorThemes[product.color];
            const url = productUrlMap[product.slug] || "#";
            return (
              <article key={product.slug} className={`${theme.bg} rounded-brand p-7 md:p-8 relative overflow-hidden flex flex-col gap-4`}>
                <LeafPattern color={theme.leafColor} opacity={0.13} size={160} className="-bottom-8 -right-8" />
                <p className={`text-[10px] font-black uppercase tracking-[0.18em] ${theme.pcat} relative z-10`}>{product.category}</p>
                <div className={`${theme.visBg} rounded-xl h-32 md:h-40 relative overflow-hidden flex items-center justify-center`}>
                  <LeafPattern color="white" opacity={0.2} size={120} className="-left-4 -bottom-4" />
                  {Icon && <Icon className="text-white w-16 h-16 md:w-20 md:h-20 relative z-10" strokeWidth={1.5} aria-hidden="true" />}
                </div>
                <h3 className="text-xl md:text-2xl font-black text-anset-blue tracking-tight">{product.name}</h3>
                <p className="text-sm md:text-base text-anset-slate leading-relaxed flex-1">{product.description}</p>
                <div className="flex items-baseline gap-1.5 pt-1">
                  <span className="text-xs font-bold text-anset-slate">dès</span>
                  <span className="text-3xl md:text-4xl font-black text-anset-blue tracking-tight">{product.priceFrom}{product.priceCurrency}</span>
                  <span className="text-sm font-bold text-anset-slate">{product.pricePeriod}</span>
                </div>
                <p className="text-xs md:text-sm text-anset-slate italic">
                  Avec <span className="not-italic font-bold text-anset-blue">{product.porteur}</span> · {product.audience}
                </p>
                <div className="pt-2 flex gap-2">
                  <Button as="a" href={url} variant="secondary" size="md">Mon devis</Button>
                  <Button as="a" href={`/produits/${product.slug}`} variant="ghost" size="md">En savoir plus</Button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}