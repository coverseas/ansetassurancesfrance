import { TEAM_MEMBERS } from "@/lib/constants";

const skinGradients = [
  "radial-gradient(circle at 40% 28%, #F5C6A8 0%, #D69873 45%, #9C5F3F 100%)",
  "radial-gradient(circle at 40% 28%, #EDB084 0%, #B17C5B 45%, #5D3A24 100%)",
  "radial-gradient(circle at 40% 28%, #F2D0B1 0%, #D8A87E 45%, #8F5C36 100%)",
  "radial-gradient(circle at 40% 28%, #FAD9B8 0%, #DAA77C 45%, #8C5A38 100%)",
  "radial-gradient(circle at 40% 28%, #E8B493 0%, #B8835E 45%, #6F4429 100%)",
];

export function TeamStrip() {
  return (
    <section className="bg-anset-cream pb-10 md:pb-12 border-t border-anset-blue/8 pt-2">
      <div className="container-anset flex flex-col items-center gap-4">
        <p className="text-[13px] text-anset-blue font-black text-center">
          Votre équipe à <span className="accent">Paris</span> · {TEAM_MEMBERS.map((m) => m.name).join(", ")}
        </p>
        <div className="flex items-start gap-5 md:gap-6 flex-wrap justify-center">
          {TEAM_MEMBERS.map((member, idx) => (
            <div key={member.name} className="flex flex-col items-center gap-1.5">
              <div
                className="w-14 h-14 md:w-16 md:h-16 rounded-full shadow-[0_6px_18px_rgba(0,0,0,0.1)]"
                style={{ background: skinGradients[idx % skinGradients.length] }}
                role="img"
                aria-label={`Portrait de ${member.name}`}
              />
              <span className="text-[10px] md:text-xs font-bold text-anset-blue">
                {member.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}