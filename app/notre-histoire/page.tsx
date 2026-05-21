import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Heart, Shield, Users, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Notre histoire · ANSET Assurances",
  description: "Depuis 2000, ANSET Assurances accompagne les habitants de Polynésie, de La Réunion, de Nouvelle-Calédonie, et désormais de métropole. Une histoire de proximité, d'un océan à l'autre.",
};

const backLinkCls = "inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-corail transition-colors mb-8";
const h1Cls = "text-3xl md:text-5xl lg:text-6xl font-black text-anset-blue tracking-[-0.04em] leading-[1.05] mb-6";
const milestoneRowCls = "grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8 pb-8 md:pb-12 border-b border-anset-blue/10";
const milestoneRowLastCls = "grid grid-cols-1 md:grid-cols-[140px_1fr] gap-4 md:gap-8";
const yearLabelCls = "text-[10px] uppercase tracking-[2px] font-black text-anset-corail mb-1";
const yearCls = "text-3xl md:text-4xl font-black text-anset-blue";
const milestoneTitleCls = "text-lg md:text-xl font-black text-anset-blue mb-3 tracking-tight";
const milestoneTextCls = "text-sm md:text-base text-anset-slate leading-relaxed font-medium";
const ambitionH2Cls = "text-2xl md:text-3xl lg:text-4xl font-black text-anset-blue tracking-[-0.025em] leading-[1.15] mb-8";
const ambitionParaCls = "text-base md:text-lg text-anset-slate leading-relaxed font-medium";
const valueCardCls = "bg-white rounded-2xl p-6 md:p-7 border border-anset-blue/10 shadow-premium-sm";
const valueIconCls = "w-11 h-11 rounded-xl flex items-center justify-center mb-4";
const valueTitleCls = "text-lg font-black text-anset-blue mb-2 tracking-tight";
const valueDescCls = "text-sm text-anset-slate leading-relaxed font-medium";
const ctaButtonCls = "inline-flex items-center gap-2 bg-white text-anset-blue text-sm font-black px-6 py-3.5 rounded-2xl hover:bg-anset-mist transition-colors";

