import type { LucideIcon } from "lucide-react";
import {
  Heart,
  Cake,
  Baby,
  PartyPopper,
  Sparkles,
  Wand2,
  Frame,
  Utensils,
  Flower2,
} from "lucide-react";

export interface Service {
  slug: string;
  title: string;
  icon: LucideIcon;
  bestFor: string;
  short: string;
  long: string;
}

export const services: Service[] = [
  {
    slug: "wedding-decor",
    title: "Wedding Decor",
    icon: Heart,
    bestFor: "Brides & couples",
    short: "Considered, romantic styling that turns your venue into a portrait of the day.",
    long: "From ceremony aisles and statement floral arches to receptions styled down to the smallest place card, we craft weddings that feel personal, polished, and timeless.",
  },
  {
    slug: "birthday-decor",
    title: "Birthday Decor",
    icon: Cake,
    bestFor: "Milestone celebrations",
    short: "Birthday styling with a sense of occasion, from intimate dinners to landmark birthdays.",
    long: "Tailored colour stories, sculptural balloon work, and table styling designed around the guest of honour. Every detail considered, nothing left to chance.",
  },
  {
    slug: "baby-shower-decor",
    title: "Baby Shower Decor",
    icon: Baby,
    bestFor: "Mothers-to-be",
    short: "Soft, elegant baby showers that feel modern, warm, and quietly luxurious.",
    long: "Refined palettes, lush florals, and grazing-table styling that move beyond pastel cliché — a welcome befitting the moment.",
  },
  {
    slug: "party-private-events",
    title: "Parties & Private Events",
    icon: PartyPopper,
    bestFor: "Hosts & private gatherings",
    short: "Statement styling for engagement parties, anniversaries, and private gatherings.",
    long: "Whether it is a rooftop celebration or an intimate dinner at home, we shape the atmosphere, lighting, and details to match the occasion.",
  },
  {
    slug: "custom-theme-styling",
    title: "Custom Theme Styling",
    icon: Wand2,
    bestFor: "Bespoke concepts",
    short: "Bespoke themes designed end-to-end — from mood board to final setup.",
    long: "Bring us a feeling, a film, a colour, or a fragment of an idea. We translate it into a cohesive theme with art direction, decor, and styling.",
  },
  {
    slug: "balloon-decoration",
    title: "Balloon Decoration",
    icon: Sparkles,
    bestFor: "Statement moments",
    short: "Architectural balloon installations — never the basic arch.",
    long: "Sculptural garlands, ceiling clouds, organic columns and signature pieces designed to anchor the room and photograph beautifully.",
  },
  {
    slug: "backdrops",
    title: "Backdrops",
    icon: Frame,
    bestFor: "Photo & focal points",
    short: "Custom backdrops styled around your colour palette, signage, and theme.",
    long: "Mesh circles, fluted panels, draped fabric, floral walls, and neon signage — built to anchor the photo moment of the evening.",
  },
  {
    slug: "table-settings",
    title: "Table Settings",
    icon: Utensils,
    bestFor: "Dining experiences",
    short: "Tablescapes layered with linen, glassware, candlelight, and considered florals.",
    long: "Charger plates, napkin folds, menu cards, runners and centrepieces — everything coordinated so the table feels like a single, deliberate composition.",
  },
  {
    slug: "floral-arrangements",
    title: "Floral Arrangements",
    icon: Flower2,
    bestFor: "Florals with intention",
    short: "Seasonal, sculpted florals that bring movement and softness to the room.",
    long: "Centrepieces, aisle florals, installations and bouquets — designed in harmony with your venue's light, scale, and palette.",
  },
];
