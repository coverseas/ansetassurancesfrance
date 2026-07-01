"use client";

import { useEffect } from "react";
import { CALENDLY } from "@/lib/constants";

const WIDGET_SRC = "https://assets.calendly.com/assets/external/widget.js";

/**
 * Calendrier de prise de rendez-vous Calendly, intégré en inline.
 * Le script officiel scanne les éléments `.calendly-inline-widget`
 * et injecte l'iframe du calendrier au chargement.
 * L'URL de réservation est configurée dans lib/constants.ts (CALENDLY.url).
 */
export default function CalendlyEmbed({ className = "" }: { className?: string }) {
  useEffect(() => {
    if (document.querySelector(`script[src="${WIDGET_SRC}"]`)) return;
    const script = document.createElement("script");
    script.src = WIDGET_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className={`calendly-inline-widget rounded-2xl overflow-hidden border border-anset-blue/10 shadow-premium-sm bg-white ${className}`}
      data-url={CALENDLY.url}
      style={{ minWidth: "320px", height: "700px" }}
    />
  );
}
