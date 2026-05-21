"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const wrapperCls = "md:hidden fixed bottom-0 left-0 right-0 z-40 p-3 transition-transform duration-300";
const linkCls = "flex items-center justify-center gap-2 bg-anset-blue text-white text-center font-black text-base py-3.5 rounded-2xl shadow-premium-lg active:scale-[0.98] transition-transform";

export function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`${wrapperCls} ${visible ? "translate-y-0" : "translate-y-full"}`}>
      <Link href="/" className={linkCls}>
        Démarrer mon devis
        <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
      </Link>
    </div>
  );
}
