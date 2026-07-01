"use client";

import { useEffect, useRef } from "react";

const SRC = "https://souscription.coverseas.fr/souscription?d=2e7bb887b58246c99ffbbd3d230e57db";
const ALLOWED_ORIGIN = "https://souscription.coverseas.fr";

/**
 * Tunnel de souscription Coverseas intégré en iframe.
 * La hauteur de l'iframe est ajustée dynamiquement via les messages
 * `postMessage` de type "coverseas:resize" émis par le tunnel.
 */
export default function CoverseasSubscription({ title }: { title?: string }) {
  const ref = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function onMessage(e: MessageEvent) {
      if (e.origin !== ALLOWED_ORIGIN) return;
      if (e.data && e.data.type === "coverseas:resize" && ref.current) {
        ref.current.style.height = `${e.data.height}px`;
      }
    }
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <iframe
      ref={ref}
      id="coverseas-souscription"
      src={SRC}
      title={title ?? "Tunnel de souscription Coverseas"}
      loading="lazy"
      style={{ width: "100%", border: 0 }}
      className="block min-h-[640px] rounded-2xl bg-white shadow-premium-sm border border-anset-blue/10"
    />
  );
}
