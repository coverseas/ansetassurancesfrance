import Image from "next/image";
import { TESTIMONIALS, TRUSTPILOT } from "@/lib/constants";
import { LeafPattern } from "@/components/ui/LeafPattern";

const skinGradients = [
  "radial-gradient(circle at 40% 28%, #FAD9B8 0%, #DAA77C 45%, #8C5A38 100%)",
  "radial-gradient(circle at 40% 28%, #EDB084 0%, #B17C5B 45%, #5D3A24 100%)",
  "radial-gradient(circle at 40% 28%, #F2D0B1 0%, #D8A87E 45%, #8F5C36 100%)",
];

export function TestimonialsSection() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="bg-white py-16 md:py-20 relative overflow-hidden">
      <LeafPattern color="var(--anset-corail)" opacity={0.04} size={200} className="-left-12 -bottom-12" />
      <div className="container-anset relative z-10">

        <div className="flex items-end justify-between mb-10 flex-wrap gap-6">
          <div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
              Ils nous font confiance
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight leading-tight">
              Ce que disent <span className="accent">nos clients</span>
            </h2>
          </div>

          <div className="bg-white border border-anset-blue/12 rounded-2xl px-5 py-4 flex flex-col items-end gap-1.5 shadow-premium-sm">
            <Image
              src="/images/partners/logo-trustpilot.png"
              alt="Trustpilot"
              width={120}
              height={20}
              className="h-5 w-auto object-contain mb-0.5"
            />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-black text-anset-blue leading-none">{TRUSTPILOT.rating}</span>
              <span className="text-trustpilot text-base tracking-wider leading-none">★★★★★</span>
            </div>
            <div className="text-[10px] text-anset-slate/70 font-bold">
              {TRUSTPILOT.count} avis vérifiés
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className="bg-anset-blue text-white rounded-[20px] p-6 md:p-7 relative overflow-hidden">
            <LeafPattern color="white" opacity={0.06} size={120} className="-right-6 -bottom-6" />
            <div className="flex items-center justify-between mb-4 relative z-10">
              <span className="text-trustpilot text-sm tracking-wider leading-none">★★★★★</span>
              <span className="text-[10px] tracking-[2.5px] text-white/70 font-bold uppercase">
                Trustpilot
              </span>
            </div>
            <p className="text-base md:text-lg font-bold leading-relaxed mb-6 relative z-10">
              {featured.text}
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-white/15 relative z-10">
              <div
                className="w-10 h-10 rounded-full border-2 border-white/30 flex-shrink-0"
                style={{ background: skinGradients[0] }}
                aria-hidden="true"
              />
              <div>
                <div className="font-black text-sm leading-tight">{featured.author}</div>
                <div className="text-[12px] text-white/70 font-medium mt-0.5">{featured.location}</div>
              </div>
            </div>
          </div>

          {rest.map((t, idx) => (
            <div
              key={t.author}
              className="bg-white rounded-[20px] p-6 md:p-7 border border-anset-blue/10 shadow-premium-sm"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-trustpilot text-sm tracking-wider leading-none">★★★★★</span>
                <Image
                  src="/images/partners/logo-trustpilot.png"
                  alt="Trustpilot"
                  width={80}
                  height={16}
                  className="h-4 w-auto object-contain"
                />
              </div>
              <p className="text-anset-blue text-sm md:text-base font-medium leading-relaxed mb-6">
                {t.text}
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-anset-blue/10">
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0"
                  style={{ background: skinGradients[idx + 1] }}
                  aria-hidden="true"
                />
                <div>
                  <div className="font-black text-sm text-anset-blue leading-tight">{t.author}</div>
                  <div className="text-[12px] text-anset-slate font-medium mt-0.5">{t.location}</div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
