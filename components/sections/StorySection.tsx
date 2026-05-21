import { LeafPattern } from "@/components/ui/LeafPattern";
import { HISTORY_MILESTONES } from "@/lib/constants";

const accentColors = {
  ciel: "border-anset-ciel", corail: "border-anset-corail",
  menthe: "border-anset-menthe", moutarde: "border-anset-moutarde",
} as const;

export function StorySection() {
  return (
    <section className="bg-anset-blue text-white relative overflow-hidden">
      <LeafPattern color="white" opacity={0.1} size={400} rotate={20} className="-right-20 -top-20" />
      <LeafPattern color="white" opacity={0.07} size={300} rotate={200} className="-left-16 -bottom-20" />
      <div className="container-anset py-16 md:py-24 relative z-10">
        <div className="max-w-3xl">
          <p className="text-xs md:text-sm font-black uppercase tracking-[0.2em] text-anset-ciel mb-3">Vingt-cinq ans d'histoire</p>
          <h2 className="text-display-sm md:text-display-md text-white max-w-2xl">
            Une marque née dans le Pacifique, pour qui sait ce que veut dire <em className="not-italic">"à vos côtés"</em>.
          </h2>
          <p className="mt-5 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
            ANSET, c'est un quart de siècle aux côtés des familles de Polynésie, Nouvelle-Calédonie et La Réunion. Une expertise du courtage forgée loin de la métropole, où être un assureur fiable et chaleureux n'est pas une option mais une nécessité.
          </p>
        </div>
        <div className="mt-10 md:mt-14 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {HISTORY_MILESTONES.map((m) => (
            <div key={m.year} className={`bg-white/[0.06] rounded-brand p-5 md:p-6 border-l-4 ${accentColors[m.accent]}`}>
              <p className="text-2xl md:text-3xl font-black text-white tracking-tight leading-none">{m.year}</p>
              <p className="text-sm md:text-base font-bold text-white mt-2">{m.location}</p>
              <p className="text-xs md:text-sm text-white/70 mt-1 leading-snug">{m.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}