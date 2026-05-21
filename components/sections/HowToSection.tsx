import { Clock, FileText, HeartHandshake } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { HOWTO_STEPS } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  clock: Clock,
  "file-text": FileText,
  "heart-handshake": HeartHandshake,
};

const colorClasses = {
  corail: {
    bg: "bg-gradient-to-br from-anset-corail-soft to-anset-cream",
    num: "text-anset-corail-dark",
    icon: "text-anset-corail",
  },
  moutarde: {
    bg: "bg-gradient-to-br from-anset-moutarde-soft to-anset-cream",
    num: "text-anset-moutarde-dark",
    icon: "text-anset-moutarde",
  },
  menthe: {
    bg: "bg-gradient-to-br from-anset-menthe-soft to-anset-cream",
    num: "text-anset-menthe-dark",
    icon: "text-anset-menthe",
  },
} as const;

export function HowToSection() {
  return (
    <section id="comment-ca-marche" className="bg-white relative overflow-hidden border-t border-anset-blue/10">
      <LeafPattern color="var(--anset-blue)" opacity={0.04} size={180} className="-left-10 -bottom-10" />
      <div className="container-anset py-16 md:py-20 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
            Comment ça marche
          </p>
          <h2 className="text-2xl md:text-3xl text-anset-blue tracking-tight leading-[1.15]">
            Trois minutes, <span className="accent">trois étapes</span>, et on est à vos côtés.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {HOWTO_STEPS.map((step) => {
            const Icon = iconMap[step.icon];
            const theme = colorClasses[step.color];
            return (
              <div
                key={step.num}
                className={`rounded-2xl p-6 border border-anset-blue/8 flex flex-col gap-2.5 ${theme.bg}`}
              >
                <div className={`text-[44px] font-black tracking-[-0.06em] leading-none ${theme.num}`}>
                  {step.num}
                </div>
                <h3 className="text-base md:text-lg font-black text-anset-blue leading-tight">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-anset-slate leading-relaxed font-medium">
                  {step.description}
                </p>
                <div className="flex items-center gap-1.5 mt-auto pt-2 text-xs font-bold text-anset-blue">
                  {Icon && <Icon className={`w-3.5 h-3.5 ${theme.icon}`} strokeWidth={2} aria-hidden="true" />}
                  {step.meta}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}