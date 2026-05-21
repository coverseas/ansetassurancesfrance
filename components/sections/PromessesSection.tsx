import { Users, Sparkles, ShieldCheck } from "lucide-react";

const PROMESSES = [
  {
    icon: Users,
    title: "Des conseillers qui parlent vos codes",
    description: "Pas un call center anonyme. Une équipe qui connaît l'outre-mer, comprend votre histoire, et vous reconnaît quand vous rappelez.",
  },
  {
    icon: Sparkles,
    title: "Poé, disponible jour et nuit",
    description: "Pour vos attestations, déclarations, questions courantes — à toute heure, week-ends inclus. L'IA quand c'est rapide, l'humain quand c'est important.",
  },
  {
    icon: ShieldCheck,
    title: "Un tarif clair, sans surprise",
    description: "Pas de surcoût, pas de frais cachés. Les mêmes garanties qu'en direct chez l'assureur, avec un courtier qui vous accompagne en plus.",
  },
];

export function PromessesSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-anset-blue/8">
      <div className="container-anset">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-3">
            Nos engagements
          </p>
          <h2 className="text-3xl md:text-[40px] lg:text-[48px] text-anset-blue tracking-[-0.035em] leading-[1.05] font-black">
            L'assurance qui vous remet <span className="accent">au centre</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {PROMESSES.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div key={idx} className="flex flex-col items-start">
                <div className="w-12 h-12 mb-6 flex items-center justify-start">
                  <Icon className="w-10 h-10 text-anset-blue" strokeWidth={1.4} aria-hidden="true" />
                </div>
                <h3 className="text-xl md:text-2xl font-black text-anset-blue tracking-tight leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
