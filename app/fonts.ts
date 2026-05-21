import localFont from "next/font/local";
import { Inter } from "next/font/google";

export const sonnyGothic = localFont({
  src: [
    { path: "./fonts/SonnyGothic-Book.otf", weight: "300", style: "normal" },
    { path: "./fonts/SonnyGothic-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/SonnyGothic-RegularItalic.otf", weight: "400", style: "italic" },
    { path: "./fonts/SonnyGothic-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/SonnyGothic-BoldItalic.otf", weight: "700", style: "italic" },
    { path: "./fonts/SonnyGothic-UltraBlack.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-sonny",
  display: "swap",
});

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
