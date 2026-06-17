import type { Metadata } from "next";
import { Chewy, Hanken_Grotesk } from "next/font/google";
import { site, findUs, geo, areaServed, keywords } from "@/content";
import "./globals.css";

const chewy = Chewy({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-chewy",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const title = "RIVES Café — Coffee shop & matcha à Pantin (93)";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: title,
    template: "%s · RIVES Café",
  },
  description: site.description,
  keywords: [...keywords],
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "fr_FR",
    type: "website",
    images: [{ url: "/assets/og.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
    images: ["/assets/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "geo.region": "FR-93",
    "geo.placename": "Pantin",
    "geo.position": `${geo.latitude};${geo.longitude}`,
    ICBM: `${geo.latitude}, ${geo.longitude}`,
  },
};

// Données structurées LocalBusiness (SEO local)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "CafeOrCoffeeShop",
  "@id": `${site.url}/#business`,
  name: site.name,
  description: site.description,
  url: site.url,
  image: `${site.url}/assets/og.png`,
  email: findUs.email,
  telephone: findUs.phone,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  servesCuisine: ["Café de spécialité", "Matcha", "Pâtisseries", "Brunch"],
  hasMenu: `${site.url}/#menu`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "80 avenue du Général Leclerc",
    postalCode: "93500",
    addressLocality: "Pantin",
    addressRegion: "Seine-Saint-Denis",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: geo.latitude,
    longitude: geo.longitude,
  },
  areaServed: areaServed.map((name) => ({ "@type": "City", name })),
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "MenuItem", name: "Matcha latte" } },
    { "@type": "Offer", itemOffered: { "@type": "MenuItem", name: "Café de spécialité" } },
    { "@type": "Offer", itemOffered: { "@type": "MenuItem", name: "Brunch du week-end" } },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${chewy.variable} ${hanken.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
