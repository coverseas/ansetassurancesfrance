"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, User } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT, NAV_LINKS, URLS } from "@/lib/constants";

const linkCls = "text-[11px] font-semibold text-anset-blue hover:text-anset-corail transition-colors";
const phoneCls = "hidden md:flex items-center gap-1.5 text-[11px] font-bold text-anset-blue hover:text-anset-corail transition-colors pl-3 border-l border-anset-blue/15";
const espaceCls = "hidden md:flex items-center gap-1.5 text-[11px] font-bold text-anset-blue px-3 py-1.5 border-[1.5px] border-anset-blue/20 rounded-md hover:border-anset-blue transition-colors";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerCls = scrolled
    ? "sticky top-0 z-40 transition-all bg-anset-cream border-b border-anset-blue/10 shadow-sm"
    : "sticky top-0 z-40 transition-all bg-anset-cream border-b border-transparent";

  return (
    <header className={headerCls}>
      <div className="container-anset flex items-center justify-between py-3.5 md:py-4">
        <Link href="/" aria-label="Accueil ANSET Assurances">
          <Logo size="md" />
        </Link>
        <nav className="hidden lg:flex items-center gap-5">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkCls}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a href={CONTACT.phoneHref} className={phoneCls}>
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
          <a href={URLS.espaceClient} className={espaceCls}>
            <User className="h-3.5 w-3.5" aria-hidden="true" />
            Mon espace
          </a>
          <Button as="a" href={URLS.souscriptionSanteAnimale} variant="secondary" size="md">
            Mon devis
          </Button>
        </div>
      </div>
    </header>
  );
}
