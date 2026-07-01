/**
 * Constantes globales du site ANSET ASSURANCES France
 * Une seule source de vérité pour le contenu et la conformité légale.
 */

export const COMPANY = {
  legalName: "COVERSEAS",
  legalForm: "SASU - Société par actions simplifiée à associé unique",
  capital: "500 euros",
  siren: "993355486",
  rcs: "PARIS 993355486",
  vatNumber: "Non assujetti (activité d'assurance, art. 261 C, 2° du CGI)",
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
  email: "hello@ansetassurances.com",
  emailHref: "mailto:hello@ansetassurances.com",
  emailLegal: "contact@coverseas.fr",
  emailLegalHref: "mailto:contact@coverseas.fr",
  emailReclamations: "contact@coverseas.fr",
  emailReclamationsHref: "mailto:contact@coverseas.fr",
  emailDpo: "dpo@coverseas.fr",
  emailDpoHref: "mailto:dpo@coverseas.fr",
  hours: "Lundi au samedi · 9h-19h",
  hoursDetailed: [
    { day: "Lundi - Vendredi", time: "9h - 19h" },
    { day: "Samedi", time: "9h - 13h" },
    { day: "Dimanche", time: "Fermé" },
  ],
} as const;

export const CALENDLY = {
  /**
   * Lien de réservation Calendly. Alimente le calendrier intégré sur la page /contact.
   */
  url: "https://calendly.com/contact-coverseas/30min",
  /** Ancre de la section calendrier sur la page contact — cible de tous les CTA "Prendre rendez-vous". */
  sectionHref: "/contact#rendez-vous",
  label: "Prendre rendez-vous",
} as const;

export const HOSTING = {
  name: "Vercel Inc.",
  address: "440 N Barranca Ave #4133, Covina, CA 91723, United States",
  website: "https://vercel.com",
  euRegion: "Région Vercel Paris (CDG)",
} as const;

export const URLS = {
  souscriptionSanteAnimale: "/produits/sante-chien-chat#souscription",
  souscriptionMoto: "/bientot?produit=moto",
  souscriptionMotoPro: "/bientot?produit=moto-pro",
  souscriptionHabitation: "/bientot?produit=habitation",
  souscriptionAuto: "/bientot?produit=auto",
  souscriptionPNO: "/bientot?produit=pno",
  souscriptionSante: "/bientot?produit=sante",
  espaceClient: "/bientot?produit=espace-client",
} as const;

export const TRUSTPILOT = {
  rating: "",
  count: 0,
  name: "Trustpilot",
} as const;

/**
 * Charte couleur par catégorie d'assurance ANSET.
 * Chaque produit doit utiliser la couleur de sa catégorie (champ `color`).
 * Le lilas (violet) est réservé à l'information et n'est jamais une catégorie produit.
 */
export const CATEGORY_COLORS = {
  biens: "moutarde", // Auto, habitation, PNO, moto, santé animale
  personne: "corail", // Santé / mutuelle individuelle
  pro: "blue", // Offres professionnelles
  epargne: "menthe", // Épargne (vert)
  information: "lilas", // Information uniquement — pas un produit
} as const;

