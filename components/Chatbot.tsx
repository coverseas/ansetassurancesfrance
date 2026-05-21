"use client";

export function Chatbot() {
  return (
    <div className="fixed bottom-5 right-5 bg-anset-blue text-white rounded-full pl-2.5 pr-4 py-2.5 flex items-center gap-2.5 shadow-[0_12px_32px_rgba(16,46,93,0.32)] z-50 cursor-pointer hover:scale-105 transition-transform">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-anset-lilas to-anset-lilas-dark flex items-center justify-center text-xs font-black tracking-tight relative">P<span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-anset-menthe border-2 border-anset-blue" aria-hidden="true" />
      </div>
      <div className="text-xs leading-tight">
        <span className="block font-black text-[11px]">Bonjour, je suis Poé</span>
        <span className="text-[9.5px] text-white/70 font-medium">Posez-moi votre question</span>
      </div>
    </div>
  );
}