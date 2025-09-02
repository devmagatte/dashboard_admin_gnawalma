import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Activer le mode standalone pour Docker
  output: "standalone",

  // Autres configurations
  reactStrictMode: true,
  swcMinify: true,

  // Configuration pour les images (si utilisées)
  images: {
    unoptimized: true, // ou configurez selon vos besoins
  },
};

export default nextConfig;
