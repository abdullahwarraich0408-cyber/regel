import { createFileRoute, Link } from "@tanstack/react-router";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Button } from "@/components/ui/button";
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
      <section className="bg-gradient-warm pb-12 pt-24 md:pt-32">
        <div className="container-prose max-w-3xl">
          <span className="eyebrow">Contact</span>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl text-balance">
            Let's plan something beautiful.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            For event enquiries, the fastest way to get a tailored response is via our booking form.
            For everything else, our details are below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link to="/booking">
                {siteConfig.cta.primary} <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </a>
            </Button>
          </div>

          <div className="mt-6 flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </section>

      <ContactSection />
      <FAQSection limit={4} />
    </>
  );
}
