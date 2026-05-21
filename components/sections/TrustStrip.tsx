import { Zap, PhoneCall, Smile, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { TRUST_PROMISES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  bolt: Zap, "phone-call": PhoneCall, smile: Smile, shield: ShieldCheck,
};

const colorMap = {
  moutarde: "bg-anset-moutarde", corail: "bg-anset-corail",
  menthe: "bg-anset-menthe", ciel: "bg-anset-ciel",
} as const;

export function TrustStrip() {
  return (
    <section className="bg-anset-blue text-white relative overflow-hidden">
      <LeafPattern color="white" opacity={0.08} size={300} className="-top-12 -left-10" />
      <LeafPattern color="white" opacity={0.06} size={250} rotate={170} className="-bottom-10 -right-10" />
      <div className="container-anset py-10 md:py-14 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {TRUST_PROMISES.map((p) => {
            const Icon = iconMap[p.icon];
            return (
              <div key={p.label}>
                <div className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center mb-3 ${colorMap[p.color]}`}>
                  {Icon && <Icon className="w-5 h-5 text-white" strokeWidth={2} aria-hidden="true" />}
                </div>
                <p className="font-black text-base md:text-lg tracking-tight">{p.label}</p>
                <p className="text-xs md:text-sm text-white/70 mt-1 leading-snug">{p.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}