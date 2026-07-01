import type { Metadata } from "next";
import { Home, Droplets, Flame, Lock, CloudLightning, Users, Wrench } from "lucide-react";
import { ProductLanding, type ProductLandingData } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Assurance habitation · ANSET Assurances",
  description: "Assurance multirisque habitation pour locataires et propriétaires : dégât des eaux, incendie, vol, responsabilité civile. Risque porté par Acheel, distribué par ANSET Assurances.",
};

const data: ProductLandingData = {
  color: "lilas",
  icon: Home,
  pillText: "Habitation · Avec Acheel",
  title: "Votre logement protégé,",
  titleAccent: "sans mauvaise surprise.",
  lead: "Locataire ou propriétaire, couvrez votre logement et vos biens contre les dégâts des eaux, l'incendie, le vol et les aléas du quotidien. Une assurance claire, un conseiller qui connaît votre dossier.",
  bientotHref: "/bientot?produit=habitation",
  garantiesTitle: "Tout votre foyer,",
  garantiesAccent: "bien couvert.",
  garantiesIntro: "Une couverture multirisque complète, modulable selon que vous êtes locataire, propriétaire occupant ou en copropriété.",
  garanties: [
    { icon: Droplets, title: "Dégât des eaux", desc: "Fuites, infiltrations et ruptures de canalisation : réparations et biens endommagés pris en charge." },
    { icon: Flame, title: "Incendie & explosion", desc: "Dommages causés par le feu, la fumée, la foudre ou une explosion, sur le bâti comme sur le mobilier." },
    { icon: Lock, title: "Vol & vandalisme", desc: "Indemnisation en cas de cambriolage, tentative d'effraction ou actes de vandalisme sur vos biens." },
    { icon: Users, title: "Responsabilité civile", desc: "Les dommages que vous, votre famille ou vos biens causez à vos voisins ou à des tiers." },
    { icon: CloudLightning, title: "Événements climatiques", desc: "Tempête, grêle, neige et catastrophes naturelles reconnues par arrêté." },
    { icon: Wrench, title: "Assistance & dépannage", desc: "Une aide d'urgence en cas de sinistre rendant votre logement inhabitable, à toute heure." },
  ],
  avantages: [
    { title: "Un conseiller dédié", desc: "Pas de call center anonyme : une équipe qui connaît votre situation et vous accompagne à chaque étape." },
    { title: "Un assureur solide", desc: "Le risque est porté par Acheel, assureur français agréé et contrôlé par l'ACPR." },
    { title: "Gestion simplifiée", desc: "Devis, attestations et déclarations de sinistre en ligne, avec Poé disponible 24h/24." },
  ],
  aSavoir: [
    "La formule s'adapte à votre statut : locataire, propriétaire occupant ou propriétaire en copropriété.",
    "L'assurance habitation est obligatoire pour les locataires (loi du 6 juillet 1989).",
    "Les objets de valeur peuvent être couverts au-delà des plafonds standards, sur déclaration.",
    "La responsabilité civile vie privée protège l'ensemble de votre foyer, à la maison comme à l'extérieur.",
  ],
  porteurTitle: "Risque porté par Acheel.",
  porteurBody: "Le contrat est assuré par Acheel, société d'assurance française agréée et soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).",
  ctaTitle: "Protégez votre logement",
  ctaAccent: "dès l'ouverture.",
  ctaSubtitle: "Laissez-nous votre email pour être prévenu du lancement, ou prenez rendez-vous avec un conseiller.",
};

export default function HabitationPage() {
  return <ProductLanding {...data} />;
}