export default function NotreHistoirePage() {
  return (
    <main className="bg-white">

      <section className="bg-gradient-to-b from-anset-mist to-white py-16 md:py-24 border-b border-anset-blue/10">
        <div className="container-anset max-w-4xl">
          <Link href="/" className={backLinkCls}>
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-3">
            Notre histoire
          </p>
          <h1 className={h1Cls}>
            25 ans à vos côtés,<br />
            <span className="accent">d'un océan à l'autre.</span>
          </h1>
          <p className="text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl">
            De Papeete à Saint-Denis, puis à Nouméa, puis en métropole. Une histoire qui a commencé en 2000 sur les rives du Pacifique et qui s'écrit aujourd'hui auprès des familles ultramarines installées en France.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-anset max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight mb-12 text-center">
            Une histoire en <span className="accent">cinq escales</span>
          </h2>

          <div className="space-y-0">

            <div className={milestoneRowCls}>
              <div>
                <div className={yearLabelCls}>2000</div>
                <div className={yearCls}>Tahiti</div>
              </div>
              <div>
                <h3 className={milestoneTitleCls}>La graine est plantée au fenua</h3>
                <p className={milestoneTextCls}>
                  Tout commence à Papeete avec la création d'Eurofi Tahiti, société de courtage spécialisée dans l'assurance auto, moto et habitation. L'intuition fondatrice : les Polynésiens méritent des contrats pensés pour leur quotidien, pas des produits standard transposés du continent.
                </p>
              </div>
            </div>

            <div className={milestoneRowCls + " pt-8 md:pt-12"}>
              <div>
                <div className={yearLabelCls}>2004 — 2009</div>
                <div className={yearCls}>ANSET</div>
              </div>
              <div>
                <h3 className={milestoneTitleCls}>La marque ANSET prend racine</h3>
                <p className={milestoneTextCls}>
                  Eurofi devient Anset Assurances en 2004, et lance ses propres produits à partir de 2009 — des contrats conçus avec et pour les Polynésiens. Huit agences ouvriront progressivement, de Papeete à Moorea, en passant par Punaauia et Taravao. La proximité devient l'ADN de la marque.
                </p>
              </div>
            </div>

            <div className={milestoneRowCls + " pt-8 md:pt-12"}>
              <div>
                <div className={yearLabelCls}>2012</div>
                <div className={yearCls}>La Réunion</div>
              </div>
              <div>
                <h3 className={milestoneTitleCls}>Premier cap hors du Pacifique</h3>
                <p className={milestoneTextCls}>
                  En 2012, ANSET traverse les océans et s'implante à La Réunion. Premier saut hors du berceau polynésien : l'expertise du Pacifique se déploie dans l'océan Indien, fidèle aux mêmes valeurs de proximité, d'écoute et d'engagement.
                </p>
              </div>
            </div>

            <div className={milestoneRowCls + " pt-8 md:pt-12"}>
              <div>
                <div className={yearLabelCls}>2023</div>
                <div className={yearCls}>Nouméa</div>
              </div>
              <div>
                <h3 className={milestoneTitleCls}>Une nouvelle page dans le Pacifique</h3>
                <p className={milestoneTextCls}>
                  Onze ans après l'arrivée à La Réunion, ANSET ouvre son agence rue Duquesne à Nouméa. Retour vers le Pacifique, sur un autre archipel, avec la même conviction : un courtier qui connaît son territoire vaut toujours mieux qu'une compagnie lointaine.
                </p>
              </div>
            </div>

            <div className={milestoneRowLastCls + " pt-8 md:pt-12"}>
              <div>
                <div className={yearLabelCls}>2026</div>
                <div className={yearCls}>Paris</div>
              </div>
              <div>
                <h3 className={milestoneTitleCls}>Le retour en métropole</h3>
                <p className={milestoneTextCls}>
                  Vingt-six ans après la naissance d'ANSET à Tahiti, la marque arrive en France métropolitaine, portée par Coverseas SASU. Trois assurances accessibles dès maintenant : santé chien & chat avec Groupama PJ, moto et cyclo avec la Mutuelle du Motard, voyage avec HEYME. L'assurance emprunteur, portée par OCIRP, arrive très bientôt. D'autres produits suivront tout au long de 2026.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-anset-mist/30 border-y border-anset-blue/10">
        <div className="container-anset max-w-3xl">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-3">
            Notre ambition, dès le départ
          </p>
          <h2 className={ambitionH2Cls}>
            Accompagner la communauté ultramarine, <span className="accent">de l'île à l'installation</span>.
          </h2>
          <div className="space-y-5">
            <p className={ambitionParaCls}>
              Pour beaucoup d'Ultramarins, le départ vers la métropole est un moment chargé : un logement à trouver, une scolarité à préparer, des comptes à transférer, des contrats d'assurance à refaire. Trop souvent, ces démarches se font dans un environnement nouveau, loin des repères familiaux et culturels.
            </p>
            <p className={ambitionParaCls}>
              ANSET veut être présent dès ce moment de transition. Vous accompagner depuis votre île d'origine, vous suivre à votre arrivée en métropole, et continuer à vous protéger au quotidien — comme un fil de relation qui ne se rompt pas malgré l'océan.
            </p>
            <p className={ambitionParaCls}>
              Des conseillers qui connaissent les réalités ultramarines, qui parlent votre langue au sens propre comme au figuré, qui comprennent les spécificités de votre situation : du chien qui voyage avec vous, à l'assurance pour vos allers-retours réguliers avec la famille restée au pays. Nous reprenons le fil de la relation là où vous l'avez laissé.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-anset max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-anset-corail mb-2">
              Nos valeurs
            </p>
            <h2 className="text-2xl md:text-3xl font-black text-anset-blue tracking-tight">
              Quatre principes qui nous guident <span className="accent">depuis l'origine</span>.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">

            <div className={valueCardCls}>
              <div className={valueIconCls + " bg-anset-corail-soft text-anset-corail-dark"}>
                <Heart className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className={valueTitleCls}>Proximité et enracinement</h3>
              <p className={valueDescCls}>
                Conseillers dédiés joignables 6 jours sur 7, agente IA Poé disponible jour et nuit. La distance avec votre île ne doit pas creuser la distance avec votre assureur.
              </p>
            </div>

            <div className={valueCardCls}>
              <div className={valueIconCls + " bg-anset-menthe/20 text-anset-menthe"}>
                <Shield className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className={valueTitleCls}>Respect des règles</h3>
              <p className={valueDescCls}>
                Courtier inscrit à l'ORIAS (catégorie B), contrôlé par l'ACPR, couvert par Liberty Mutual Insurance Europe. Chaque conseiller est formé à la conformité dès son intégration.
              </p>
            </div>

            <div className={valueCardCls}>
              <div className={valueIconCls + " bg-anset-moutarde/20 text-anset-moutarde-dark"}>
                <Users className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className={valueTitleCls}>Écoute et loyauté</h3>
              <p className={valueDescCls}>
                Accueillir, écouter, comprendre, puis seulement proposer. Et tenir nos engagements jusqu'au bout du contrat, sans clauses cachées ni mauvaises surprises.
              </p>
            </div>

            <div className={valueCardCls}>
              <div className={valueIconCls + " bg-anset-lilas-soft text-anset-lilas"}>
                <Leaf className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <h3 className={valueTitleCls}>Agir dans l'intérêt général</h3>
              <p className={valueDescCls}>
                Engagement associatif dans nos territoires, démarche écologique au quotidien, soutien aux causes qui comptent pour nos clients. Une assurance qui regarde plus loin que ses contrats.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-anset-blue text-white">
        <div className="container-anset max-w-3xl text-center">
          <p className="text-[10px] md:text-xs font-black uppercase tracking-[2.5px] text-white/60 mb-3">
            Notre signature, depuis 2000
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.03em] leading-[1.1] mb-8">
            À vos côtés,<br />
            à tout moment.
          </p>
          <Link href="/" className={ctaButtonCls}>
            Découvrir nos assurances
          </Link>
        </div>
      </section>

    </main>
  );
}