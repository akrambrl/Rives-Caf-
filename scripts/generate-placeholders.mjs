/**
 * Génère des visuels PLACEHOLDER on-brand pour RIVES Café.
 * À remplacer par les vrais médias du client (mêmes chemins dans public/assets).
 *
 *   node scripts/generate-placeholders.mjs
 */
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(fileURLToPath(import.meta.url));
const assets = path.join(root, "..", "public", "assets");
const mood = path.join(assets, "mood");

/** Placeholder photo : dégradé chaud + filigrane discret. */
function moodSvg(label, c1, c2, w = 1200, h = 1200) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="${c1}"/>
        <stop offset="1" stop-color="${c2}"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g)"/>
    <circle cx="${w * 0.5}" cy="${h * 0.42}" r="${w * 0.13}" fill="#f8f1e3" opacity="0.10"/>
    <text x="50%" y="50%" text-anchor="middle" fill="#f8f1e3" opacity="0.85"
      font-family="Georgia, serif" font-size="${w * 0.085}" font-style="italic">RiVES</text>
    <text x="50%" y="58%" text-anchor="middle" fill="#f8f1e3" opacity="0.55"
      font-family="Arial, sans-serif" font-size="${w * 0.03}" letter-spacing="6">${label}</text>
  </svg>`;
}

const MOODS = {
  r02: ["#8a3128", "#5e2017", "PACKAGING"],
  r03: ["#c5837a", "#7b2820", "PATISSERIES"],
  r04: ["#7b2820", "#2a1712", "INTERIEUR"],
  r05: ["#a3433a", "#6d2018", "CAFE"],
  r06: ["#92382c", "#531a13", "DEVANTURE"],
  r08: ["#c5837a", "#8a3128", "TERRASSE"],
  r10: ["#b56a5e", "#7b2820", "LATTE ART"],
  r11: ["#e3d4ba", "#a3433a", "BRUNCH"],
};

async function run() {
  await mkdir(mood, { recursive: true });

  for (const [name, [c1, c2, label]] of Object.entries(MOODS)) {
    await sharp(Buffer.from(moodSvg(label, c1, c2)))
      .png()
      .toFile(path.join(mood, `${name}.png`));
  }

  console.log("✓ Placeholders générés dans public/assets/");
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
