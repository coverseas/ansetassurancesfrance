import type { Metadata } from "next";
import { Car, ShieldCheck, Lock, Flame, GlassWater, CarFront, LifeBuoy } from "lucide-react";
import { ProductLanding, type ProductLandingData } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Assurance auto · ANSET Assurances",
  description: "Assurance auto au tiers, tiers + ou tous risques : responsabilité civile, vol, incendie, bris de glace, assistance. Risque porté par Acheel, distribué par ANSET Assurances.",
};

const data: ProductLandingData = {
  color: "moutarde",
  icon: Car,
  pillText: "Auto · Avec Acheel",
  title: "Votre voiture assurée,",
  titleAccent: "au juste prix.",
  lead: "Au tiers, tiers étendu ou tous risques : choisissez la formule adaptée à votre véhicule, à votre usage et à votre budget. Un tarif transparent et un conseiller qui vous guide.",
  bientotHref: "/bientot?produit=auto",
  garantiesTitle: "Roulez",
  garantiesAccent: "l'esprit tranquille.",
  garantiesIntro: "Des garanties modulables, de la formule au tiers obligatoire jusqu'à la protection tous risques.",
  garanties: [
    { icon: ShieldCheck, title: "Responsabilité civile", desc: "La garantie obligatoire qui couvre les dommages causés aux tiers avec votre véhicule." },
    { icon: Lock, title: "Vol & tentative de vol", desc: "Indemnisation en cas de vol du véhicule, d'effraction ou de dégradations liées." },
    { icon: Flame, title: "Incendie", desc: "Dommages causés par le feu, une explosion ou la foudre sur votre voiture." },
    { icon: GlassWater, title: "Bris de glace", desc: "Prise en charge du pare-brise, des vitres latérales et de la lunette arrière." },
    { icon: CarFront, title: "Dommages tous accidents", desc: "Réparation de votre véhicule même en cas d'accident responsable (formule tous risques)." },
    { icon: LifeBuoy, title: "Assistance 0 km", desc: "Dépannage et remorquage dès le pas de votre porte, partout en France." },
  ],
  avantages: [
    { title: "La bonne formule", desc: "Votre conseiller vous aide à choisir entre tiers, tiers + et tous risques selon votre véhicule." },
    { title: "Un assureur solide", desc: "Le risque est porté par Acheel, assureur français agréé et contrôlé par l'ACPR." },
    { title: "Protection du conducteur", desc: "Une garantie corporelle du conducteur disponible en option pour vous protéger, vous." },
  ],
  aSavoir: [
    "La responsabilité civile (garantie au tiers) est obligatoire pour tout véhicule terrestre à moteur.",
    "Le bonus-malus acquis chez votre précédent assureur est repris à la souscription.",
    "L'assistance 0 km vous dépanne même immobilisé devant chez vous.",
    "Les équipements et accessoires peuvent être couverts au-delà des plafonds standards, sur déclaration.",
  ],
  porteurTitle: "Risque porté par Acheel.",
  porteurBody: "Le contrat est assuré par Acheel, société d'assurance française agréée et soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).",
  ctaTitle: "Assurez votre voiture",
  ctaAccent: "dès l'ouverture.",
  ctaSubtitle: "Laissez-nous votre email pour être prévenu du lancement, ou prenez rendez-vous avec un conseiller.",
};

export default function AutoPage() {
  return <ProductLanding {...data} />;
}
