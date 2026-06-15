import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Site statique : peut être exporté en pur HTML/CSS/JS si besoin
  // (décommenter la ligne ci-dessous + `images.unoptimized`).
  // output: "export",
  images: {
    // Les visuels sont des placeholders locaux ; pas de domaine distant requis.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
