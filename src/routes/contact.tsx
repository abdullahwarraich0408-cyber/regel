import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, Instagram, Facebook, Mail, MessageCircle } from "lucide-react";

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
              <p className="max-w-xl text-lg leading-relaxed text-foreground/80 text-balance">
                For event enquiries, the fastest way to get a tailored response is via our booking form.
                For everything else, our details are below.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-base font-semibold hover:brightness-110 shadow-luxury hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 px-7 h-12"
              >
                {siteConfig.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300"
              >
                <Mail className="h-4 w-4" /> Email us
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
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
