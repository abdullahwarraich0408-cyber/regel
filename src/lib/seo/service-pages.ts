import { absoluteUrl } from "@/lib/site-config";
import { localBusinessJsonLd } from "@/lib/seo/json-ld";
import type { GalleryCategory } from "@/data/gallery";

export interface ServicePageContent {
  slug: string;
  eyebrow: string;
  headline: string;
  headlineAccent: string;
  intro: string;
  sectionTitle: string;
  paragraphs: string[];
  highlights: string[];
  whatsappMessage: string;
  portfolioCategory: Exclude<GalleryCategory, "All">;
  palette: [string, string];
  process: { step: string; title: string; detail: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string;
  };
}

export const weddingPlanningPage: ServicePageContent = {
  slug: "wedding-planning",
  eyebrow: "Wedding Planning Manchester",
  headline: "Luxury wedding styling",
  headlineAccent: "designed around your love story",
  intro:
    "From ceremony arches to reception tablescapes, Regal Knot Events delivers premium wedding decor and coordination across Manchester and the North West.",
  sectionTitle: "Wedding decor that feels unmistakably yours",
  paragraphs: [
    "Your wedding day deserves more than generic styling. We design bespoke decor that reflects your palette, venue, and personality — with calm, professional delivery from setup to pack-down.",
    "Serving couples across Greater Manchester, Cheshire, and Lancashire, we coordinate with venues and vendors to create seamless, magazine-worthy celebrations.",
  ],
  highlights: [
    "Ceremony and reception styling",
    "Custom backdrops and floral coordination",
    "Tablescapes, candles, and luxury details",
    "Full setup, styling, and pack-down",
    "Manchester & North West coverage",
  ],
  whatsappMessage: "Hi, I'd like to enquire about wedding styling in Manchester.",
  portfolioCategory: "Weddings",
  palette: ["oklch(0.95 0.03 85)", "oklch(0.78 0.06 20)"],
  process: [
    {
      step: "01",
      title: "Share your vision",
      detail: "Tell us your date, venue, and the atmosphere you want to create.",
    },
    {
      step: "02",
      title: "Design & propose",
      detail: "We shape a tailored styling plan with concepts, flow, and clear pricing.",
    },
    {
      step: "03",
      title: "Flawless delivery",
      detail: "Our team handles setup, styling, and pack-down so you can enjoy the day.",
    },
  ],
  seo: {
    title: "Wedding Planning & Coordination Manchester UK | Regal Knot Events",
    description:
      "Luxury wedding planning and decor in Manchester and the UK. Bespoke styling, ceremony arches, reception design and full coordination across Greater Manchester.",
    keywords:
      "wedding planning Manchester, wedding coordination UK, wedding decor Manchester, luxury wedding Manchester",
  },
};

export const eventManagementPage: ServicePageContent = {
  slug: "event-management",
  eyebrow: "Private Event Management",
  headline: "Private events styled",
  headlineAccent: "with luxury and personality",
  intro:
    "Birthdays, baby showers, anniversaries, and milestone celebrations — expertly styled with premium decor, custom themes, and flawless execution.",
  sectionTitle: "Celebrations that feel personal and polished",
  paragraphs: [
    "Whether you're planning an intimate dinner or a grand milestone party, we handle every styling detail so you can focus on your guests.",
    "Our team designs custom concepts, manages installation timelines, and delivers a premium finish that photographs beautifully and feels unforgettable in person.",
  ],
  highlights: [
    "Birthday and milestone styling",
    "Baby showers and intimate gatherings",
    "Custom themes and branded concepts",
    "Balloon, backdrop, and table styling",
    "Flexible packages for every budget",
  ],
  whatsappMessage: "Hi, I'd like to enquire about private event styling.",
  portfolioCategory: "Private Events",
  palette: ["oklch(0.32 0.06 300)", "oklch(0.8 0.08 85)"],
  process: [
    {
      step: "01",
      title: "Theme & brief",
      detail: "We capture your colour story, guest count, and must-have moments.",
    },
    {
      step: "02",
      title: "Styled concept",
      detail: "Mood boards, layout ideas, and a clear package that fits your budget.",
    },
    {
      step: "03",
      title: "Celebrate",
      detail: "We install, style, and reset so the celebration feels effortless.",
    },
  ],
  seo: {
    title: "Event Management Manchester UK | Private Events & Birthdays",
    description:
      "Premium private event management and styling in Manchester and the UK. Birthdays, baby showers, anniversaries and bespoke celebrations across the North West.",
    keywords:
      "event management Manchester, birthday party styling UK, private event decor UK, event styling Manchester",
  },
};

export const corporateEventsPage: ServicePageContent = {
  slug: "corporate-events",
  eyebrow: "Corporate Event Styling",
  headline: "Corporate events that",
  headlineAccent: "elevate your brand",
  intro:
    "Brand launches, awards evenings, galas, and corporate celebrations — styled with architectural installations, refined tablescapes, and professional delivery.",
  sectionTitle: "Professional styling for business events",
  paragraphs: [
    "First impressions matter. We create polished corporate environments that align with your brand identity and impress clients, teams, and stakeholders.",
    "From stage backdrops to VIP table styling, our Manchester-based team delivers on tight timelines with the reliability corporate events demand.",
  ],
  highlights: [
    "Brand launches and product reveals",
    "Awards evenings and galas",
    "Stage and focal-point installations",
    "VIP and conference table styling",
    "Professional setup and pack-down",
  ],
  whatsappMessage: "Hi, I'd like to enquire about corporate event styling.",
  portfolioCategory: "Corporate",
  palette: ["oklch(0.20 0.01 260)", "oklch(0.55 0.06 150)"],
  process: [
    {
      step: "01",
      title: "Brand briefing",
      detail: "We align on messaging, audience, venue constraints, and timelines.",
    },
    {
      step: "02",
      title: "Spatial design",
      detail: "Installations, focal points, and guest flow planned to professional standards.",
    },
    {
      step: "03",
      title: "On-brief delivery",
      detail: "Punctual setup, polished finish, and discreet pack-down after the event.",
    },
  ],
  seo: {
    title: "Corporate Events Manchester UK | Regal Knot Events",
    description:
      "Premium corporate event styling in Manchester and the UK. Brand launches, awards evenings, galas and business celebrations across Greater Manchester.",
    keywords:
      "corporate events Manchester UK, corporate event styling UK, brand launch decor, awards evening styling Manchester",
  },
};

export function servicePageJsonLd(content: ServicePageContent) {
  return {
    ...localBusinessJsonLd,
    "@type": ["LocalBusiness", "Service"],
    name: `${content.seo.title.split("|")[0]?.trim()} — Regal Knot Events`,
    description: content.seo.description,
    url: absoluteUrl(`/${content.slug}`),
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
      containedInPlace: { "@type": "Country", name: "United Kingdom" },
    },
    serviceType: content.eyebrow,
  };
}
