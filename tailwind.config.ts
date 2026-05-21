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
          blue: {
            DEFAULT: "#1C509D",
            dark: "#102E5D",
            light: "#5C82BC",
          },
          rouge: "#E73A30",
          ciel: {
            DEFAULT: "#6A9BAF",
            soft: "#A8C6D4",
          },
          corail: {
            DEFAULT: "#D36F6B",
            dark: "#B5453C",
            soft: "#FCEAE9",
          },
          moutarde: {
            DEFAULT: "#E69D46",
            dark: "#B27220",
            soft: "#FCF1DE",
          },
          menthe: {
            DEFAULT: "#77AA92",
            dark: "#5C8D77",
            soft: "#DDEBE3",
          },
          lilas: {
            DEFAULT: "#715689",
            dark: "#523F66",
            soft: "#E3DCEC",
          },
          cream: "#FBF9F4",
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
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "0.96", letterSpacing: "-0.04em" }],
        "display-lg": ["3rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-md": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.025em" }],
        "display-sm": ["1.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        brand: "1rem",
        "brand-lg": "1.5rem",
      },
      maxWidth: {
        container: "1200px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;