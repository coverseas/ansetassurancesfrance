import Image from "next/image";
import { cn } from "@/lib/cn";

interface LogoProps {
  variant?: "default" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const heightMap = { sm: 32, md: 44, lg: 56 };

export function Logo({ variant = "default", size = "md", className }: LogoProps) {
  const height = heightMap[size];
  // Aspect ratio approximatif du logo ANSET ASSURANCES (à ajuster selon votre PNG)
  const width = height * 2.4;

  const src = variant === "white"
    ? "/images/logo-anset-white.png"
    : "/images/logo-anset.png";

  return (
    <Image
      src={src}
      alt="ANSET Assurances"
      height={height}
      width={width}
      className={cn(className, variant === "white" && !hasWhiteVersion() ? "[filter:brightness(0)_invert(1)]" : "")}
      priority
    />
  );
}

// Si pas de version blanche disponible, on inverse la couleur de la version par défaut via filter.
// Mettre à true dès que /images/logo-anset-white.png est uploadé.
function hasWhiteVersion() {
  return false;
}