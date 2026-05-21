import { Car, Home } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ROADMAP } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { car: Car, home: Home };

export function RoadmapSection() {
  return (
    <section className="bg-anset-mist">
      <div className="container-anset py-14 md:py-20">
        <div className="max-w-2xl mb-8 md:mb-10">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-anset-corail mb-2">Et bientôt</p>
          <h2 className="text-display-sm md:text-display-md text-anset-blue">Notre gamme s'élargit</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ROADMAP.map((r) => {
            const Icon = iconMap[r.icon];
            return (
              <div key={r.slug} className="bg-white rounded-brand p-5 md:p-6 flex items-center gap-4 border border-anset-mist hover:border-anset-moutarde transition-colors">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-anset-moutarde flex items-center justify-center flex-shrink-0">
                  {Icon && <Icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={1.5} aria-hidden="true" />}
                </div>
                <div>
                  <p className="text-base md:text-lg font-black text-anset-blue tracking-tight">{r.name}</p>
                  <p className="text-xs md:text-sm uppercase tracking-wider font-bold text-anset-slate mt-0.5">{r.status}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}