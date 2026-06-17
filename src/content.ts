/**
 * Contenu centralisé du site RIVES Café.
 * Modifier ce fichier suffit pour mettre à jour la carte, les infos pratiques
 * et les liens réseaux — aucun composant à toucher.
 */

export const site = {
  name: "RIVES Café",
  shortName: "RiVES",
  description:
    "Coffee shop de quartier à la parisienne — zellige bordeaux, pâtisseries maison et le bon café qui ralentit le temps.",
  url: "https://rives-cafe.fr",
  tagline:
    "Coffee shop de quartier — bon café, pâtisseries maison & bonnes rencontres. Pantin (93).",
} as const;

/** Liens de navigation (ancres des sections). */
export const navLinks = [
  { href: "#about", label: "L'histoire" },
  { href: "#menu", label: "La carte" },
  { href: "#find", label: "Nous trouver" },
  { href: "#recruit", label: "On recrute" },
] as const;

/** Réseaux & contacts. */
export const social = {
  instagram: { url: "https://instagram.com", handle: "@rives.cafe" },
  tiktok: { url: "https://tiktok.com" },
  email: "bonjour@rives-cafe.fr",
  jobsEmail: "jobs@rives-cafe.fr",
} as const;

/** Infos pratiques (section « Nous trouver »). */
export const findUs = {
  address: "80 avenue du Général Leclerc · 93500 Pantin",
  hours: ["Lun – Ven · 8h – 19h", "Sam – Dim · 9h – 19h"],
  email: "bonjour@rives-cafe.fr",
  phone: "01 23 45 67 89",
  mapsLink:
    "https://maps.google.com/?q=80+Avenue+du+G%C3%A9n%C3%A9ral+Leclerc+93500+Pantin",
  mapsEmbed:
    "https://www.google.com/maps?q=80%20Avenue%20du%20G%C3%A9n%C3%A9ral%20Leclerc%2C%2093500%20Pantin&output=embed",
} as const;

/** Adresse affichée dans la barre légale du footer. */
export const legalAddress = "80 avenue du Général Leclerc, 93500 Pantin";

export type MenuItem = { name: string; price: string };
export type MenuColumn = { title: string; items: MenuItem[] };

/** La carte (placeholder — à remplacer par les vrais contenus du client). */
export const menu: MenuColumn[] = [
  {
    title: "Boissons",
    items: [
      { name: "Espresso", price: "2,0" },
      { name: "Flat white", price: "3,5" },
      { name: "Cappuccino", price: "3,5" },
      { name: "Latte", price: "4,0" },
      { name: "Matcha latte", price: "4,5" },
      { name: "Chai latte", price: "4,5" },
      { name: "Chocolat chaud", price: "4,0" },
    ],
  },
  {
    title: "Pâtisseries",
    items: [
      { name: "Cookie maison", price: "3,0" },
      { name: "Carrot cake", price: "4,5" },
      { name: "Fondant chocolat", price: "4,5" },
      { name: "Croissant", price: "1,8" },
      { name: "Banana bread", price: "4,0" },
      { name: "Bowl du matin", price: "7,5" },
      { name: "Brunch (le week-end)", price: "19" },
    ],
  },
];

export type GalleryImage = { src: string; alt: string };

/** Galerie Instagram (photos RIVES Café). */
export const gallery: GalleryImage[] = [
  { src: "/assets/mood/terrasse.png", alt: "Devanture et terrasse de RIVES Café" },
  { src: "/assets/mood/patisseries.png", alt: "Pâtisseries et viennoiseries maison" },
  { src: "/assets/mood/comptoir.png", alt: "Comptoir et machine à espresso" },
  { src: "/assets/mood/ambiance.png", alt: "Moment café en terrasse" },
  { src: "/assets/mood/packaging.png", alt: "Packaging RIVES Café" },
  { src: "/assets/mood/bord-eau.png", alt: "Un café au bord de l'eau" },
  { src: "/assets/mood/interieur.png", alt: "Intérieur en zellige bordeaux" },
  { src: "/assets/mood/cafe.png", alt: "Pause café chez RIVES" },
];
