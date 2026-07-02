import { TESTIMONIALS } from "@/lib/constants";
import { TrustpilotWidget } from "@/components/TrustpilotWidget";

const hasTrustpilot = !!process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID;

const avatarGradients: Record<string, string> = {
  light: "radial-gradient(circle at 40% 28%, #F5C6A8 0%, #D69873 45%, #9C5F3F 100%)",
  medium: "radial-gradient(circle at 40% 28%, #EDB084 0%, #B17C5B 45%, #5D3A24 100%)",
  dark: "radial-gradient(circle at 40% 28%, #C18A60 0%, #8D5A36 45%, #4B2E1C 100%)",
};

const featuredCardCls = "bg-anset-blue text-white rounded-2xl p-7 md:p-8 shadow-premium-lg relative overflow-hidden";
const standardCardCls = "bg-white text-anset-blue rounded-2xl p-6 md:p-7 border border-anset-blue/10 shadow-premium-sm";

export function TestimonialsSection() {
  const featured = TESTIMONIALS[0];
  const others = TESTIMONIALS.slice(1);

  return (
    <section className="bg-white border-t border-anset-blue/10">
      <div className="container-anset py-16 md:py-20">

        <div className="mb-10">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
            Ils nous font confiance
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[40px] font-black text-anset-blue tracking-tight leading-[1.1]">
            Ce que disent <span className="accent">nos clients</span>
          </h2>
        </div>

        {hasTrustpilot ? (
          <TrustpilotWidget template="carousel" height="240px" />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

            <div className={featuredCardCls}>
              <div className="mb-5 text-2xl leading-none text-white/40" aria-hidden="true">&ldquo;</div>
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
                <div className="mb-4 text-2xl leading-none text-anset-blue/20" aria-hidden="true">&ldquo;</div>
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
        )}
      </div>
    </section>
  );
}
