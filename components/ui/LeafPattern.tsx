import { cn } from "@/lib/cn";

interface LeafPatternProps {
  color?: string;
  opacity?: number;
  size?: number | string;
  rotate?: number;
  className?: string;
  flipX?: boolean;
}

export function LeafPattern({
  color = "currentColor",
  opacity = 0.1,
  size = 200,
  rotate = 0,
  className,
  flipX = false,
}: LeafPatternProps) {
  const transform = [
    flipX ? "scaleX(-1)" : "",
    rotate !== 0 ? `rotate(${rotate}deg)` : "",
  ].filter(Boolean).join(" ");

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("leaf-pattern", className)}
      style={{ opacity, transform: transform || undefined }}
    >
      <path
        d="M50 6 C 30 22 16 46 20 70 C 24 86 38 96 50 96 C 62 96 76 86 80 70 C 84 46 70 22 50 6 Z M50 18 L50 92"
        fill={color}
      />
    </svg>
  );
}

export function MonsteraLeaf({
  color = "currentColor",
  opacity = 0.1,
  size = 200,
  rotate = 0,
  className,
  flipX = false,
}: LeafPatternProps) {
  const transform = [
    flipX ? "scaleX(-1)" : "",
    rotate !== 0 ? `rotate(${rotate}deg)` : "",
  ].filter(Boolean).join(" ");

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={cn("leaf-pattern", className)}
      style={{ opacity, transform: transform || undefined }}
    >
      <path
        d="M50 8 C 28 14 14 34 14 56 C 14 78 32 92 50 92 C 68 92 86 78 86 56 C 86 34 72 14 50 8 Z M30 35 L42 42 M58 42 L70 35 M24 56 L42 56 M58 56 L76 56 M28 72 L42 70 M58 70 L72 72 M50 18 L50 90"
        fill={color}
        stroke={color}
        strokeWidth="0"
      />
    </svg>
  );
}