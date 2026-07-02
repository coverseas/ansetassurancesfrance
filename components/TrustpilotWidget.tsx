"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { TRUSTPILOT } from "@/lib/constants";

/**
 * Widget TrustBox Trustpilot (avis réels).
 * Le Business Unit ID vient de TRUSTPILOT.businessUnitId (défaut compte ANSET,
 * surchargeable via NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID).
 */
const BUSINESS_UNIT_ID = TRUSTPILOT.businessUnitId;

// Templates TrustBox standards Trustpilot.
const TEMPLATES = {
  carousel: "53aa8912dec7e10d38f59f36",
  grid: "539adbd6dec7e10e686debee",
  micro: "5419b6ffb0d04a076446a9af",
} as const;

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (el: HTMLElement | null, forceReload?: boolean) => void;
    };
  }
}

export function TrustpilotWidget({
  template = "carousel",
  height = "160px",
  theme = "light",
}: {
  template?: keyof typeof TEMPLATES;
  height?: string;
  theme?: "light" | "dark";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  if (!BUSINESS_UNIT_ID) return null;

  return (
    <>
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          if (ref.current) window.Trustpilot?.loadFromElement(ref.current, true);
        }}
      />
      <div
        ref={ref}
        className="trustpilot-widget"
        data-locale="fr-FR"
        data-template-id={TEMPLATES[template]}
        data-businessunit-id={BUSINESS_UNIT_ID}
        data-style-height={height}
        data-style-width="100%"
        data-theme={theme}
      >
        <a href={TRUSTPILOT.reviewUrl} target="_blank" rel="noopener noreferrer">
          Voir nos avis sur Trustpilot
        </a>
      </div>
    </>
  );
}
