const envPhone = import.meta.env.VITE_PHONE?.trim();
const envWhatsapp = import.meta.env.VITE_WHATSAPP?.trim();
const envSiteUrl = import.meta.env.VITE_SITE_URL?.trim();
const envOgImage = import.meta.env.VITE_OG_IMAGE?.trim();

export const siteConfig = {
  name: "Regal Knot Events",
  tagline: "Elegant event decor for unforgettable celebrations",
  description:
    "Premium wedding and event coordination across Manchester and the UK — bespoke styling, seamless setup, and unforgettable celebrations.",
  location: "Manchester, United Kingdom",
  serviceArea: "Greater Manchester & the North West",
  email: "hello@regalknotevents.co.uk",
  phone: envPhone || "+44 0000 000000",
  whatsapp: envWhatsapp || envPhone || "+44 0000 000000",
  siteUrl: (envSiteUrl || "https://regel-omega.vercel.app").replace(/\/$/, ""),
  ogImage: envOgImage || "",
  social: {
    instagram: "https://www.instagram.com/regal.knot.events",
    facebook: "https://facebook.com/regalknotevents",
    tiktok: "",
  },
  instagram: {
    username: "regal.knot.events",
  },
  googleReviews: {
    url: "https://g.page/regalknotevents/review",
    rating: 5,
    count: 48,
    placeName: "Regal Knot Events",
  },
  cta: {
    primary: "Check Availability",
    secondary: "Book a Consultation",
    getQuote: "Get Quote",
    whatsapp: "Chat on WhatsApp",
  },
  trustBadges: ["Weddings", "Private Events", "Corporate Events"],
  stats: [
    { value: "150+", label: "Events Delivered", detail: "Weddings, celebrations & corporate events" },
    { value: "8+", label: "Years Experience", detail: "Trusted across Greater Manchester" },
    { value: "100%", label: "Client Satisfaction", detail: "Calm, flawless delivery every time" },
    { value: "50+", label: "Partner Vendors", detail: "Florists, venues & premium suppliers" },
  ],
  heroHighlights: [
    "Premium wedding & event coordination",
    "Manchester & North West coverage",
    "Setup, styling & pack-down included",
  ],
  premiumServices: [
    {
      slug: "wedding-planning",
      title: "Weddings",
      description:
        "Romantic receptions, ceremony styling, and bespoke wedding decor tailored to your love story.",
      icon: "heart",
      palette: ["oklch(0.95 0.03 85)", "oklch(0.78 0.06 20)"] as [string, string],
      match: ["wedding"],
    },
    {
      slug: "event-management",
      title: "Private Events & Birthdays",
      description:
        "Milestone birthdays, baby showers, and intimate celebrations styled with luxury and personality.",
      icon: "cake",
      palette: ["oklch(0.32 0.06 300)", "oklch(0.8 0.08 85)"] as [string, string],
      match: ["birthday", "baby", "party", "private", "shower"],
    },
    {
      slug: "corporate-events",
      title: "Corporate Events",
      description:
        "Brand launches, awards evenings, and corporate gatherings with polished, professional styling.",
      icon: "briefcase",
      palette: ["oklch(0.20 0.01 260)", "oklch(0.55 0.06 150)"] as [string, string],
      match: ["corporate", "brand", "business"],
    },
  ],
  analytics: {
    gtagId: import.meta.env.VITE_GTAG_ID ?? "",
  },
};

export type SiteConfig = typeof siteConfig;

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  const normalised = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalised}`;
}

export function whatsappUrl(message?: string) {
  const phone = siteConfig.whatsapp.replace(/\D/g, "");
  const text = message
    ? `&text=${encodeURIComponent(message)}`
    : `&text=${encodeURIComponent("Hi Regal Knot Events, I'd like to enquire about an event.")}`;
  return `https://wa.me/${phone}${text}`;
}
