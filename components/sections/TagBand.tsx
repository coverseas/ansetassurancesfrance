import { LeafPattern } from "@/components/ui/LeafPattern";
import { TAGLINE } from "@/lib/constants";

export function TagBand() {
  return (
    <section className="bg-anset-blue text-white relative overflow-hidden">
      <LeafPattern color="white" opacity={0.12} size={80} className="-top-4 right-0" />
      <LeafPattern color="white" opacity={0.1} size={80} rotate={180} className="-bottom-4 left-0" />
      <div className="container-anset py-3 md:py-3.5 relative z-10 text-center">
        <p className="text-white font-black text-xs md:text-sm tracking-[5px] uppercase">
          {TAGLINE}
        </p>
      </div>
    </section>
  );
}