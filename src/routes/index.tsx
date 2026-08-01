import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { PremiumServicesOverview } from "@/components/sections/PremiumServicesOverview";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FinalConversionCTA } from "@/components/sections/FinalConversionCTA";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

const title = `${siteConfig.name} — Luxury Wedding & Event Styling in Manchester, UK`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content:
          "Luxury wedding and event coordination in Manchester and the UK. Check availability, see real Instagram events, and enquire via WhatsApp.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: siteConfig.description,
      },
      { property: "og:url", content: absoluteUrl("/") },
      ...(siteConfig.ogImage
        ? [
            { property: "og:image", content: siteConfig.ogImage },
            { name: "twitter:image", content: siteConfig.ogImage },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: absoluteUrl("/") }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <InstagramSection />
      <PremiumServicesOverview />
      <PortfolioSection />
      <BookingCTA />
      <TestimonialsSection />
      <TrustSection />
      <FinalConversionCTA />
    </>
  );
}
