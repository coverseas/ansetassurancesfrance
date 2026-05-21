"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Phone, User } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CONTACT, NAV_LINKS, URLS } from "@/lib/constants";

const linkCls = "nav-link-anim text-[12px] font-semibold text-anset-blue hover:text-anset-corail transition-colors duration-200";
const phoneCls = "hidden md:flex items-center gap-1.5 text-[12px] font-bold text-anset-blue hover:text-anset-corail transition-colors duration-200 pl-3 border-l border-anset-blue/15";
const espaceCls = "hidden md:flex items-center gap-1.5 text-[12px] font-bold text-anset-blue px-3.5 py-2 border-[1.5px] border-anset-blue/20 rounded-md hover:border-anset-blue hover:bg-anset-blue hover:text-white transition-all duration-200";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerCls = scrolled
    ? "sticky top-0 z-40 transition-all duration-300 bg-white/85 backdrop-blur-xl border-b border-anset-blue/10 shadow-[0_4px_24px_rgba(16,46,93,0.08)]"
    : "sticky top-0 z-40 transition-all duration-300 bg-white border-b border-transparent";

  return (
    <header className={headerCls}>
      <div className="container-anset flex items-center justify-between py-4 md:py-5">
        <Link href="/" aria-label="Accueil ANSET Assurances" className="hover:opacity-85 transition-opacity duration-200">
          <Logo size="md" />
        </Link>
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={linkCls}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2.5">
          <a href={CONTACT.phoneHref} className={phoneCls}>
            <Phone className="h-4 w-4" aria-hidden="true" />
            {CONTACT.phoneDisplay}
          </a>
          <a href={URLS.espaceClient} className={espaceCls}>
            <User className="h-4 w-4" aria-hidden="true" />
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
