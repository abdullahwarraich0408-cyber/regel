import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { GalleryPreview } from "@/components/sections/GalleryPreview";
import { PackagesSection } from "@/components/sections/PackagesSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { siteConfig } from "@/lib/site-config";

const title = `${siteConfig.name} — Premium Event Decor in Manchester`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: title },
      { property: "og:description", content: siteConfig.description },
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
      <ServicesSection limit={6} />
      <ProcessSection />
      <GalleryPreview />
      <PackagesSection />
      <BookingCTA />
      <FAQSection limit={5} />
      <ContactSection />
    </>
  );
}
