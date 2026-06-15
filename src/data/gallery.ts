export interface GalleryItem {
  id: string;
  category:
    | "Weddings"
    | "Birthdays"
    | "Baby Showers"
    | "Balloon Installations"
    | "Romantic Setups"
    | "Custom Backdrops";
  title: string;
  /** Soft palette used to render the placeholder card. */
  palette: [string, string];
}

export const galleryItems: GalleryItem[] = [
  { id: "g1", category: "Weddings", title: "Champagne & Ivory Reception", palette: ["oklch(0.95 0.03 85)", "oklch(0.82 0.08 70)"] },
  { id: "g2", category: "Birthdays", title: "Gilded 30th Birthday Setup", palette: ["oklch(0.88 0.05 50)", "oklch(0.55 0.1 40)"] },
  { id: "g3", category: "Baby Showers", title: "Soft Blush Baby Welcome", palette: ["oklch(0.94 0.04 25)", "oklch(0.82 0.06 20)"] },
  { id: "g4", category: "Balloon Installations", title: "Organic Garland Ceiling", palette: ["oklch(0.92 0.04 85)", "oklch(0.7 0.1 60)"] },
  { id: "g5", category: "Romantic Setups", title: "Candlelit Restaurant Surprise", palette: ["oklch(0.32 0.02 30)", "oklch(0.65 0.12 35)"] },
  { id: "g6", category: "Custom Backdrops", title: "Fluted Arch with Florals", palette: ["oklch(0.9 0.04 95)", "oklch(0.6 0.09 150)"] },
  { id: "g7", category: "Weddings", title: "Garden Aisle Florals", palette: ["oklch(0.93 0.04 130)", "oklch(0.5 0.1 150)"] },
  { id: "g8", category: "Birthdays", title: "Black-tie 40th Tablescape", palette: ["oklch(0.25 0.02 60)", "oklch(0.7 0.11 80)"] },
  { id: "g9", category: "Custom Backdrops", title: "Neon Signage on Mesh Circle", palette: ["oklch(0.4 0.05 320)", "oklch(0.82 0.13 350)"] },
];
