import { Check, Wifi, BatteryMedium, ArrowUp, Zap, BookOpen, Headphones } from "lucide-react";
import { LeafPattern } from "@/components/ui/LeafPattern";
import { SERVICE_PILLARS } from "@/lib/constants";

const skinGradients = [
  "radial-gradient(circle at 40% 28%, #F5C6A8 0%, #D69873 45%, #9C5F3F 100%)",
  "radial-gradient(circle at 40% 28%, #EDB084 0%, #B17C5B 45%, #5D3A24 100%)",
  "radial-gradient(circle at 40% 28%, #F2D0B1 0%, #D8A87E 45%, #8F5C36 100%)",
  "radial-gradient(circle at 40% 28%, #FAD9B8 0%, #DAA77C 45%, #8C5A38 100%)",
];

const pillCls = "bg-white/85 text-anset-lilas text-[9px] font-black px-2.5 py-1.5 rounded-full flex items-center gap-1 border border-anset-lilas/20";

export function ServiceSection() {
  const human = SERVICE_PILLARS.human;
  const ai = SERVICE_PILLARS.ai;
  const sample = ai.sample;

  return (
    <section id="service" className="bg-white relative overflow-hidden border-t border-anset-blue/10">
      <LeafPattern color="var(--anset-blue)" opacity={0.04} size={200} className="-right-12 -top-12" />
      <div className="container-anset py-16 md:py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
            Le service ANSET
          </p>
          <h2 className="text-2xl md:text-3xl text-anset-blue tracking-tight leading-[1.15]">
            La chaleur humaine <span className="accent">doublée</span> de l'efficacité de l'IA.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-5">

          <div className="bg-white rounded-[20px] border border-anset-blue/8 overflow-hidden flex flex-col shadow-premium">
            <div className="relative h-40 bg-gradient-to-br from-anset-corail-soft to-anset-corail-soft/40 flex items-center justify-center">
              <div className="flex items-center">
                {skinGradients.map((grad, idx) => (
                  <div
                    key={idx}
                    className="w-14 h-14 md:w-16 md:h-16 rounded-full border-[3px] border-white shadow-[0_6px_16px_rgba(0,0,0,0.12)]"
                    style={{
                      background: grad,
                      marginLeft: idx === 0 ? 0 : "-15px",
                      zIndex: skinGradients.length - idx,
                    }}
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
            <div className="p-6 flex flex-col gap-2.5 flex-1">
              <p className="text-[10px] font-black uppercase tracking-[1.8px] text-anset-corail-dark">
                {human.tag}
              </p>
              <h3 className="text-lg md:text-xl font-black text-anset-blue leading-tight">
                {human.title} <span className="accent">{human.accent}</span>
              </h3>
              <p className="text-xs md:text-sm text-anset-slate leading-relaxed font-medium flex-1">
                {human.description}
              </p>
              <div className="flex gap-4 pt-3 border-t border-anset-blue/8 flex-wrap mt-2">
                {human.features.map((feat) => (
                  <div key={feat} className="flex items-center gap-1.5 text-[11px] font-bold text-anset-blue">
                    <Check className="w-3 h-3 text-anset-menthe" strokeWidth={2.5} aria-hidden="true" />
                    {feat}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-anset-lilas-soft to-anset-lilas-soft/40 rounded-[20px] border border-anset-blue/8 p-6 flex flex-col relative overflow-hidden shadow-premium">
            <p className="text-[10px] font-black uppercase tracking-[1.8px] text-anset-lilas mb-2.5">
              {ai.tag}
            </p>
            <h3 className="text-lg md:text-xl font-black text-anset-blue leading-tight mb-3">
              {ai.title} <span className="accent">{ai.accent}</span>
            </h3>
            <p className="text-xs md:text-sm text-anset-slate leading-relaxed font-medium mb-5">
              {ai.description}
            </p>

            <div className="flex justify-center mb-5">
              <div className="bg-[#1a1a1c] rounded-[22px] p-1.5 w-[200px] shadow-[0_18px_50px_rgba(82,63,102,0.32)] relative z-10">
                <div className="bg-white rounded-[17px] overflow-hidden relative flex flex-col h-[330px]">
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[62px] h-3.5 bg-[#1a1a1c] rounded-lg z-10" aria-hidden="true" />

                  <div className="flex justify-between px-3.5 pt-1.5 pb-1 text-[8px] text-anset-blue font-black">
                    <span>9:41</span>
                    <span className="flex items-center gap-0.5">
                      <Wifi className="w-2.5 h-2.5" aria-hidden="true" />
                      <BatteryMedium className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>

                  <div className="px-3 pb-2.5 pt-2 border-b border-anset-blue/8 flex items-center gap-2">
                    <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-anset-lilas to-anset-lilas-dark text-white flex items-center justify-center text-xs font-black tracking-tight relative">
                      A
                      <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-anset-menthe border-[1.5px] border-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-black text-anset-blue leading-tight">
                        {sample.name}
                      </div>
                      <div className="text-[7.5px] text-anset-slate/70 font-semibold mt-0.5">
                        {sample.status}
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 px-3 py-2.5 flex flex-col gap-1.5 bg-gradient-to-b from-white to-anset-mist overflow-hidden">
                    {sample.messages.map((msg, idx) => (
                      <div
                        key={idx}
                        className={`text-[9px] leading-tight px-2 py-1.5 rounded-[11px] max-w-[80%] font-medium ${
                          msg.from === "user"
                            ? "bg-anset-blue text-white self-end rounded-br-[3px]"
                            : "bg-white text-anset-blue self-start rounded-bl-[3px] border-[0.5px] border-anset-blue/8"
                        }`}
                      >
                        {msg.text}
                      </div>
                    ))}
                    <div className="flex gap-1 flex-wrap mt-1">
                      {sample.quickReplies.map((reply) => (
                        <button
                          key={reply}
                          className="text-[8.5px] bg-white text-anset-blue border border-anset-blue px-2 py-1 rounded-xl font-bold"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="px-2.5 py-1.5 border-t border-anset-blue/8 flex gap-1.5 bg-white items-center">
                    <div className="flex-1 bg-white border-[0.5px] border-anset-blue/15 rounded-[10px] px-2 py-1 text-[8.5px] text-anset-slate font-medium">
                      Écrivez à Poé...
                    </div>
                    <button className="bg-anset-lilas text-white w-[22px] h-[22px] rounded-full flex items-center justify-center" aria-label="Envoyer le message">
                      <ArrowUp className="w-2.5 h-2.5" strokeWidth={2.5} aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-1.5 flex-wrap justify-center mt-auto">
              <span className={pillCls}>
                <Zap className="w-2.5 h-2.5" aria-hidden="true" />
                24h/24, 7j/7
              </span>
              <span className={pillCls}>
                <BookOpen className="w-2.5 h-2.5" aria-hidden="true" />
                Tous nos contrats
              </span>
              <span className={pillCls}>
                <Headphones className="w-2.5 h-2.5" aria-hidden="true" />
                Mise en relation
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
