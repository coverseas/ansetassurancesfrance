import { TESTIMONIALS, TRUSTPILOT } from "@/lib/constants";

const avatarGradients: Record<string, string> = {
  light: "radial-gradient(circle at 40% 28%, #F5C6A8 0%, #D69873 45%, #9C5F3F 100%)",
  medium: "radial-gradient(circle at 40% 28%, #EDB084 0%, #B17C5B 45%, #5D3A24 100%)",
  dark: "radial-gradient(circle at 40% 28%, #C18A60 0%, #8D5A36 45%, #4B2E1C 100%)",
};

const featuredCardCls = "bg-anset-blue text-white rounded-2xl p-7 md:p-8 shadow-premium-lg relative overflow-hidden";
const standardCardCls = "bg-white text-anset-blue rounded-2xl p-6 md:p-7 border border-anset-blue/10 shadow-premium-sm";
const ratingBoxCls = "bg-white rounded-2xl border border-anset-blue/15 p-4 md:p-5 shadow-premium flex flex-col items-center min-w-[160px]";
const tpStarCls = "bg-trustpilot text-white w-4 h-4 rounded-sm flex items-center justify-center text-[10px] font-black leading-none";

export function TestimonialsSection() {
  const featured = TESTIMONIALS[0];
  const others = TESTIMONIALS.slice(1);

  return (
    <section className="bg-white border-t border-anset-blue/10">
      <div className="container-anset py-16 md:py-20">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 items-end mb-10">
          <div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
              Ils nous font confiance
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-[40px] font-black text-anset-blue tracking-tight leading-[1.1]">
              Ce que disent <span className="accent">nos clients</span>
            </h2>
          </div>

          <div className={ratingBoxCls}>
            <div className="flex items-center gap-1.5 mb-2">
              <div className={tpStarCls}>★</div>
              <span className="text-xs font-black text-anset-blue">Trustpilot</span>
            </div>
            <div className="text-3xl font-black text-anset-blue leading-none">{TRUSTPILOT.rating}</div>
            <div className="text-trustpilot text-sm tracking-wider leading-none mt-1.5">★★★★★</div>
            <div className="text-[11px] text-anset-slate/70 font-bold mt-1.5">
              {TRUSTPILOT.count} avis vérifiés
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          <div className={featuredCardCls}>
            <div className="flex items-center justify-between mb-5">
              <div className="text-trustpilot text-base tracking-wider">★★★★★</div>
              <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider">
                <div className={tpStarCls}>★</div>
                Trustpilot
              </div>
            </div>
            <p className="text-base md:text-lg font-bold leading-relaxed mb-6">
              {featured.quote}
            </p>
            <div className="flex items-center gap-3 pt-5 border-t border-white/15">
              <div
                className="w-11 h-11 rounded-full border-2 border-white shadow-md flex-shrink-0"
                style={{ background: avatarGradients[featured.avatarTone] || avatarGradients.medium }}
                aria-hidden="true"
              />
              <div>
                <div className="font-black text-sm leading-tight">{featured.name}</div>
                <div className="text-[12px] text-white/70 font-medium mt-0.5">{featured.location}</div>
              </div>
            </div>
          </div>

          {others.map((t, idx) => (
            <div key={idx} className={standardCardCls}>
              <div className="flex items-center justify-between mb-4">
                <div className="text-trustpilot text-base tracking-wider">★★★★★</div>
                <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-anset-slate/60">
                  <div className={tpStarCls}>★</div>
                  Trustpilot
                </div>
              </div>
              <p className="text-sm md:text-base text-anset-blue font-bold leading-relaxed mb-5">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-anset-blue/10">
                <div
                  className="w-10 h-10 rounded-full border-2 border-white shadow-sm flex-shrink-0"
                  style={{ background: avatarGradients[t.avatarTone] || avatarGradients.medium }}
                  aria-hidden="true"
                />
                <div>
                  <div className="font-black text-sm leading-tight text-anset-blue">{t.name}</div>
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
