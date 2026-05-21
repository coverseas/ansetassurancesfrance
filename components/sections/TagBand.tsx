import { LeafPattern } from "@/components/ui/LeafPattern";
import { TAGLINE } from "@/lib/constants";

export function TagBand() {
  return (
    <section className="bg-anset-moutarde relative overflow-hidden">
      <LeafPattern color="white" opacity={0.18} size={130} className="-top-6 left-6" />
      <LeafPattern color="white" opacity={0.15} size={150} rotate={180} className="-bottom-6 right-6" />
      <div className="container-anset py-4 md:py-5 relative z-10 text-center">
        <p className="text-white font-black text-base md:text-lg tracking-wide">{TAGLINE}</p>
      </div>
    </section>
  );
}