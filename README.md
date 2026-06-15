# RIVES Café — Site vitrine

Landing page **one-page** du coffee shop RIVES Café (Paris 19e), construite en
**Next.js (App Router) + TypeScript**, recréant fidèlement la maquette du
`design_handoff_site_vitrine`.

## Stack & choix techniques

- **Next.js 16 (App Router)** + React 19, TypeScript.
- **CSS Modules** par composant + une couche de tokens globaux
  (`src/app/globals.css`) où vivent toutes les variables de design (couleurs,
  rayons, ombres). Choix retenu pour porter la maquette CSS au pixel près.
- **Polices** via `next/font/google` : `Chewy` (display/logo/titres) et
  `Hanken Grotesk` (texte/UI), exposées en variables `--font-chewy` /
  `--font-hanken`.
- **Images** via `next/image`.
- Site **statique** (aucune donnée dynamique) — exportable via `output: 'export'`.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
```

## Structure

```
src/
├── app/
│   ├── layout.tsx     # polices, <html lang="fr">, metadata SEO + JSON-LD LocalBusiness
│   ├── page.tsx       # assemble les 8 sections
│   └── globals.css    # design tokens + helpers partagés (.wrap, .btn, .eyebrow, .squares)
├── components/        # Navbar, Hero, About, Menu, FindUs, Recruit, Instagram, Footer (+ .module.css)
│   └── icons.tsx      # SVG inline (Instagram, TikTok, pin, horloge, mail)
└── content.ts         # CONTENU CENTRALISÉ : carte, infos pratiques, liens réseaux, navigation
```

## Mettre à jour le contenu

Tout le contenu éditorial (la carte, l'adresse/horaires/contact, les liens
Instagram/TikTok, les libellés de navigation) est centralisé dans
**`src/content.ts`**. Aucun composant à modifier.

## Remplacer les visuels (placeholders)

Les images de `public/assets/` sont des **placeholders générés** on-brand. Pour
mettre les vrais médias, il suffit de déposer des fichiers aux **mêmes chemins** :

- `public/assets/zellige-tile.png` — texture zellige seamless (fond hero + carte).
- `public/assets/mood/r02.png … r11.png` — photos (À propos + galerie Instagram).

Le script `scripts/generate-placeholders.mjs` (utilise `sharp`) permet de
régénérer les placeholders si besoin :

```bash
node scripts/generate-placeholders.mjs
```

## Interactions implémentées

- Navbar transparente → crème au scroll (> 80px), ombre + padding réduit.
- Smooth-scroll des ancres (désactivé en `prefers-reduced-motion`).
- Hovers boutons (translateY + inversion couleurs) et vignettes IG (zoom + voile).
- Embed Google Maps avec fallback CSS.
- Responsive au breakpoint **900px** + **menu burger mobile** (créé, non maquetté).
- Accessibilité : `alt`, focus visibles, `aria-*` sur le burger, reduced-motion.
- SEO : `<title>`/description, Open Graph, `lang="fr"`, données structurées `LocalBusiness`.