export const PRODUCTS = [
  {
    slug: "sante-chien-chat",
    universe: "biens",
    name: "Santé chien & chat",
    shortName: "Santé animale",
    category: "MES BIENS",
    color: "moutarde",
    icon: "cat",
    porteurMention: "Risque porté par Groupama PJ",
    audience: "Particuliers",
    priceFrom: 12,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description: "Pour votre compagnon, sans paperasse.",
    features: [
      "Consultations, vaccins, chirurgie",
      "Souscription 100% en ligne",
      "Remboursement en 48 heures",
    ],
    onlineSubscription: true,
    comingSoon: false,
  },
  {
    slug: "moto-cyclo",
    universe: "biens",
    name: "Moto, cyclo, scooter",
    shortName: "2-roues",
    category: "MES BIENS",
    color: "moutarde",
    icon: "motorbike",
    porteurMention: "Risque porté par la Mutuelle du Motard",
    audience: "Particuliers & pros",
    priceFrom: 18,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description: "Particuliers ou pros, on s'occupe de tout.",
    features: [
      "Tous risques, RC, vol & équipement",
      "Avec conseiller dédié",
      "Spécial livreurs & coursiers",
    ],
    onlineSubscription: false,
    comingSoon: false,
  },
  {
    slug: "auto",
    universe: "biens",
    name: "Assurance auto",
    shortName: "Auto",
    category: "MES BIENS",
    color: "moutarde",
    icon: "car",
    porteurMention: "Risque porté par Acheel",
    audience: "Particuliers",
    priceFrom: 0,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description: "La bonne formule pour votre véhicule, au juste prix.",
    features: [
      "Au tiers, tiers + ou tous risques",
      "Vol, incendie, bris de glace",
      "Assistance 0 km",
    ],
    onlineSubscription: false,
    comingSoon: true,
  },
  {
    slug: "habitation",
    universe: "biens",
    name: "Assurance habitation",
    shortName: "Habitation",
    category: "MON LOGEMENT",
    color: "moutarde",
    icon: "home",
    porteurMention: "Risque porté par Acheel",
    audience: "Particuliers",
    priceFrom: 0,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description: "Votre logement et vos biens, bien protégés.",
    features: [
      "Dégât des eaux, incendie, vol",
      "Locataire ou propriétaire",
      "Responsabilité civile incluse",
    ],
    onlineSubscription: false,
    comingSoon: true,
  },
  {
    slug: "pno",
    universe: "biens",
    name: "Propriétaire non occupant",
    shortName: "PNO",
    category: "MON LOGEMENT",
    color: "moutarde",
    icon: "key",
    porteurMention: "Risque porté par Acheel",
    audience: "Propriétaires bailleurs",
    priceFrom: 0,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description: "Votre bien loué protégé, même vide.",
    features: [
      "Pour propriétaires bailleurs",
      "Bien loué ou vacant couvert",
      "Obligatoire en copropriété",
    ],
    onlineSubscription: false,
    comingSoon: true,
  },
  {
    slug: "sante",
    universe: "famille",
    name: "Mutuelle santé",
    shortName: "Santé",
    category: "MA SANTÉ",
    color: "corail",
    icon: "heart-pulse",
    porteurMention: "Risque porté par Acheel",
    audience: "Particuliers & familles",
    priceFrom: 0,
    priceCurrency: "€",
    pricePeriod: "/mois",
    description: "Vous et votre famille, bien remboursés.",
    features: [
      "Soins, hospitalisation, optique, dentaire",
      "Tiers payant",
      "Téléconsultation incluse",
    ],
    onlineSubscription: false,
    comingSoon: true,
  },
] as const;

export const ROADMAP = [
  {
    slug: "emprunteur",
    name: "Assurance emprunteur",
    icon: "banknote",
    universe: "famille" as const,
    status: "Très bientôt",
  },
  {
    slug: "auto",
    name: "Assurance auto",
    icon: "car",
    universe: "biens" as const,
    status: "Automne 2026",
  },
  {
    slug: "habitation",
    name: "Habitation",
    icon: "home",
    universe: "biens" as const,
    status: "Début 2027",
  },
] as const;

export const STATS = [
  {
    number: "25",
    suffix: "+",
    suffixColor: "corail" as const,
    label: "Années d'expertise",
    sub: "en outre-mer et métropole",
  },
  {
    number: "4",
    suffix: "",
    suffixColor: "corail" as const,
    label: "Territoires",
    sub: "Polynésie Fr., NC, Réunion, France",
  },
  {
    number: "6",
    suffix: "j/7",
    suffixColor: "corail" as const,
    label: "Conseillers humains",
    sub: "Experts de l'outre-mer",
  },
  {
    number: "24",
    suffix: "/24",
    suffixColor: "corail" as const,
    label: "Poé, agente IA",
    sub: "Pour ne jamais vous laisser seul",
  },
] as const;

export const TEAM_MEMBERS = [
  { name: "Vaiana", role: "Conseillère outre-mer" },
  { name: "Patrick", role: "Conseiller moto pro" },
  { name: "Léa", role: "Conseillère auto & habitation" },
] as const;

export const HOWTO_STEPS = [
  {
    num: "01",
    color: "corail" as const,
    title: "Vous nous parlez de vous",
    description: "Quelques questions sur ce que vous voulez assurer. Pas de jargon, pas d'inutile.",
    meta: "2 minutes en ligne",
    icon: "clock",
  },
  {
    num: "02",
    color: "moutarde" as const,
    title: "On vous fait une offre claire",
    description: "Votre tarif, vos garanties, vos exclusions. Vous signez en ligne ou avec un conseiller.",
    meta: "Tarif transparent",
    icon: "file-text",
  },
  {
    num: "03",
    color: "menthe" as const,
    title: "On reste à vos côtés",
    description: "Poé 24h/24, conseillers 6j/7. Sinistre, attestation, modification — jamais seul.",
    meta: "À tout moment",
    icon: "heart-handshake",
  },
] as const;

