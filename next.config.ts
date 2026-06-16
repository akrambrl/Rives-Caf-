import type { NextConfig } from "next";

// Déploiement sur Vercel : Next.js tourne nativement (optimisation next/image,
// rendu statique des pages). Aucun basePath — le site est servi à la racine du
// domaine. Le helper src/lib/asset.ts reste neutre tant que NEXT_PUBLIC_BASE_PATH
// est vide (utile uniquement pour un hébergement sous sous-chemin).
const nextConfig: NextConfig = {};

export default nextConfig;
