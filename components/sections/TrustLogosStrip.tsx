import { Star } from "lucide-react";

const PARTNERS = [
  { name: "Groupama", role: "Porteur Santé animale" },
  { name: "Mutuelle du Motard", role: "Porteur Moto & Cyclo" },
  { name: "Liberty Mutual", role: "RC Pro & Garantie financière" },
  { name: "ORIAS 26000597", role: "Courtier immatriculé" },
];

export function TrustLogosStrip() {
  return (
    <section className="bg-white border-t border-b border-anset-blue/8 py-10 md:py-12">
      <div className="container-anset">
        <p className="text-center text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-slate/60 mb-7">
          Une marque sous contrôle, avec des partenaires de premier plan
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-5">
          {PARTNERS.map((p) => (
            <div key={p.name} className="text-center">
              <div className="text-sm md:text-base font-black text-anset-blue tracking-tight">
                {p.name}
              </div>
              <div className="text-[10px] text-anset-slate/70 font-semibold mt-0.5 tracking-wide uppercase">
                {p.role}
              </div>
            </div>
          ))}
          <div className="text-center">
            <div className="text-sm md:text-base font-black text-anset-blue tracking-tight flex items-center justify-center gap-1.5">
              <Star className="w-3.5 h-3.5 text-trustpilot" fill="currentColor" aria-hidden="true" />
              Trustpilot 4,7/5
            </div>
            <div className="text-[10px] text-anset-slate/70 font-semibold mt-0.5 tracking-wide uppercase">
              847 avis vérifiés
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
