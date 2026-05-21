"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT, NAV_LINKS, URLS } from "@/lib/constants";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 transition-all duration-200 bg-white", scrolled ? "border-b border-anset-mist shadow-sm" : "border-b border-transparent")}>
      <div className="container-anset flex items-center justify-between py-3 md:py-4">
        <Link href="/" aria-label="Accueil ANSET Assurances">
          <Logo size="md" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-anset-blue hover:text-anset-corail transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={CONTACT.phoneHref} className="hidden md:flex items-center gap-1.5 text-sm font-bold text-anset-blue hover:text-anset-corail transition-colors">
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
          <Button as="a" href={URLS.souscriptionSanteAnimale} variant="primary" size="md">
            Mon devis
          </Button>
        </div>
      </div>
    </header>
  );
}