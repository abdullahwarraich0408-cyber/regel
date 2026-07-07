import { localBusinessJsonLd } from "@/lib/seo/json-ld";

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
  seo: {
    title: "Wedding Planning Manchester | Regal Knot Events",
    description:
      "Premium wedding planning and decor in Manchester. Bespoke styling, ceremony arches, reception design and full coordination across Greater Manchester.",
    keywords:
      "wedding planning Manchester, wedding decor Manchester, wedding styling UK, luxury wedding Manchester",
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
  seo: {
    title: "Event Management Manchester | Private Events & Birthdays",
    description:
      "Premium private event management and styling in Manchester. Birthdays, baby showers, anniversaries and bespoke celebrations across the North West.",
    keywords:
      "event management Manchester, birthday party styling, private event decor UK, event styling Manchester",
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
  seo: {
    title: "Corporate Events Manchester | Regal Knot Events",
    description:
      "Premium corporate event styling in Manchester. Brand launches, awards evenings, galas and business celebrations across Greater Manchester.",
    keywords:
      "corporate events Manchester, corporate event styling UK, brand launch decor, awards evening styling Manchester",
  },
};

export function servicePageJsonLd(content: ServicePageContent) {
  return {
    ...localBusinessJsonLd,
    "@type": ["LocalBusiness", "Service"],
    name: `${content.seo.title.split("|")[0]?.trim()} — Regal Knot Events`,
    description: content.seo.description,
    areaServed: {
      "@type": "AdministrativeArea",
      name: "Greater Manchester",
      containedInPlace: { "@type": "Country", name: "United Kingdom" },
    },
    serviceType: content.eyebrow,
  };
}
