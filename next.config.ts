import type { NextConfig } from "next";

// basePath/assetPrefix : vide en local, = "/<nom-du-repo>" sur GitHub Pages
// (injecté par le workflow .github/workflows/deploy.yml via NEXT_PUBLIC_BASE_PATH).
// NEXT_PUBLIC_* est aussi lisible côté composant (voir src/lib/asset.ts) pour
// préfixer les images référencées par chaîne, que next/image ne préfixe pas.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  // Export 100% statique (HTML/CSS/JS) — hébergeable sur GitHub Pages.
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: {
    // Pas de serveur d'optimisation sur un hébergement statique.
    unoptimized: true,
  },
};

export default nextConfig;
