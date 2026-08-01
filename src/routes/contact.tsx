import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Instagram, Facebook } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const title = "Contact — Regal Knot Events";
const description = `Get in touch with Regal Knot Events — premium event decor and styling in Manchester. Email ${siteConfig.email} or send a booking enquiry.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-[oklch(0.88_0.09_85_/_0.3)] to-[oklch(0.72_0.07_70_/_0.2)] blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[oklch(0.905_0.015_65_/_0.4)] blur-2xl" />
        </div>

        <div className="container-prose relative py-10 md:py-14 lg:py-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="eyebrow">Contact</span>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Let's plan
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic">
                  something beautiful
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-balance text-foreground/80">
                Send a short enquiry below — name, phone, event type, and date — or message us on
                WhatsApp for a faster reply.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#enquire"
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] px-7 text-base font-semibold text-cream shadow-luxury transition-all duration-300 hover:scale-[1.02] hover:brightness-110 hover:shadow-elegant"
              >
                Send enquiry
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/booking"
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70"
              >
                {siteConfig.cta.primary}
              </Link>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 text-base font-medium backdrop-blur-sm transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" /> WhatsApp
              </a>
            </div>

            {/* Social links */}
            <div className="mt-6 flex gap-3">
              {siteConfig.social.instagram && (
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-background/90 hover:border-[oklch(0.78_0.06_20)] hover:text-[oklch(0.78_0.06_20)] transition-all shadow-soft hover:shadow-elegant"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {siteConfig.social.facebook && (
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="grid h-12 w-12 place-items-center rounded-full border border-border/60 bg-background/90 hover:border-[oklch(0.78_0.06_20)] hover:text-[oklch(0.78_0.06_20)] transition-all shadow-soft hover:shadow-elegant"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <FAQSection limit={4} />
    </>
  );
}
