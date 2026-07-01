import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { sonnyGothic, inter } from "./fonts";
import "./globals.css";
import { CookieBanner } from "@/components/CookieBanner";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { COMPANY, CONTACT } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ansetassurances.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ANSET Assurances · À vos côtés, à tout moment. Même en France.",
    template: "%s · ANSET Assurances",
  },
  description:
    "ANSET Assurances. 25 ans d'expertise en outre-mer, désormais en métropole. Santé chien-chat avec Groupama, moto-cyclo avec la Mutuelle du Motard, auto, habitation, PNO et santé avec Acheel. Devis 2 minutes, conseillers humains 6j/7, Poé 24h/24.",
  keywords: [
    "assurance chien chat",
    "assurance moto",
    "assurance auto",
    "assurance habitation",
    "assurance PNO",
    "assurance santé",
    "assurance outre-mer",
    "ANSET",
    "Coverseas",
    "Groupama Protection Juridique",
    "Mutuelle du Motard",
    "Acheel",
  ],
  authors: [{ name: "COVERSEAS" }],
  creator: "COVERSEAS",
  publisher: "COVERSEAS",
  category: "Insurance",
  openGraph: {
    title: "ANSET Assurances · À vos côtés, à tout moment.",
    description:
      "25 ans d'expertise en outre-mer, désormais en métropole. Polynésie, Réunion, Nouvelle-Calédonie et partout en France.",
    url: SITE_URL,
    siteName: "ANSET Assurances",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ANSET Assurances · À vos côtés, à tout moment.",
    description:
      "25 ans d'expertise en outre-mer, désormais en métropole. Conseillers 6j/7, Poé 24h/24.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: false,
    address: true,
    email: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  name: "ANSET Assurances",
  alternateName: "COVERSEAS",
  legalName: "COVERSEAS SASU",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-anset.png`,
  image: `${SITE_URL}/opengraph-image`,
  description:
    "Courtier en assurances. Santé animale, moto, auto, habitation. Une marque de COVERSEAS SASU, immatriculée à l'ORIAS sous le numéro 26000597.",
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address.street,
    postalCode: COMPANY.address.zip,
    addressLocality: COMPANY.address.city,
    addressCountry: "FR",
  },
  email: CONTACT.email,
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "Polynésie française" },
    { "@type": "AdministrativeArea", name: "Nouvelle-Calédonie" },
    { "@type": "AdministrativeArea", name: "La Réunion" },
    { "@type": "AdministrativeArea", name: "Guadeloupe" },
    { "@type": "AdministrativeArea", name: "Martinique" },
  ],
  founder: { "@type": "Person", name: COMPANY.president },
  identifier: [
    { "@type": "PropertyValue", name: "SIREN", value: COMPANY.siren },
    { "@type": "PropertyValue", name: "ORIAS", value: COMPANY.oriasNumber },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sonnyGothic.variable} ${inter.variable}`}>
      <body className="bg-anset-cream text-anset-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />        <CookieBanner />
        <StickyMobileCTA />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
