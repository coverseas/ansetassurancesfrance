"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Send, X, CalendarClock } from "lucide-react";
import { CALENDLY } from "@/lib/constants";

type Message = { role: "user" | "assistant"; content: string };

const GREETING =
  "Bonjour, je suis Poé 👋 Je peux vous renseigner sur nos assurances, préparer votre demande de devis ou vous orienter vers un conseiller. Que puis-je faire pour vous ?";

const QUICK_REPLIES = [
  "Assurer mon chien ou mon chat",
  "Assurance auto ou habitation",
  "Prendre rendez-vous",
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, loading]);

  async function sendMessage(text: string) {
    const trimmed = text.trim();
    if (!trimmed || loading) return;

    const history: Message[] = [...messages, { role: "user", content: trimmed }];
    setMessages([...history, { role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history }),
      });
      if (res.status === 429) {
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = {
            role: "assistant",
            content: "Vous m'écrivez un peu vite 😊 Merci de patienter quelques secondes avant de renvoyer un message.",
          };
          return copy;
        });
        return;
      }
      if (!res.ok || !res.body) throw new Error("request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let acc = "";
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        acc += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const copy = [...prev];
          copy[copy.length - 1] = { role: "assistant", content: acc };
          return copy;
        });
      }
    } catch {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content:
            "Désolée, une erreur est survenue. Vous pouvez réessayer, écrire à hello@ansetassurances.com, ou prendre rendez-vous avec un conseiller.",
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    sendMessage(input);
  }

  return (
    <>
      {/* Bouton flottant */}
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le chat avec Poé"
          className="fixed bottom-5 right-5 bg-anset-blue text-white rounded-full pl-2.5 pr-4 py-2.5 flex items-center gap-2.5 shadow-[0_12px_32px_rgba(16,46,93,0.32)] z-50 hover:scale-105 transition-transform"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-anset-lilas to-anset-lilas-dark flex items-center justify-center text-xs font-black tracking-tight relative">
            P
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-anset-menthe border-2 border-anset-blue" aria-hidden="true" />
          </div>
          <div className="text-xs leading-tight text-left">
            <span className="block font-black text-[11px]">Bonjour, je suis Poé</span>
            <span className="text-[9.5px] text-white/70 font-medium">Posez-moi votre question</span>
          </div>
        </button>
      )}

      {/* Panneau de chat */}
      {open && (
        <div className="fixed bottom-5 right-5 z-50 w-[calc(100vw-2.5rem)] max-w-sm h-[min(560px,calc(100vh-2.5rem))] flex flex-col bg-white rounded-3xl shadow-[0_16px_48px_rgba(16,46,93,0.28)] border border-anset-blue/10 overflow-hidden">
          {/* En-tête */}
          <div className="flex items-center gap-3 px-4 py-3.5 bg-anset-blue text-white flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-anset-lilas to-anset-lilas-dark flex items-center justify-center text-sm font-black relative">
              P
              <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-anset-menthe border-2 border-anset-blue" aria-hidden="true" />
            </div>
            <div className="flex-1 leading-tight">
              <p className="font-black text-sm">Poé · ANSET</p>
              <p className="text-[10px] text-white/70 font-medium">Agente IA · En ligne 24h/24</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Fermer le chat" className="p-1.5 hover:bg-white/10 rounded-lg transition-colors">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-anset-mist/30">
            <Bubble role="assistant" content={GREETING} />
            {messages.map((m, i) => (
              <Bubble key={i} role={m.role} content={m.content} pending={loading && i === messages.length - 1 && m.content === ""} />
            ))}

            {messages.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {QUICK_REPLIES.map((q) => (
                  <button
                    key={q}
                    type="button"
                    onClick={() => sendMessage(q)}
                    className="text-[12px] font-bold text-anset-blue bg-white border border-anset-blue/20 rounded-full px-3 py-1.5 hover:border-anset-blue hover:bg-anset-blue/5 transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Pied : lien conseiller + saisie */}
          <div className="flex-shrink-0 border-t border-anset-blue/10 bg-white">
            <Link
              href={CALENDLY.sectionHref}
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-1.5 text-[11px] font-bold text-anset-slate hover:text-anset-lilas transition-colors py-2 border-b border-anset-blue/5"
            >
              <CalendarClock className="w-3.5 h-3.5" aria-hidden="true" />
              Parler directement à un conseiller
            </Link>
            <form onSubmit={onSubmit} className="flex items-center gap-2 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écrivez votre message…"
                maxLength={2000}
                disabled={loading}
                className="flex-1 text-sm px-3.5 py-2.5 rounded-xl border border-anset-blue/15 focus:border-anset-blue focus:outline-none focus:ring-2 focus:ring-anset-blue/10 disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Envoyer"
                className="w-10 h-10 flex-shrink-0 flex items-center justify-center bg-anset-blue text-white rounded-xl hover:bg-anset-blue-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[9px] text-anset-slate/50 text-center pb-2 px-3 leading-tight">
              Poé est une IA. Elle peut se tromper — pour un contrat, un sinistre ou un tarif, un conseiller prend le relais.
            </p>
          </div>
        </div>
      )}
    </>
  );
}

function Bubble({ role, content, pending }: { role: "user" | "assistant"; content: string; pending?: boolean }) {
  const isUser = role === "user";
  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
          isUser
            ? "bg-anset-blue text-white rounded-br-md"
            : "bg-white text-anset-blue border border-anset-blue/10 rounded-bl-md shadow-premium-sm"
        }`}
      >
        {pending ? <span className="inline-flex gap-1 py-1"><Dot /><Dot delay="0.15s" /><Dot delay="0.3s" /></span> : content}
      </div>
    </div>
  );
}

function Dot({ delay = "0s" }: { delay?: string }) {
  return (
    <span
      className="w-1.5 h-1.5 rounded-full bg-anset-slate/40 animate-bounce"
      style={{ animationDelay: delay }}
      aria-hidden="true"
    />
  );
}
