import type { Metadata } from "next";
import { KeyRound, Droplets, Flame, Scale, CloudLightning, Building2, ShieldCheck } from "lucide-react";
import { ProductLanding, type ProductLandingData } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Assurance propriétaire non occupant (PNO) · ANSET Assurances",
  description: "Assurance PNO pour propriétaires bailleurs : protégez votre bien loué ou vacant contre les sinistres et couvrez votre responsabilité. Risque porté par Acheel, distribué par ANSET Assurances.",
};

const data: ProductLandingData = {
  color: "moutarde",
  icon: KeyRound,
  pillText: "PNO · Avec Acheel",
  title: "Votre bien loué,",
  titleAccent: "couvert même vide.",
  lead: "Vous louez un logement ou le laissez vacant entre deux locataires ? L'assurance propriétaire non occupant protège votre bien et votre responsabilité, là où celle du locataire s'arrête.",
  bientotHref: "/bientot?produit=pno",
  garantiesTitle: "La sérénité",
  garantiesAccent: "du bailleur.",
  garantiesIntro: "Une protection pensée pour les propriétaires bailleurs, en complément de l'assurance de votre locataire.",
  garanties: [
    { icon: ShieldCheck, title: "Responsabilité de propriétaire", desc: "Les dommages causés aux tiers du fait du logement, même en l'absence de locataire." },
    { icon: Droplets, title: "Dégât des eaux", desc: "Prise en charge des sinistres liés à l'eau affectant le bâti de votre bien." },
    { icon: Flame, title: "Incendie & explosion", desc: "Dommages causés par le feu, la fumée ou une explosion sur votre logement." },
    { icon: CloudLightning, title: "Événements climatiques", desc: "Tempête, grêle, neige et catastrophes naturelles reconnues par arrêté." },
    { icon: Building2, title: "Logement vacant", desc: "Votre bien reste couvert entre deux locations, y compris lorsqu'il est inoccupé." },
    { icon: Scale, title: "Défense & recours", desc: "Accompagnement juridique pour faire valoir vos droits en cas de litige lié au bien." },
  ],
  avantages: [
    { title: "Le bon complément", desc: "La PNO couvre ce que l'assurance de votre locataire ne prend pas en charge." },
    { title: "Un assureur solide", desc: "Le risque est porté par Acheel, assureur français agréé et contrôlé par l'ACPR." },
    { title: "Un interlocuteur unique", desc: "Un conseiller qui connaît votre dossier de bailleur et vous répond directement." },
  ],
  aSavoir: [
    "La PNO est obligatoire pour les lots en copropriété (loi ALUR, article 9-1).",
    "Elle intervient en complément — ou en l'absence — de l'assurance souscrite par votre locataire.",
    "Le logement reste couvert pendant les périodes de vacance locative.",
    "Elle s'adresse aussi bien à la location vide qu'à la location meublée.",
  ],
  porteurTitle: "Risque porté par Acheel.",
  porteurBody: "Le contrat est assuré par Acheel, société d'assurance française agréée et soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).",
  ctaTitle: "Protégez votre investissement",
  ctaAccent: "dès l'ouverture.",
  ctaSubtitle: "Laissez-nous votre email pour être prévenu du lancement, ou prenez rendez-vous avec un conseiller.",
};

export default function PnoPage() {
  return <ProductLanding {...data} />;
}
