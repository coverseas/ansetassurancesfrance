"use client";

import { useState } from "react";
import { Cat, Bike, Home, KeyRound, HeartPulse, Receipt, ArrowRight } from "lucide-react";
import { URLS } from "@/lib/constants";

const OPTIONS = [
  {
    slug: "sante-chien-chat",
    icon: Cat,
    label: "Mon chien ou mon chat",
    url: URLS.souscriptionSanteAnimale,
  },
  {
    slug: "moto-cyclo",
    icon: Bike,
    label: "Ma moto, mon cyclo, mon scooter",
    url: URLS.souscriptionMoto,
  },
  {
    slug: "habitation",
    icon: Home,
    label: "Mon logement",
    url: URLS.souscriptionHabitation,
  },
  {
    slug: "pno",
    icon: KeyRound,
    label: "Mon bien locatif (PNO)",
    url: URLS.souscriptionPNO,
  },
  {
    slug: "sante",
    icon: HeartPulse,
    label: "Ma mutuelle santé",
    url: URLS.souscriptionSante,
  },
  {
    slug: "zen-facture",
    icon: Receipt,
    label: "Mes factures (Zen Facture)",
    url: URLS.souscriptionZenFacture,
  },
];

export function DevisSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSubmit = () => {
    const option = OPTIONS.find((o) => o.slug === selected);
    if (option) {
      window.location.href = option.url;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 md:p-6 shadow-premium-lg border border-anset-blue/10">
      <p className="text-[10px] md:text-[11px] font-black uppercase tracking-[2.5px] text-anset-corail mb-2.5">
        Démarrez votre devis en 2 minutes
      </p>
      <p className="text-lg md:text-xl font-black text-anset-blue mb-4 leading-tight tracking-tight">
        Que voulez-vous assurer ?
      </p>
      <div className="flex flex-col gap-2 mb-4">
        {OPTIONS.map((option) => {
          const Icon = option.icon;
          const isSelected = selected === option.slug;
          return (
            <button
              key={option.slug}
              type="button"
              onClick={() => setSelected(option.slug)}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left ${
                isSelected
                  ? "border-anset-blue bg-anset-blue/5"
                  : "border-anset-blue/12 hover:border-anset-blue/40 bg-white"
              }`}
            >
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200 ${
                  isSelected
                    ? "bg-anset-blue text-white"
                    : "bg-anset-blue/8 text-anset-blue"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={1.8} aria-hidden="true" />
              </div>
              <span className="flex-1 text-sm md:text-[15px] font-black text-anset-blue tracking-tight">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>
      <button
        type="button"
        onClick={handleSubmit}
        disabled={!selected}
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-black text-sm transition-all duration-200 ${
          selected
            ? "bg-anset-blue text-white hover:bg-anset-blue-dark shadow-premium"
            : "bg-anset-blue/15 text-anset-blue/45 cursor-not-allowed"
        }`}
      >
        Obtenir mon devis
        <ArrowRight className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
      </button>
    </div>
  );
}
