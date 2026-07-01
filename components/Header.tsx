"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarClock, User, Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CALENDLY, NAV_STRUCTURE, URLS } from "@/lib/constants";

const linkCls = "nav-link-anim text-[12px] font-semibold text-anset-blue hover:text-anset-corail transition-colors duration-200";
const rdvCls = "hidden md:flex items-center gap-1.5 text-[12px] font-bold text-anset-blue hover:text-anset-corail transition-colors duration-200 pl-3 border-l border-anset-blue/15";
const espaceCls = "hidden md:flex items-center gap-1.5 text-[12px] font-bold text-anset-blue px-3.5 py-2 border-[1.5px] border-anset-blue/20 rounded-md hover:border-anset-blue hover:bg-anset-blue hover:text-white transition-all duration-200";
const dropdownPanelCls = "bg-white rounded-xl shadow-[0_8px_32px_rgba(16,46,93,0.12)] border border-anset-blue/10 p-3 min-w-[280px]";
const dropdownItemCls = "block px-3 py-2.5 rounded-lg hover:bg-anset-mist/60 transition-colors";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const headerCls = scrolled
    ? "sticky top-0 z-40 transition-all duration-300 bg-white/85 backdrop-blur-xl border-b border-anset-blue/10 shadow-[0_4px_24px_rgba(16,46,93,0.08)]"
    : "sticky top-0 z-40 transition-all duration-300 bg-white border-b border-transparent";

  function closeMobile() {
    setMobileOpen(false);
    setExpanded(null);
  }

  return (
    <>
      <header className={headerCls}>
        <div className="container-anset flex items-center justify-between py-4 md:py-5">
          <Link href="/" aria-label="Accueil ANSET Assurances" className="hover:opacity-85 transition-opacity duration-200">
            <Logo size="md" />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {NAV_STRUCTURE.map((item) => {
              if (!item.submenu) {
                return (
                  <Link key={item.label} href={item.href!} className={linkCls}>
                    {item.label}
                  </Link>
                );
              }
              return (
                <div key={item.label} className="relative group">
                  <button type="button" className={linkCls + " flex items-center gap-1"}>
                    {item.label}
                    <ChevronDown className="w-3 h-3" strokeWidth={2.5} aria-hidden="true" />
                  </button>
                  <div className="absolute top-full left-0 pt-2 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-50">
                    <div className={dropdownPanelCls}>
                      {item.submenu.map((sub) => (
                        <Link key={sub.href} href={sub.href} className={dropdownItemCls}>
                          <div className="text-[13px] font-bold text-anset-blue">{sub.label}</div>
                          {sub.description && (
                            <div className="text-[11px] text-anset-slate font-medium mt-0.5">{sub.description}</div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5">
            <Link href={CALENDLY.sectionHref} className={rdvCls}>
              <CalendarClock className="h-4 w-4" aria-hidden="true" />
              {CALENDLY.label}
            </Link>
            <a href={URLS.espaceClient} className={espaceCls}>
              <User className="h-4 w-4" aria-hidden="true" />
              Mon espace
            </a>
            <Button as="a" href={URLS.souscriptionSanteAnimale} variant="secondary" size="md">
              Mon devis
            </Button>
            <button type="button" onClick={() => setMobileOpen(true)} className="lg:hidden ml-1 p-2 -mr-2 text-anset-blue" aria-label="Ouvrir le menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-anset-blue/40 backdrop-blur-sm" onClick={closeMobile} />
          <div className="absolute top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-anset-blue/10">
              <Logo size="sm" />
              <button onClick={closeMobile} className="p-2 text-anset-blue" aria-label="Fermer le menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            <nav className="flex-1 overflow-y-auto p-4 space-y-1">
              {NAV_STRUCTURE.map((item) => {
                if (!item.submenu) {
                  return (
                    <Link key={item.label} href={item.href!} onClick={closeMobile} className="block px-4 py-3 text-sm font-bold text-anset-blue hover:bg-anset-mist rounded-lg">
                      {item.label}
                    </Link>
                  );
                }
                const isExpanded = expanded === item.label;
                return (
                  <div key={item.label}>
                    <button type="button" onClick={() => setExpanded(isExpanded ? null : item.label)} className="w-full flex items-center justify-between px-4 py-3 text-sm font-bold text-anset-blue hover:bg-anset-mist rounded-lg">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} strokeWidth={2.5} aria-hidden="true" />
                    </button>
                    {isExpanded && (
                      <div className="ml-4 mt-1 mb-2 space-y-1 border-l-2 border-anset-blue/10 pl-3">
                        {item.submenu.map((sub) => (
                          <Link key={sub.href} href={sub.href} onClick={closeMobile} className="block px-3 py-2 rounded-lg hover:bg-anset-mist/60">
                            <div className="text-[13px] font-bold text-anset-blue">{sub.label}</div>
                            {sub.description && (
                              <div className="text-[11px] text-anset-slate font-medium mt-0.5">{sub.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>
            <div className="border-t border-anset-blue/10 p-4 space-y-2">
              <Link href={CALENDLY.sectionHref} onClick={closeMobile} className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-anset-blue">
                <CalendarClock className="w-4 h-4" aria-hidden="true" />
                {CALENDLY.label}
              </Link>
              <a href={URLS.espaceClient} className="flex items-center gap-2 px-4 py-2.5 text-sm font-bold text-anset-blue border border-anset-blue/20 rounded-lg">
                <User className="w-4 h-4" aria-hidden="true" />
                Mon espace
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}