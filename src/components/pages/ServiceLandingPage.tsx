import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { FinalConversionCTA } from "@/components/sections/FinalConversionCTA";
import { whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import type { ServicePageContent } from "@/lib/seo/service-pages";

export function ServiceLandingPage({ content }: { content: ServicePageContent }) {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl" />
        </div>
        <div className="container-prose relative py-14 md:py-20">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl">
            {content.headline}
            <span className="block text-dusty-rose italic">{content.headlineAccent}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
            {content.intro}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/booking"
              onClick={() => trackConversion("availability_click", { page: content.slug })}
              className="inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-7 text-sm font-semibold text-cream shadow-luxury"
            >
              Check Availability
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappUrl(content.whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackConversion("whatsapp_click", { page: content.slug })}
              className="inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full border border-border/70 bg-background/70 px-7 text-sm font-semibold backdrop-blur-sm"
            >
              <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="font-display text-3xl md:text-4xl">{content.sectionTitle}</h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {content.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          <div className="rounded-[1.75rem] border border-border/60 bg-card p-8 shadow-soft">
            <h3 className="font-display text-2xl">What we deliver</h3>
            <ul className="mt-6 space-y-3">
              {content.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/85">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-sage" />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/portfolio"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-deep-plum hover:text-dusty-rose"
            >
              View related portfolio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <FinalConversionCTA />
    </>
  );
}
