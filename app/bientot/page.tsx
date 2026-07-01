import Link from "next/link";
import type { Metadata } from "next";
import { Cat, Bike, Globe, Home, Car, KeyRound, HeartPulse, User, ArrowLeft, Bell, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CONTACT, CALENDLY } from "@/lib/constants";

type ProductInfo = {
  name: string;
  type: "souscription" | "espace";
  icon: LucideIcon;
  bgGradient: string;
  iconBg: string;
  textColor: string;
  porteur?: string;
};

const PRODUCTS: Record<string, ProductInfo> = {
  "sante-animale": {
    name: "Santé chien & chat",
    type: "souscription",
    icon: Cat,
    bgGradient: "from-anset-corail-soft to-white",
    iconBg: "bg-anset-corail",
    textColor: "text-anset-corail-dark",
    porteur: "Risque porté par Groupama",
  },
  "moto": {
    name: "Moto, cyclo & scooter",
    type: "souscription",
    icon: Bike,
    bgGradient: "from-anset-moutarde-soft to-white",
    iconBg: "bg-anset-moutarde",
    textColor: "text-anset-moutarde-dark",
    porteur: "Risque porté par la Mutuelle du Motard",
  },
  "moto-pro": {
    name: "Moto pour les pros",
    type: "souscription",
    icon: Bike,
    bgGradient: "from-anset-moutarde-soft to-white",
    iconBg: "bg-anset-moutarde",
    textColor: "text-anset-moutarde-dark",
    porteur: "Risque porté par la Mutuelle du Motard",
  },
  "voyage": {
    name: "Voyage & rapatriement",
    type: "souscription",
    icon: Globe,
    bgGradient: "from-anset-menthe-soft to-white",
    iconBg: "bg-anset-menthe",
    textColor: "text-anset-menthe-dark",
    porteur: "Risque porté par notre partenaire voyage spécialiste",
  },
  "habitation": {
    name: "Assurance habitation",
    type: "souscription",
    icon: Home,
    bgGradient: "from-anset-lilas-soft to-white",
    iconBg: "bg-anset-lilas",
    textColor: "text-anset-lilas-dark",
    porteur: "Risque porté par Acheel",
  },
  "auto": {
    name: "Assurance auto",
    type: "souscription",
    icon: Car,
    bgGradient: "from-anset-menthe-soft to-white",
    iconBg: "bg-anset-menthe",
    textColor: "text-anset-menthe-dark",
    porteur: "Risque porté par Acheel",
  },
  "pno": {
    name: "Propriétaire non occupant (PNO)",
    type: "souscription",
    icon: KeyRound,
    bgGradient: "from-anset-moutarde-soft to-white",
    iconBg: "bg-anset-moutarde",
    textColor: "text-anset-moutarde-dark",
    porteur: "Risque porté par Acheel",
  },
  "sante": {
    name: "Mutuelle santé",
    type: "souscription",
    icon: HeartPulse,
    bgGradient: "from-anset-corail-soft to-white",
    iconBg: "bg-anset-corail",
    textColor: "text-anset-corail-dark",
    porteur: "Risque porté par Acheel",
  },
  "espace-client": {
    name: "Espace client",
    type: "espace",
    icon: User,
    bgGradient: "from-anset-mist to-white",
    iconBg: "bg-anset-blue",
    textColor: "text-anset-blue-dark",
  },
};

const DEFAULT_PRODUCT = PRODUCTS["sante-animale"];

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ produit?: string }>;
}): Promise<Metadata> {
  const { produit } = await searchParams;
  const product = PRODUCTS[produit || ""] || DEFAULT_PRODUCT;
  return {
    title: `${product.name} · Bientôt disponible`,
    description: "Notre tunnel en ligne sera disponible très bientôt. En attendant, nos conseillers ANSET vous accompagnent.",
  };
}

export default async function BientotPage({
  searchParams,
}: {
  searchParams: Promise<{ produit?: string }>;
}) {
  const { produit } = await searchParams;
  const product = PRODUCTS[produit || ""] || DEFAULT_PRODUCT;
  const Icon = product.icon;

  const titleAccent = product.name;
  const titlePrefix =
    product.type === "espace" ? "Votre " : "La souscription ";
  const titleSuffix = " arrive très bientôt.";

  const description =
    product.type === "espace"
      ? "Votre espace personnel pour gérer vos contrats, vos sinistres et vos remboursements est en cours de finalisation. Il sera accessible dans les prochaines semaines."
      : "Notre tunnel de souscription en ligne est en cours de finalisation. Vous pourrez bientôt obtenir votre devis et signer en quelques minutes. En attendant, nous restons à votre disposition.";

  const mailto = `mailto:${CONTACT.email}?subject=Liste d'attente - ${product.name}&body=Bonjour,%0D%0A%0D%0AJe souhaite être prévenu(e) du lancement de ${product.name}.%0D%0A%0D%0AMerci !`;

  return (
    <main className="bg-white">
      <section className={`bg-gradient-to-b ${product.bgGradient} py-16 md:py-24`}>
        <div className="container-anset max-w-3xl text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-corail transition-colors mb-10"
          >
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>

          <div className={`w-20 h-20 mx-auto mb-8 ${product.iconBg} rounded-2xl flex items-center justify-center shadow-premium-lg`}>
            <Icon className="w-10 h-10 text-white" strokeWidth={1.6} aria-hidden="true" />
          </div>

          <p className={`text-[11px] md:text-xs font-black uppercase tracking-[2.5px] ${product.textColor} mb-3`}>
            Lancement imminent
          </p>

          <h1 className="text-3xl md:text-[44px] lg:text-[52px] font-black text-anset-blue tracking-[-0.035em] leading-[1.05] mb-6">
            {titlePrefix}
            <span className="accent">{titleAccent}</span>
            {titleSuffix}
          </h1>

          <p className="text-base md:text-lg text-anset-slate leading-relaxed font-medium max-w-2xl mx-auto mb-2">
            {description}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container-anset max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-anset-mist/30 rounded-2xl p-6 md:p-8 border border-anset-blue/10 flex flex-col">
              <Bell className="w-7 h-7 text-anset-blue mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="text-xl md:text-2xl font-black text-anset-blue mb-2 tracking-tight leading-tight">
                Soyez prévenu du lancement
              </h2>
              <p className="text-sm text-anset-slate font-medium mb-5 leading-relaxed flex-1">
                Laissez-nous votre email, nous vous écrivons dès l'ouverture des souscriptions en ligne.
              </p>
              <Button as="a" href={mailto} variant="secondary" size="md" className="w-full">
                Je veux être prévenu
              </Button>
            </div>

            <div className="bg-anset-mist/30 rounded-2xl p-6 md:p-8 border border-anset-blue/10 flex flex-col">
              <Headphones className="w-7 h-7 text-anset-blue mb-4" strokeWidth={1.5} aria-hidden="true" />
              <h2 className="text-xl md:text-2xl font-black text-anset-blue mb-2 tracking-tight leading-tight">
                Parlez à un conseiller
              </h2>
              <p className="text-sm text-anset-slate font-medium mb-5 leading-relaxed flex-1">
                Nos conseillers sont disponibles dès maintenant pour vous accompagner et préparer votre devis sur mesure.
              </p>
              <Button as="a" href={CALENDLY.sectionHref} variant="ghost" size="md" className="w-full">
                {CALENDLY.label}
              </Button>
            </div>
          </div>

          {product.porteur && (
            <p className="text-[11px] text-anset-slate/60 text-center italic mt-10">
              {product.porteur}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
