import type { Metadata } from "next";
import { Bike, ShieldCheck, Lock, Flame, Shirt, LifeBuoy, Package } from "lucide-react";
import { ProductLanding, type ProductLandingData } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Assurance moto, cyclo & scooter · ANSET Assurances",
  description: "Assurance deux-roues pour particuliers et pros : responsabilité civile, vol, incendie, équipement du motard, assistance. Spéciale livreurs et coursiers. Risque porté par la Mutuelle des Motards.",
};

const data: ProductLandingData = {
  color: "moutarde",
  icon: Bike,
  pillText: "Moto, cyclo & scooter · Mes biens",
  title: "Votre deux-roues assuré,",
  titleAccent: "particuliers et pros.",
  lead: "Moto, cyclo, scooter ou 50 cc : une assurance adaptée à votre machine et à votre usage, y compris pour les livreurs et les coursiers. Portée par le spécialiste historique du deux-roues.",
  bientotHref: "/bientot?produit=moto",
  garantiesTitle: "Une couverture",
  garantiesAccent: "taillée pour la route.",
  garantiesIntro: "Des garanties modulables, de la responsabilité civile obligatoire jusqu'à la protection tous risques et l'équipement.",
  garanties: [
    { icon: ShieldCheck, title: "Responsabilité civile", desc: "La garantie obligatoire qui couvre les dommages causés aux tiers avec votre deux-roues." },
    { icon: Lock, title: "Vol & tentative de vol", desc: "Indemnisation en cas de vol du véhicule, d'effraction ou de dégradations liées." },
    { icon: Flame, title: "Incendie", desc: "Dommages causés par le feu, une explosion ou la foudre sur votre machine." },
    { icon: Shirt, title: "Équipement du motard", desc: "Casque, gants, blouson et protections garantis en cas d'accident (en option)." },
    { icon: LifeBuoy, title: "Assistance & dépannage", desc: "Dépannage et remorquage en cas de panne ou d'accident, partout en France." },
    { icon: Package, title: "Spécial livreurs & coursiers", desc: "Une couverture pensée pour l'usage professionnel : livraison, coursier, VTC deux-roues." },
  ],
  avantages: [
    { title: "Le spécialiste du deux-roues", desc: "Le risque est porté par la Mutuelle des Motards, expert historique et engagé du deux-roues." },
    { title: "Un conseiller dédié", desc: "Une équipe qui connaît la moto et votre dossier, pas un call center anonyme." },
    { title: "Pensé pour les pros", desc: "Des solutions adaptées aux livreurs, coursiers et usages professionnels intensifs." },
  ],
  aSavoir: [
    "La responsabilité civile est obligatoire pour tout deux-roues motorisé, y compris les 50 cc et cyclos.",
    "L'assurance couvre aussi bien les particuliers que les usages professionnels (livraison, coursier).",
    "L'équipement du motard (casque, gants, blouson) peut être garanti en option.",
    "Le bonus-malus acquis chez votre précédent assureur est repris à la souscription.",
  ],
  porteurTitle: "Risque porté par la Mutuelle des Motards.",
  porteurBody: "Le contrat est assuré par la Mutuelle des Motards (Assurance Mutuelle des Motards), société d'assurance mutuelle à cotisations variables régie par le Code des assurances et soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).",
  ctaTitle: "Assurez votre deux-roues",
  ctaAccent: "avec un spécialiste.",
  ctaSubtitle: "Obtenez votre devis avec un conseiller dédié, ou prenez rendez-vous à l'horaire qui vous convient.",
  heroNote: "Avec conseiller dédié · Risque porté par la Mutuelle des Motards",
  ctaKicker: "Prêt à prendre la route ?",
  finalCtaLabel: "Obtenir mon devis",
};

export default function MotoCycloPage() {
  return <ProductLanding {...data} />;
}
