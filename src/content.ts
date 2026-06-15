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
    "Coffee shop de quartier — bon café, pâtisseries maison & bonnes rencontres. Paris 19e.",
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
  address: "80, quai de l'Ourcq · 75019 Paris",
  hours: ["Lun – Ven · 8h – 19h", "Sam – Dim · 9h – 19h"],
  email: "bonjour@rives-cafe.fr",
  phone: "01 23 45 67 89",
  mapsLink: "https://maps.google.com/?q=Quai+de+l'Ourcq+Paris",
  mapsEmbed:
    "https://www.google.com/maps?q=Quai%20de%20l'Ourcq%20Paris&output=embed",
} as const;

/** Adresse affichée dans la barre légale du footer. */
export const legalAddress = "80 quai de l'Ourcq, 75019 Paris";

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

/** Galerie Instagram (placeholders — voir public/assets/mood). */
export const gallery: GalleryImage[] = [
  { src: "/assets/mood/r08.png", alt: "Terrasse ensoleillée de RIVES Café" },
  { src: "/assets/mood/r10.png", alt: "Latte art servi au comptoir" },
  { src: "/assets/mood/r03.png", alt: "Pâtisseries maison du jour" },
  { src: "/assets/mood/r06.png", alt: "Devanture de RIVES Café" },
  { src: "/assets/mood/r02.png", alt: "Packaging RIVES Café" },
  { src: "/assets/mood/r11.png", alt: "Brunch du week-end" },
  { src: "/assets/mood/r04.png", alt: "Intérieur en zellige bordeaux" },
  { src: "/assets/mood/r05.png", alt: "Café fraîchement moulu" },
];
