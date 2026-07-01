/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Inclut la base de connaissances de Poé dans le bundle de la route /api/chat
  // (sinon les fichiers ne sont pas déployés sur Vercel).
  outputFileTracingIncludes: {
    "/api/chat": ["./lib/poe/reference/**/*"],
  },
};

export default nextConfig;