import { CONTACT } from "@/lib/constants";
import { ChevronDown, MessageCircle, Phone } from "lucide-react";

const FAQS = [
  {
    q: "Quels produits puis-je souscrire dès aujourd'hui ?",
    a: "Trois assurances sont accessibles immédiatement : la santé pour votre chien ou votre chat (portée par Groupama PJ), l'assurance moto, cyclo et scooter (Mutuelle du Motard), et l'assurance voyage & rapatriement (HEYME). L'assurance emprunteur, portée par OCIRP, ouvre très bientôt. D'autres produits suivront tout au long de 2026.",
  },
  {
    q: "Comment obtenir un devis ?",
    a: "Sélectionnez ce que vous souhaitez assurer dans le sélecteur en haut de page pour démarrer votre devis en quelques minutes. Vous pouvez aussi écrire à Poé qui prépare votre demande et la transmet à un conseiller, ou nous appeler directement. Nous vous rappelons sous 2 heures ouvrées.",
  },
  {
    q: "Que peut faire Poé, exactement ?",
    a: "Poé est notre agente IA. Elle connaît dans le détail tous nos contrats et garanties, vous renseigne sur les couvertures, prépare votre demande de devis, vous donne les informations utiles, et vous met en relation avec un conseiller humain quand vous le souhaitez. Elle est disponible 24h/24, 7j/7, y compris les week-ends et les jours fériés.",
  },
  {
    q: "Que se passe-t-il en cas de sinistre ?",
    a: "Vous nous contactez par téléphone, par email, ou via Poé qui transmet votre dossier à un conseiller dédié. Celui-ci prend votre dossier en main, vous explique les étapes, et vous tient au courant à chaque étape. Sur la santé animale, le remboursement tombe en moyenne en 48 heures après réception des justificatifs.",
  },
  {
    q: "Qui porte les risques et avec qui suis-je en relation ?",
    a: "ANSET ASSURANCES est la marque commerciale de Coverseas SASU, courtier d'assurances immatriculé à l'ORIAS sous le numéro 26000597 et soumis au contrôle de l'ACPR. Les risques sont portés par nos assureurs partenaires : Groupama PJ pour la santé animale, la Mutuelle du Motard pour le moto-cyclo, HEYME pour le voyage, OCIRP pour l'emprunteur. Notre responsabilité civile professionnelle et notre garantie financière sont assurées par Liberty Mutual Insurance Europe SE.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-anset-mist/30 border-t border-anset-blue/10 py-16 md:py-20">
      <div className="container-anset max-w-4xl">
        <div className="text-center mb-10">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
            Questions fréquentes
          </p>
          <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight leading-[1.15]">
            Tout ce qu'il faut savoir <span className="accent">avant de souscrire</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white rounded-2xl border border-anset-blue/10 overflow-hidden hover:border-anset-blue/30 transition-colors shadow-premium-sm"
            >
              <summary className="flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 cursor-pointer list-none">
                <h3 className="text-sm md:text-base font-black text-anset-blue tracking-tight pr-4 leading-snug">
                  {faq.q}
                </h3>
                <ChevronDown
                  className="w-5 h-5 text-anset-blue flex-shrink-0 transition-transform group-open:rotate-180"
                  strokeWidth={2.5}
                  aria-hidden="true"
                />
              </summary>
              <div className="px-5 md:px-6 pb-5 md:pb-6">
                <p className="text-sm text-anset-slate leading-relaxed font-medium">
                  {faq.a}
                </p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center bg-white rounded-2xl border border-anset-blue/10 p-6 md:p-8 shadow-premium-sm">
          <p className="text-base md:text-lg font-black text-anset-blue tracking-tight mb-2">
            Vous avez une autre question ?
          </p>
          <p className="text-sm text-anset-slate font-medium mb-5">
            Écrivez à Poé pour une réponse immédiate, ou parlez directement à un conseiller.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            
              href={CONTACT.phoneHref}
              className="inline-flex items-center gap-2 bg-anset-blue text-white text-sm font-black px-5 py-3 rounded-xl hover:bg-anset-blue-dark transition-colors"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              {CONTACT.phoneDisplay}
            </a>
            
              href={`mailto:${CONTACT.email}`}
              className="inline-flex items-center gap-2 bg-white text-anset-blue border-2 border-anset-blue text-sm font-black px-5 py-3 rounded-xl hover:bg-anset-blue/5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Nous écrire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
