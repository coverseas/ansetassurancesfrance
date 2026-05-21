import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Si j'ai un sinistre, comment ça se passe ?",
    a: "Vous nous appelez ou écrivez à Poé 24h/24. Un conseiller dédié prend votre dossier en main, vous explique les étapes, et vous tient au courant à chaque étape. Sur la santé animale, le remboursement tombe en moyenne en 48 heures.",
  },
  {
    q: "Pourquoi passer par ANSET plutôt que d'aller directement chez l'assureur ?",
    a: "Même prix, mais avec un courtier qui négocie pour vous, vous accompagne dans le choix, et reste votre interlocuteur unique pour tous vos contrats. Vous bénéficiez de notre expertise sans surcoût — nous sommes rémunérés par les assureurs, pas par vous.",
  },
  {
    q: "Que peut faire Poé, exactement ?",
    a: "Envoyer une attestation immédiatement, déclarer un sinistre simple, modifier vos coordonnées, répondre à toute question sur vos contrats, et vous orienter vers un conseiller humain quand c'est nécessaire. Elle est formée sur l'ensemble de nos produits et apprend en continu.",
  },
  {
    q: "Pourquoi ANSET est-il particulièrement adapté à la diaspora ultramarine ?",
    a: "Parce que nos racines sont en outre-mer. Vingt-cinq ans en Polynésie, à La Réunion, en Nouvelle-Calédonie nous ont appris à connaître les codes, les attentes, et les enjeux particuliers des familles ultramarines. Nos conseillers en métropole partagent cette culture.",
  },
  {
    q: "Mes données sont-elles bien protégées ?",
    a: "Oui. Nous sommes conformes RGPD, vos données restent en Europe (hébergement Vercel Paris), et vous pouvez les consulter, modifier ou supprimer à tout moment via rgpd@ansetassurances.com. Aucune revente, aucune publicité tierce.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-white py-20 md:py-28 border-t border-anset-blue/8">
      <div className="container-anset max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-3">
            Questions fréquentes
          </p>
          <h2 className="text-3xl md:text-[40px] lg:text-[48px] text-anset-blue tracking-[-0.035em] leading-[1.05] font-black">
            On vous explique <span className="accent">tout</span>.
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, idx) => (
            <details key={idx} className="group bg-anset-mist/40 rounded-2xl border border-anset-blue/8 overflow-hidden transition-colors hover:border-anset-blue/20">
              <summary className="px-6 md:px-8 py-5 md:py-6 cursor-pointer list-none flex items-center justify-between gap-4 select-none">
                <span className="text-base md:text-lg font-black text-anset-blue leading-snug">
                  {faq.q}
                </span>
                <ChevronDown className="w-5 h-5 text-anset-blue flex-shrink-0 transition-transform duration-300 group-open:rotate-180" strokeWidth={2} aria-hidden="true" />
              </summary>
              <div className="px-6 md:px-8 pb-6 md:pb-7">
                <p className="text-sm md:text-base text-anset-slate leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
