import Image from "next/image";

const PARTNERS = [
  {
    src: "/images/partners/logo-gpj.svg",
    alt: "Groupama PJ",
    role: "Santé animale",
    height: 44,
    blurred: false,
  },
  {
    src: "/images/partners/logo-mdm.svg",
    alt: "Mutuelle du Motard",
    role: "Moto & cyclo",
    height: 44,
    blurred: false,
  },
  {
    src: "/images/partners/logo-acheel.png",
    alt: "Acheel",
    role: "Auto · Habitation · Santé · PNO",
    height: 34,
    blurred: false,
  },
  {
    src: "/images/partners/logo-ocirp.jpeg",
    alt: "OCIRP",
    role: "Emprunteur",
    height: 44,
    blurred: true,
  },
];

export function TrustLogosStrip() {
  return (
    <section className="bg-white border-y border-anset-blue/10 py-10 md:py-12">
      <div className="container-anset">
        <p className="text-center text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-slate/60 mb-8">
          Nos partenaires assureurs
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 md:gap-x-14 gap-y-7">
          {PARTNERS.map((p) => (
            <div key={p.src} className="flex flex-col items-center gap-2.5">
              <Image
                src={p.src}
                alt={p.blurred ? `${p.alt} — bientôt` : p.alt}
                width={200}
                height={p.height}
                className={`w-auto object-contain ${p.blurred ? "blur-[7px] opacity-40 select-none pointer-events-none" : ""}`}
                style={{ height: p.height }}
                aria-hidden={p.blurred || undefined}
              />
              <span className="text-[10px] uppercase tracking-[1.5px] text-anset-slate/70 font-bold">
                {p.blurred ? "Bientôt" : p.role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
