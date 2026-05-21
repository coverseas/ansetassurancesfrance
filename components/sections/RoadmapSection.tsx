import { Car, Home, ShieldPlus, Banknote } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { ROADMAP } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  banknote: Banknote,
  "shield-plus": ShieldPlus,
  car: Car,
  home: Home,
};

export function RoadmapSection() {
  return (
    <section className="bg-white border-t border-anset-blue/10">
      <div className="container-anset py-12 md:py-14">
        <h2 className="text-xl md:text-2xl font-black text-anset-blue tracking-tight leading-tight mb-5 max-w-md">
          Et bientôt, <span className="accent">encore plus à vos côtés</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {ROADMAP.map((r) => {
            const Icon = iconMap[r.icon];
            return (
              <div
                key={r.slug}
                className="bg-white rounded-2xl p-4 flex items-center gap-3 border border-anset-blue/8 shadow-premium-sm"
              >
                <div className="w-10 h-10 rounded-full bg-anset-mist/40 border-[1.5px] border-anset-blue/15 flex items-center justify-center flex-shrink-0">
                  {Icon && <Icon className="w-4 h-4 text-anset-blue" strokeWidth={1.8} aria-hidden="true" />}
                </div>
                <div>
                  <p className="text-sm font-black text-anset-blue tracking-tight leading-tight">
                    {r.name}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-anset-slate/60 mt-0.5">
                    {r.status}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
