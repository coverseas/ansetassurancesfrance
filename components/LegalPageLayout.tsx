import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface LegalPageLayoutProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, subtitle, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <main className="bg-white">
      <section className="bg-gradient-to-b from-anset-mist to-white py-12 md:py-16 border-b border-anset-blue/10">
        <div className="container-anset max-w-4xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-[12px] font-bold text-anset-slate hover:text-anset-corail transition-colors mb-6">
            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
            Retour à l'accueil
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-anset-blue tracking-tight leading-tight mb-3">
            {title}
          </h1>
          {subtitle && (
            <p className="text-base md:text-lg text-anset-slate font-medium mb-2">
              {subtitle}
            </p>
          )}
          <p className="text-xs text-anset-slate/60 font-bold uppercase tracking-wider">
            Dernière mise à jour : {lastUpdated}
          </p>
        </div>
      </section>
      <article className="container-anset max-w-3xl py-12 md:py-16 legal-prose">
        {children}
      </article>
    </main>
  );
}
