import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ANSET Assurances · L'assurance qui parle vos codes",
    template: "%s · ANSET Assurances",
  },
  description:
    "ANSET Assurances. 25 ans d'expertise en outre-mer, désormais en métropole. Santé chien-chat avec Groupama, moto-cyclo avec la Mutuelle du Motard. Devis 2 minutes, conseiller humain, sans engagement.",
  metadataBase: new URL("https://ansetassurances.com"),
  openGraph: {
    title: "ANSET Assurances · L'assurance qui parle vos codes",
    description: "25 ans d'expertise en outre-mer, désormais en métropole.",
    url: "https://ansetassurances.com",
    siteName: "ANSET Assurances",
    locale: "fr_FR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="bg-white text-anset-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
