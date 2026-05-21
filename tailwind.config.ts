import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        anset: {
          blue: { DEFAULT: "#1C509D", dark: "#102E5D", light: "#5C82BC" },
          rouge: "#E73A30",
          ciel: { DEFAULT: "#6A9BAF", soft: "#A8C6D4" },
          corail: { DEFAULT: "#D36F6B", dark: "#B5453C", soft: "#FCEAE9" },
          moutarde: { DEFAULT: "#E69D46", dark: "#B27220", soft: "#FCF1DE" },
          menthe: { DEFAULT: "#77AA92", dark: "#5C8D77", soft: "#DDEBE3" },
          lilas: { DEFAULT: "#715689", dark: "#523F66", soft: "#E3DCEC" },
          cream: "#FFFFFF",
          ink: "#1A2740",
          slate: "#4A5A75",
          mist: "#F2F6FB",
        },
        trustpilot: "#00B67A",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        "premium-sm": "0 1px 2px rgba(16,46,93,0.04), 0 2px 4px rgba(16,46,93,0.04)",
        "premium": "0 1px 2px rgba(16,46,93,0.04), 0 2px 4px rgba(16,46,93,0.05), 0 4px 8px rgba(16,46,93,0.05), 0 8px 16px rgba(16,46,93,0.05)",
        "premium-lg": "0 2px 4px rgba(16,46,93,0.04), 0 4px 8px rgba(16,46,93,0.05), 0 8px 16px rgba(16,46,93,0.06), 0 16px 32px rgba(16,46,93,0.07), 0 24px 48px rgba(16,46,93,0.08)",
        "premium-hover": "0 4px 8px rgba(16,46,93,0.06), 0 8px 16px rgba(16,46,93,0.08), 0 16px 32px rgba(16,46,93,0.1), 0 32px 64px rgba(16,46,93,0.12)",
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "0.96", letterSpacing: "-0.04em" }],
        "display-lg": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-sm": ["1.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      borderRadius: { brand: "1rem", "brand-lg": "1.5rem" },
      maxWidth: { container: "1200px" },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: { "0%": { opacity: "0", transform: "translateY(16px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
      },
    },
  },
  plugins: [],
};

export default config;
