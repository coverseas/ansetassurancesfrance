import Image from "next/image";

const PARTNERS = [
  { src: "/images/partners/logo-mdm.svg", alt: "Mutuelle du Motard", height: 44 },
  { src: "/images/partners/logo-heyme.png", alt: "HEYME", height: 32 },
  { src: "/images/partners/logo-ocirp.jpeg", alt: "OCIRP", height: 44 },
  { src: "/images/partners/logo-gpj.svg", alt: "GPJ", height: 44 },
];

export function TrustLogosStrip() {
  return (
    <section className="bg-white border-y border-anset-blue/10 py-10 md:py-12">
      <div className="container-anset">
        <p className="text-center text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-slate/60 mb-8">
          Nos partenaires assureurs
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-16 gap-y-6">
          {PARTNERS.map((p) => (
            <Image
              key={p.src}
              src={p.src}
              alt={p.alt}
              width={180}
              height={p.height}
              className="w-auto object-contain"
              style={{ height: p.height }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
