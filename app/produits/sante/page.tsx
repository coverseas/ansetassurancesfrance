import type { Metadata } from "next";
import { HeartPulse, Stethoscope, BedDouble, Glasses, Smile, CreditCard, Video } from "lucide-react";
import { ProductLanding, type ProductLandingData } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Mutuelle santé individuelle · ANSET Assurances",
  description: "Complémentaire santé individuelle pour vous et votre famille : soins courants, hospitalisation, optique, dentaire, téléconsultation et tiers payant. Risque porté par Acheel, distribué par ANSET Assurances.",
};

const data: ProductLandingData = {
  color: "corail",
  icon: HeartPulse,
  pillText: "Santé individuelle · Avec Acheel",
  title: "Votre santé bien remboursée,",
  titleAccent: "sans avance de frais.",
  lead: "Une complémentaire santé pour vous et votre famille : soins courants, hospitalisation, optique et dentaire. Des formules modulables selon vos besoins, avec le tiers payant chez vos praticiens.",
  bientotHref: "/bientot?produit=sante",
  garantiesTitle: "Une couverture",
  garantiesAccent: "à votre mesure.",
  garantiesIntro: "Choisissez le niveau de remboursement adapté à votre profil, de l'essentiel aux garanties renforcées.",
  garanties: [
    { icon: Stethoscope, title: "Soins courants", desc: "Consultations, médecins généralistes et spécialistes, analyses et pharmacie." },
    { icon: BedDouble, title: "Hospitalisation", desc: "Frais de séjour, honoraires chirurgicaux et chambre particulière selon la formule." },
    { icon: Glasses, title: "Optique", desc: "Montures, verres et lentilles, avec des forfaits adaptés à vos besoins." },
    { icon: Smile, title: "Dentaire", desc: "Soins, prothèses et orthodontie, au-delà des bases de remboursement de la Sécurité sociale." },
    { icon: CreditCard, title: "Tiers payant", desc: "Ne faites pas l'avance des frais chez les praticiens et en pharmacie." },
    { icon: Video, title: "Téléconsultation", desc: "Un médecin accessible à distance, quand vous en avez besoin." },
  ],
  avantages: [
    { title: "La bonne formule", desc: "Votre conseiller vous aide à calibrer vos garanties selon vos besoins réels et votre budget." },
    { title: "Un assureur solide", desc: "Le risque est porté par Acheel, assureur français agréé et contrôlé par l'ACPR." },
    { title: "Zéro paperasse", desc: "Télétransmission avec la Sécurité sociale et remboursements suivis depuis votre espace." },
  ],
  aSavoir: [
    "La complémentaire s'ajoute aux remboursements de la Sécurité sociale, elle ne les remplace pas.",
    "La télétransmission (Noémie) évite d'envoyer vos décomptes : les remboursements sont automatiques.",
    "Les formules sont modulables et peuvent couvrir votre conjoint et vos enfants.",
    "Le tiers payant vous évite l'avance de frais chez la plupart des professionnels de santé.",
  ],
  porteurTitle: "Risque porté par Acheel.",
  porteurBody: "Le contrat est assuré par Acheel, société d'assurance française agréée et soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).",
  ctaTitle: "Prenez soin de vous",
  ctaAccent: "dès l'ouverture.",
  ctaSubtitle: "Laissez-nous votre email pour être prévenu du lancement, ou prenez rendez-vous avec un conseiller.",
};

export default function SantePage() {
  return <ProductLanding {...data} />;
}
