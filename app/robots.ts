import type { MetadataRoute } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ansetassurances.com";

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