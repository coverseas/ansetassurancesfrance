import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { sonnyGothic, inter } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ANSET Assurances · À vos côtés, à tout moment. Même en France.",
    template: "%s · ANSET Assurances",
  },
  description:
    "ANSET Assurances. 25 ans d'expertise en outre-mer, désormais en métropole. Santé chien-chat avec Groupama, moto-cyclo avec la Mutuelle du Motard, voyage et rapatriement. Devis 2 minutes, conseillers humains 6j/7, Ana 24h/24.",
  metadataBase: new URL("https://ansetassurances.com"),
  openGraph: {
    title: "ANSET Assurances · À vos côtés, à tout moment.",
    description: "25 ans d'expertise en outre-mer, désormais en métropole. Polynésie, Réunion, Nouvelle-Calédonie et partout en France.",
    url: "https://ansetassurances.com",
    siteName: "ANSET Assurances",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${sonnyGothic.variable} ${inter.variable}`}>
      <body className="bg-anset-cream text-anset-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