export const SERVICE_PILLARS = {
  human: {
    tag: "Conseillers chaleureux",
    title: "Des conseillers qui",
    accent: "connaissent l'outre-mer",
    description: "Pas un call center anonyme. Des conseillers qui parlent vos codes, comprennent votre histoire, vous reconnaissent quand vous rappelez.",
    features: ["9h-19h, samedi inclus", "Conseiller dédié"],
  },
  ai: {
    tag: "Poé · Agente IA",
    title: "Une IA qui connaît",
    accent: "tous nos contrats",
    description: "Poé connaît nos contrats et garanties dans le détail. Elle vous renseigne, prépare votre demande de devis avec un conseiller, et reste à votre disposition à toute heure.",
    features: ["24h/24, 7j/7", "Mise en relation conseiller"],
    sample: {
      name: "Poé · ANSET",
      status: "En ligne · Répond en quelques secondes",
      messages: [
        { from: "bot", text: "Bonjour, je suis Poé 👋 En quoi puis-je vous aider ?" },
        { from: "user", text: "Je voudrais assurer mon chien" },
        { from: "bot", text: "Formule santé chien dès 12€/mois. Voulez-vous un devis ?" },
        { from: "user", text: "Oui s'il vous plaît" },
        { from: "bot", text: "Je transmets à un conseiller qui vous rappelle sous 2h ☎" },
      ],
      quickReplies: ["Merci !", "Autre question"],
    },
  },
} as const;

export const TESTIMONIALS = [
  {
    quote: "Originaire de Polynésie Française, je connaissais ANSET depuis longtemps. Tellement heureuse qu'ils arrivent en métropole. La conseillère qui m'a accompagnée comprenait mon histoire, ça change tout.",
    name: "Vaiana T.",
    location: "Nanterre (92)",
    avatarTone: "medium" as const,
    featured: true,
  },
  {
    quote: "Devis fait en 3 minutes, conseillère super sympa. Mon Léo est bien couvert et j'ai économisé 18€/mois.",
    name: "Sandrine R.",
    location: "Saint-Denis (93)",
    avatarTone: "light" as const,
    featured: false,
  },
  {
    quote: "Assurance habitation et auto regroupées chez ANSET. Un seul interlocuteur qui connaît mon dossier, et un tarif plus juste qu'avant.",
    name: "Maeva K.",
    location: "Bobigny (93)",
    avatarTone: "warm" as const,
    featured: false,
  },
] as const;

export const HISTORY_MILESTONES = [
  {
    year: "2000",
    location: "Polynésie Française",
    event: "Création d'ANSET en Polynésie",
    accent: "ciel" as const,
  },
  {
    year: "2012",
    location: "La Réunion",
    event: "Implantation BEACOM dans l'océan Indien",
    accent: "corail" as const,
  },
  {
    year: "2023",
    location: "Nouvelle-Calédonie",
    event: "Ouverture en Nouvelle-Calédonie",
    accent: "menthe" as const,
  },
  {
    year: "2026",
    location: "Métropole",
    event: "Lancement d'ANSET ASSURANCES France",
    accent: "moutarde" as const,
  },
] as const;
export const NAV_STRUCTURE: Array<{
  label: string;
  href?: string;
  submenu?: Array<{ label: string; href: string; description?: string }>;
}> = [
  {
    label: "Nos offres",
    submenu: [
      { label: "Santé chien-chat", href: "/produits/sante-chien-chat", description: "Avec Groupama PJ" },
      { label: "Moto et cyclo", href: "/produits/moto-cyclo", description: "Avec Mutuelle du Motard" },
      { label: "Assurance auto", href: "/produits/auto", description: "Avec Acheel" },
      { label: "Assurance habitation", href: "/produits/habitation", description: "Avec Acheel" },
      { label: "Propriétaire non occupant (PNO)", href: "/produits/pno", description: "Avec Acheel" },
      { label: "Mutuelle santé", href: "/produits/sante", description: "Avec Acheel" },
    ],
  },
  {
    label: "Mes démarches",
    submenu: [
      { label: "Nous contacter", href: "/contact", description: "Rendez-vous, email, formulaire" },
      { label: "Dépôt de prise en charge santé animale", href: "/sinistre/sante-animale", description: "Remboursement de frais vétérinaires" },
      { label: "Faire une réclamation", href: "/contact#formulaire", description: "Mécontentement contractuel" },
      { label: "Résilier mon contrat", href: "/resiliation", description: "Procédure 3 clics" },
    ],
  },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Notre histoire", href: "/notre-histoire" },
];
export const NAV_LINKS = [
  { label: "Nos offres", href: "/#offres" },
  { label: "Comment ça marche", href: "/comment-ca-marche" },
  { label: "Le service ANSET", href: "/#service" },
  { label: "Notre histoire", href: "/notre-histoire" },
] as const;

export const TAGLINE = "À VOS CÔTÉS · À TOUT MOMENT";