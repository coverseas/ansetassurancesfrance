import type { Metadata } from "next";
import { Receipt, Activity, Briefcase, UserMinus, PlugZap, ShieldCheck, Wallet } from "lucide-react";
import { ProductLanding, type ProductLandingData } from "@/components/ProductLanding";

export const metadata: Metadata = {
  title: "Zen Facture · ANSET Assurances",
  description: "Zen Facture prend en charge vos factures du quotidien (énergie, téléphone, internet, eau, abonnements) jusqu'à 600 € par sinistre en cas de perte de revenus. Risque porté par Acheel, distribué par ANSET Assurances.",
};

const data: ProductLandingData = {
  color: "menthe",
  icon: Receipt,
  pillText: "Zen Facture · Mon budget",
  title: "Vos factures assurées,",
  titleAccent: "même en cas de coup dur.",
  lead: "Un accident de la vie, un accident médical ou un licenciement économique fait chuter vos revenus ? Zen Facture prend en charge vos factures essentielles — énergie, téléphone, internet, eau, abonnements — pour vous laisser souffler. Risque porté par Acheel.",
  bientotHref: "/devis?produit=zen-facture",
  garantiesTitle: "Ce que Zen Facture",
  garantiesAccent: "prend en charge.",
  garantiesIntro: "La garantie s'active lorsqu'un événement couvert entraîne la perte d'un revenu (salaire, pension de retraite ou d'invalidité, revenus locatifs).",
  garanties: [
    { icon: Activity, title: "Accident de la vie privée", desc: "Accident domestique, de loisirs, sportif ou touristique entraînant une perte de revenu." },
    { icon: Briefcase, title: "Accident professionnel", desc: "Accident de trajet ou de travail entraînant une incapacité temporaire ou permanente." },
    { icon: UserMinus, title: "Licenciement économique", desc: "La perte d'emploi pour motif économique est couverte, sous conditions du contrat." },
    { icon: PlugZap, title: "Vos factures essentielles", desc: "Énergie (gaz, électricité), téléphone, internet, eau et abonnements du foyer avec engagement." },
    { icon: ShieldCheck, title: "Aucune franchise", desc: "Prise en charge du montant réel de la facture, sans franchise à votre charge." },
    { icon: Wallet, title: "Jusqu'à 600 € par sinistre", desc: "Plafond de 600 € TTC par sinistre, sur présentation de vos factures." },
  ],
  avantages: [
    { title: "Un filet de sécurité", desc: "Quand un coup dur fait chuter vos revenus, vos factures du quotidien restent payées." },
    { title: "Un assureur solide", desc: "Le risque est porté par Acheel, assureur français agréé et contrôlé par l'ACPR." },
    { title: "Simple et sans franchise", desc: "Gestion 100% en ligne, aucune franchise, prise en charge du montant réel." },
  ],
  aSavoir: [
    "Réservé aux particuliers de 18 à 75 ans résidant en France (y compris Corse, DROM, Saint-Barthélemy, Saint-Martin et Polynésie française).",
    "Le contrat couvre uniquement les factures établies au nom du souscripteur.",
    "Prise en charge du montant réel de la facture, dans la limite de 600 € TTC par sinistre, sans franchise.",
    "Ne sont pas couverts, notamment : la fin d'un CDD, la rupture conventionnelle, le licenciement disciplinaire, les sinistres impliquant un véhicule terrestre à moteur ou déjà couverts par un autre contrat.",
    "Contrat d'un an à tacite reconduction ; cotisation payable annuellement ou mensuellement.",
  ],
  porteurTitle: "Risque porté par Acheel.",
  porteurBody: "Le contrat est assuré par Acheel, société d'assurance française agréée et soumise au contrôle de l'Autorité de Contrôle Prudentiel et de Résolution (ACPR).",
  ctaTitle: "Protégez votre budget",
  ctaAccent: "avec un conseiller.",
  ctaSubtitle: "Obtenez votre devis Zen Facture avec un conseiller dédié, ou prenez rendez-vous à l'horaire qui vous convient.",
  heroNote: "Avec conseiller dédié · Risque porté par Acheel",
  ctaKicker: "Envie de souffler un peu ?",
  finalCtaLabel: "Obtenir mon devis",
};

export default function ZenFacturePage() {
  return <ProductLanding {...data} />;
}
