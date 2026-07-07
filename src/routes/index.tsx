import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { InstagramSection } from "@/components/sections/InstagramSection";
import { PremiumServicesOverview } from "@/components/sections/PremiumServicesOverview";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { FinalConversionCTA } from "@/components/sections/FinalConversionCTA";
import { siteConfig } from "@/lib/site-config";

const title = `${siteConfig.name} — Premium Wedding & Event Styling in Manchester`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      {
        name: "description",
        content:
          "Premium wedding and event coordination in Manchester. Check availability, view real event portfolio, and enquire via WhatsApp.",
      },
      { property: "og:title", content: title },
      {
        property: "og:description",
        content: siteConfig.description,
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
      <TestimonialsSection />
      <TrustSection />
      <FinalConversionCTA />
    </>
  );
}
