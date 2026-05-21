import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="bg-anset-cream">
      <div className="container-anset py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 md:gap-y-0">
          {STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-center px-3 md:px-4 ${
                idx < STATS.length - 1 ? "md:border-r md:border-anset-blue/10" : ""
              }`}
            >
              <div className="text-4xl md:text-[46px] font-black text-anset-blue tracking-[-0.06em] leading-none mb-2">
                {stat.number}
                <span className="text-anset-corail text-[30px] tracking-[-0.04em] ml-0.5">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-xs text-anset-slate font-medium leading-snug max-w-[140px] mx-auto">
                <strong className="text-anset-blue font-black block text-[11px] mb-0.5">
                  {stat.label}
                </strong>
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}