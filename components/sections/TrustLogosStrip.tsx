import { ShieldCheck, Handshake } from "lucide-react";

export function TrustLogosStrip() {
  return (
    <section className="bg-white border-y border-anset-blue/10 py-8 md:py-10">
      <div className="container-anset">
        <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-14 gap-y-6">

          <div className="flex items-center gap-3">
            <ShieldCheck className="w-9 h-9 text-anset-blue" strokeWidth={1.4} aria-hidden="true" />
            <div>
              <div className="text-base md:text-[17px] font-black text-anset-blue tracking-tight leading-tight">
                ORIAS 26000597
              </div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/70 font-bold mt-0.5">
                Courtier immatriculé
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-anset-blue/10" aria-hidden="true" />

          <div className="flex items-center gap-3">
            <div className="bg-trustpilot text-white w-9 h-9 rounded-md flex items-center justify-center text-lg font-black leading-none" aria-hidden="true">★</div>
            <div>
              <div className="text-base md:text-[17px] font-black text-anset-blue tracking-tight leading-tight">
                4,7/5 · 847 avis
              </div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/70 font-bold mt-0.5">
                Trustpilot vérifiés
              </div>
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-anset-blue/10" aria-hidden="true" />

          <div className="flex items-center gap-3">
            <Handshake className="w-9 h-9 text-anset-blue" strokeWidth={1.4} aria-hidden="true" />
            <div>
              <div className="text-base md:text-[17px] font-black text-anset-blue tracking-tight leading-tight">
                Groupama · Mutuelle du Motard · Liberty Mutual
              </div>
              <div className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/70 font-bold mt-0.5">
                Nos porteurs de risque & RC Pro
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
