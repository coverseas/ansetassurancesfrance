import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ variant = "default", size = "md", className }: LogoProps) {
  const sizeMap = {
    sm: { block: "px-2 py-1 text-base", label: "text-[8px] tracking-[3px] mt-1", border: "border" },
    md: { block: "px-2.5 py-1.5 text-lg", label: "text-[10px] tracking-[3.5px] mt-1", border: "border-2" },
    lg: { block: "px-3 py-2 text-2xl", label: "text-xs tracking-[4px] mt-1.5", border: "border-2" },
  };
  const s = sizeMap[size];

  const colors = variant === "white"
    ? { anBg: "bg-white", anText: "text-anset-blue", setBg: "bg-anset-blue", setText: "text-white", setBorder: "border-white", label: "text-white" }
    : { anBg: "bg-anset-blue", anText: "text-white", setBg: "bg-white", setText: "text-anset-blue", setBorder: "border-anset-blue", label: "text-anset-blue" };

  return (
    <div className={cn("inline-flex flex-col items-start", className)}>
      <div className="flex items-stretch">
        <span className={cn("font-black leading-none rounded-l-[3px] tracking-[-0.5px]", s.block, colors.anBg, colors.anText)}>An</span>
        <span className={cn("font-black leading-none rounded-r-[3px] border-l-0 tracking-[-0.5px]", s.block, s.border, colors.setBg, colors.setText, colors.setBorder)}>Set</span>
      </div>
      <span className={cn("font-black uppercase", s.label, colors.label)}>ASSURANCES</span>
    </div>
  );
}