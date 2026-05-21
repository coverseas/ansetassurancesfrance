import { LeafPattern } from "@/components/ui/LeafPattern";
import { TESTIMONIALS, TRUSTPILOT } from "@/lib/constants";

const avatarGradients = {
  light: "radial-gradient(circle at 40% 28%, #F5C6A8 0%, #D69873 45%, #9C5F3F 100%)",
  medium: "radial-gradient(circle at 40% 28%, #EDB084 0%, #B17C5B 45%, #5D3A24 100%)",
  warm: "radial-gradient(circle at 40% 28%, #F2D0B1 0%, #D8A87E 45%, #8F5C36 100%)",
} as const;

export function TestimonialsSection() {
  return (
    <section className="bg-anset-cream relative overflow-hidden border-t border-anset-blue/10">
      <LeafPattern color="var(--anset-blue)" opacity={0.04} size={200} className="-left-12 -bottom-12" />
      <div className="container-anset py-16 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 mb-8">
          <div>
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
              Ils nous font confiance
            </p>
            <h2 className="text-2xl md:text-3xl text-anset-blue tracking-tight leading-[1.15]">
              Ce que disent <span className="accent">nos clients</span>
            </h2>
          </div>
          <div className="bg-white rounded-xl px-4 py-2.5 flex items-center gap-3 border border-anset-blue/8 self-start md:self-end">
            <div className="bg-trustpilot text-white w-6 h-6 rounded flex items-center justify-center text-base font-black leading-none flex-shrink-0">
              ★
            </div>
            <div>
              <div className="text-xl font-black text-anset-blue tracking-tight leading-none">
                {TRUSTPILOT.rating}
              </div>
              <div className="text-[9px] text-anset-slate font-semibold leading-tight mt-0.5">
                <span className="text-trustpilot text-[10px] tracking-wider block leading-none mb-0.5">★★★★★</span>
                <strong className="text-anset-blue font-black">{TRUSTPILOT.count} avis</strong> {TRUSTPILOT.name}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch">
          {TESTIMONIALS.map((testimonial, idx) => {
            const isFeat = testimonial.featured;
            const cardClass = isFeat
              ? "bg-anset-blue text-white relative overflow-hidden md:col-span-1"
              : "bg-white";
            const quoteClass = isFeat
              ? "text-white text-sm leading-relaxed"
              : "text-anset-blue text-xs leading-relaxed";
            const tpmClass = isFeat ? "text-white/65" : "text-anset-slate/60";
            const nameClass = isFeat ? "text-white" : "text-anset-blue";
            const locClass = isFeat ? "text-white/65" : "text-anset-slate";
            const borderClass = isFeat ? "border-white/15" : "border-anset-blue/8";

            return (
              <article
                key={idx}
                className={`rounded-2xl p-5 border border-anset-blue/8 flex flex-col ${cardClass}`}
              >
                {isFeat && (
                  <LeafPattern color="white" opacity={0.1} size={140} className="-right-8 -bottom-8" />
                )}
                <div className="flex justify-between items-center mb-2.5 relative">
                  <span className="text-trustpilot text-[10px] tracking-widest">★★★★★</span>
                  <span className={`text-[8px] font-bold tracking-[1.5px] ${tpmClass}`}>
                    TRUSTPILOT
                  </span>
                </div>
                <p className={`mb-3 font-medium flex-1 relative ${quoteClass}`}>
                  {testimonial.quote}
                </p>
                <div className={`flex items-center gap-2.5 pt-3 border-t ${borderClass} relative`}>
                  <div
                    className="w-9 h-9 rounded-full flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.12)]"
                    style={{ background: avatarGradients[testimonial.avatarTone] }}
                    aria-hidden="true"
                  />
                  <div>
                    <div className={`text-[11px] font-black ${nameClass} leading-tight`}>
                      {testimonial.name}
                    </div>
                    <div className={`text-[10px] ${locClass} font-medium mt-0.5`}>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}