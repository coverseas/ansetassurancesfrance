"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

const COOKIE_KEY = "anset-cookie-consent";

const containerCls = "fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none";
const cardCls = "max-w-3xl mx-auto bg-white rounded-2xl border-2 border-anset-blue/15 shadow-premium-lg p-5 md:p-6 pointer-events-auto";
const refuseBtnCls = "text-xs md:text-sm font-black px-4 py-2.5 rounded-xl border-2 border-anset-blue/20 text-anset-blue hover:bg-anset-blue/5 transition-colors";
const acceptBtnCls = "text-xs md:text-sm font-black px-4 py-2.5 rounded-xl bg-anset-blue text-white hover:bg-anset-blue-dark transition-colors";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (!consent) setShow(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_KEY, "all");
    setShow(false);
  };

  const handleRefuse = () => {
    localStorage.setItem(COOKIE_KEY, "essential");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className={containerCls}>
      <div className={cardCls}>
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-anset-corail-soft text-anset-corail-dark w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0">
            <Cookie className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
          </div>
          <div className="flex-1">
            <h2 className="text-sm md:text-base font-black text-anset-blue tracking-tight mb-1">
              Vos préférences cookies
            </h2>
            <p className="text-xs md:text-sm text-anset-slate font-medium leading-relaxed">
              Nous utilisons des cookies essentiels au fonctionnement du site, ainsi que des cookies d'analyse pour comprendre comment vous l'utilisez. Vous pouvez accepter, refuser ou{" "}
              <a href="/cookies" className="text-anset-blue font-black underline hover:text-anset-corail">
                en savoir plus
              </a>.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 justify-end">
          <button onClick={handleRefuse} className={refuseBtnCls}>
            Tout refuser
          </button>
          <button onClick={handleAccept} className={acceptBtnCls}>
            Tout accepter
          </button>
        </div>
      </div>
    </div>
  );
}
