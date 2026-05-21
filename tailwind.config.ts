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
            soft: "#FCEAE9",
            dark: "#B5453C",
          },
          moutarde: {
            DEFAULT: "#E69D46",
            soft: "#FCF1DE",
            dark: "#B27220",
          },
          menthe: {
            DEFAULT: "#77AA92",
            soft: "#DDEBE3",
          },
          lilas: {
            DEFAULT: "#715689",
            soft: "#E3DCEC",
          },
          ink: "#1A2740",
          slate: "#4A5A75",
          mist: "#F2F6FB",
        },
      },
      fontFamily: {
        display: [
          "var(--font-display)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        body: [
          "var(--font-body)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-xl": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "display-lg": ["3rem", { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-md": ["2.25rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-sm": ["1.75rem", { lineHeight: "1.15", letterSpacing: "-0.015em" }],
      },
      borderRadius: {
        brand: "0.875rem",
      },
      spacing: {
        section: "5rem",
        "section-lg": "7rem",
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