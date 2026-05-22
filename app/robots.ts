import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ansetassurancesfrance-9z74.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/sinistre/", "/bientot"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}