import { siteConfig } from "@/lib/site-config";

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "#regal-knot-events",
  name: siteConfig.name,
  description: siteConfig.description,
  areaServed: siteConfig.serviceArea,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Manchester",
    addressRegion: "Greater Manchester",
    addressCountry: "GB",
  },
  email: siteConfig.email,
  telephone: siteConfig.phone,
  sameAs: [siteConfig.social.instagram, siteConfig.social.facebook].filter(Boolean),
  url: "/",
  priceRange: "££ – ££££",
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Event Decor & Styling",
    itemListElement: [
      "Wedding decor",
      "Birthday decor",
      "Baby shower decor",
      "Party and private event decor",
      "Custom theme styling",
      "Balloon decoration",
      "Backdrops",
      "Table settings",
      "Floral arrangements",
    ].map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s } })),
  },
};

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
