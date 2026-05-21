/**
 * Constantes globales du site ANSET ASSURANCES France
 * Centralisation des informations légales, contacts, et configuration
 */

export const COMPANY = {
  legalName: "COVERSEAS",
  legalForm: "SASU - Société par actions simplifiée à associé unique",
  capital: "1 000 euros", // à confirmer
  siren: "993355486",
  rcs: "PARIS 993355486",
  vatNumber: "FR à compléter",
  oriasNumber: "26000597",
  oriasCategory: "COA — Courtier d'assurance ou de réassurance",
  oriasRegistrationDate: "23/01/2026",
  oriasValidityUntil: "28/02/2027",
  address: {
    street: "6 rue d'Armaille",
    zip: "75017",
    city: "Paris",
    full: "6 rue d'Armaille, 75017 Paris",
  },
  president: "Geoffrey Guérin",
  directeurPublication: "Geoffrey Guérin",
  brandName: "ANSET ASSURANCES",
  insurer: "Liberty Mutual Insurance Europe SE",
  insurerAgent: "Liberty Specialty Markets Europe Sarl (LSME)",
  contractName: "Evolution Broker",
  contractNumber: "MRCMBR2202511FR00000000068917A00",
  financialGuarantor: "Liberty Mutual Insurance Europe SE",
  financialGuarantorAgent: "Liberty Specialty Markets Europe Sarl (LSME)",
  financialGuarantorContract: "MRCMBR2202511FR00000000068917A00",
  acpr: {
    name: "Autorité de Contrôle Prudentiel et de Résolution (ACPR)",
    address: "4 place de Budapest, CS 92459, 75436 Paris Cedex 09",
    website: "https://acpr.banque-france.fr",
  },
  mediator: {
    name: "La Médiation de l'Assurance",
    address: "TSA 50110, 75441 Paris Cedex 09",
    website: "https://www.mediation-assurance.org",
  },
  cnil: {
    name: "Commission Nationale de l'Informatique et des Libertés (CNIL)",
    address: "3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07",
    phone: "01 53 73 22 22",
    website: "https://www.cnil.fr",
  },
} as const;

export const CONTACT = {
  phone: "09 75 12 34 56",
  phoneDisplay: "09 75 12 34 56",
  phoneHref: "tel:+33975123456",
  email: "bonjour@ansetassurances.com",
  emailHref: "mailto:bonjour@ansetassurances.com",
  emailReclamations: "reclamations@ansetassurances.com",
  emailReclamationsHref: "mailto:reclamations@ansetassurances.com",
  emailDpo: "rgpd@ansetassurances.com",
  emailDpoHref: "mailto:rgpd@ansetassurances.com",
  hours: "Lundi au samedi · 9h-19h",
  hoursDetailed: [
    { day: "Lundi - Vendredi", time: "9h - 19h" },
    { day: "Samedi", time: "9h - 13h" },
    { day: "Dimanche", time: "Fermé" },
  ],
} as const;

export const HOSTING = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723, United States",
  website: "https://vercel.com",
  euRegion: "Région Vercel Paris (CDG)",
} as const;

export const URLS = {
  souscriptionSanteAnimale: "https://souscription.ansetassurances.com/sante-animale",
  souscriptionMoto: "https://souscription.ansetassurances.com/moto",
  souscriptionMotoPro: "https://souscription.ansetassurances.com/moto-pro",
  espaceClient: "https://espace.ansetassurances.com",
} as const;

export const PRODUCTS = [
  {
    slug: "sante-chien-chat",
    universe: "famille" as const,
    name: "Santé chien & chat",
    shortName: "Santé animale",
    category: "MA FAMILLE",
    color: "corail" as const,
    icon: "paw",
    porteur: "Groupama",
    audience: "Particuliers",
    priceFrom: 12,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description:
      "Consultations, vaccins, chirurgie, hospitalisation. Remboursements rapides sans paperasse.",
    available: true,
    launchDate: "Disponible",
  },
  {
    slug: "moto-cyclo",
    universe: "biens" as const,
    name: "Moto, cyclo, scooter",
    shortName: "2-roues",
    category: "MES BIENS",
    color: "moutarde" as const,
    icon: "motorbike",
    porteur: "Mutuelle du Motard",
    audience: "Particuliers & pros",
    priceFrom: 18,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description:
      "Formules tous risques, RC, vol, équipements. Pour usage perso ou pour les livreurs et coursiers pros.",
    available: true,
    launchDate: "Disponible",
  },
] as const;

export const ROADMAP = [
  { slug: "auto", name: "Assurance auto", icon: "car", universe: "biens" as const, status: "Automne 2026" },
  { slug: "habitation", name: "Habitation", icon: "home", universe: "biens" as const, status: "Début 2027" },
] as const;

export const HISTORY_MILESTONES = [
  { year: "2000", location: "Tahiti", event: "Création d'ANSET en Polynésie française", accent: "ciel" as const },
  { year: "2010", location: "La Réunion", event: "Implantation BEACOM dans l'océan Indien", accent: "corail" as const },
  { year: "2024", location: "Nouméa", event: "Ouverture en Nouvelle-Calédonie", accent: "menthe" as const },
  { year: "2026", location: "Métropole", event: "Lancement d'ANSET ASSURANCES France", accent: "moutarde" as const },
] as const;

export const TRUST_PROMISES = [
  { icon: "bolt", label: "Devis 2 minutes", sub: "Souscription 100 % en ligne", color: "moutarde" as const },
  { icon: "phone-call", label: "Conseiller humain", sub: "Joignable 9h-19h, samedi inclus", color: "corail" as const },
  { icon: "smile", label: "Paiement souple", sub: "Mensualisé sans frais", color: "menthe" as const },
  { icon: "shield", label: "Sans engagement", sub: "Résiliation libre, loi Lemoine", color: "ciel" as const },
] as const;

export const NAV_LINKS = [
  { label: "Nos offres", href: "/#offres" },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Notre histoire", href: "/notre-histoire" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const TAGLINE = "À VOS CÔTÉS, À TOUT MOMENT";