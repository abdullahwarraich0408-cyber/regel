"use client";

import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Instagram,
  MapPin,
  Sparkles,
  Star,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { FinalConversionCTA } from "@/components/sections/FinalConversionCTA";
import { FAQSection } from "@/components/sections/FAQSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";
import { useInstagramFeed } from "@/hooks/useInstagramFeed";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import type { ServicePageContent } from "@/lib/seo/service-pages";

function HeroImageFrame({
  src,
  alt,
  palette,
  className,
  rotate,
}: {
  src?: string;
  alt: string;
  palette: [string, string];
  className?: string;
  rotate?: string;
}) {
  const [failed, setFailed] = useState(!src);

  return (
    <div
      className={`relative overflow-hidden rounded-[1.5rem] border border-border/40 shadow-elegant ${rotate ?? ""} ${className ?? ""}`}
      style={{
        background: `linear-gradient(145deg, ${palette[0]} 0%, ${palette[1]} 100%)`,
      }}
    >
      {!failed && src ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.45),transparent_55%)]" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-midnight/35 via-transparent to-transparent" />
    </div>
  );
}

export function ServiceLandingPage({ content }: { content: ServicePageContent }) {
  const { data: portfolioItems = [], isLoading: portfolioLoading } = usePortfolioItems();
  const { data: instagramData } = useInstagramFeed();
  const revealRef = useScrollReveal([portfolioItems.length, content.slug]);

  const relatedPortfolio = useMemo(
    () =>
      portfolioItems
        .filter((item) => item.category === content.portfolioCategory)
        .slice(0, 6),
    [portfolioItems, content.portfolioCategory],
  );

  const heroImages = useMemo(() => {
    const fromPortfolio = relatedPortfolio
      .flatMap((item) => [item.imageUrl, ...(item.gallery ?? [])])
      .filter(Boolean) as string[];

    const fromInstagram = (instagramData?.posts ?? [])
      .map((post) => post.imageUrl)
      .filter(Boolean);

    const combined = [...new Set([...fromPortfolio, ...fromInstagram])];
    return [combined[0], combined[1], combined[2]];
  }, [relatedPortfolio, instagramData?.posts]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-70"
            style={{
              background: `linear-gradient(135deg, ${content.palette[0]}, ${content.palette[1]})`,
            }}
          />
          <div className="absolute -right-32 bottom-0 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.88_0.09_85_/_0.22)] blur-3xl" />
        </div>

        <div className="container-prose relative grid items-center gap-12 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-20">
          <div>
            <span className="eyebrow">{content.eyebrow}</span>
            <h1 className="mt-4 max-w-xl font-display text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl md:text-6xl">
              {content.headline}
              <span className="mt-1 block text-dusty-rose italic">{content.headlineAccent}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              {content.intro}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/booking"
                onClick={() => trackConversion("availability_click", { page: content.slug })}
                className="inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-7 text-sm font-semibold text-cream shadow-luxury transition-all hover:brightness-110"
              >
                {siteConfig.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl(content.whatsappMessage)}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackConversion("whatsapp_click", { page: content.slug })}
                className="inline-flex h-12 min-h-[48px] items-center gap-2 rounded-full border border-border/70 bg-background/80 px-7 text-sm font-semibold backdrop-blur-sm transition-all hover:border-dusty-rose/50"
              >
                <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                {siteConfig.cta.whatsapp}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-dusty-rose" />
                {siteConfig.serviceArea}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-soft-gold text-soft-gold" />
                {siteConfig.googleReviews.rating}.0 · {siteConfig.googleReviews.count}+ Google reviews
              </span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <HeroImageFrame
                src={heroImages[0]}
                alt={`${content.portfolioCategory} styling by Regal Knot Events`}
                palette={content.palette}
                className="aspect-[3/4] col-span-1 row-span-2 min-h-[18rem] sm:min-h-[22rem]"
                rotate="-rotate-1"
              />
              <HeroImageFrame
                src={heroImages[1]}
                alt={`${content.portfolioCategory} detail`}
                palette={[content.palette[1], content.palette[0]]}
                className="aspect-square"
                rotate="rotate-2"
              />
              <HeroImageFrame
                src={heroImages[2]}
                alt={`${content.portfolioCategory} celebration`}
                palette={content.palette}
                className="aspect-[4/5]"
                rotate="-rotate-2"
              />
            </div>
            <div className="absolute -bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border/50 bg-background/95 px-4 py-2 text-xs font-semibold shadow-elegant backdrop-blur-md sm:left-6 sm:translate-x-0">
              <Sparkles className="h-3.5 w-3.5 text-soft-gold" />
              Real events · Manchester & UK
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border/40 bg-card/60">
        <div className="container-prose grid grid-cols-2 gap-6 py-8 md:grid-cols-4 md:gap-4 md:py-10">
          {siteConfig.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="font-display text-3xl text-deep-plum md:text-4xl">{stat.value}</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story + deliverables */}
      <section ref={revealRef} className="py-16 md:py-24">
        <div className="container-prose grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="reveal-on-scroll">
            <span className="eyebrow">The Regal Knot difference</span>
            <h2 className="mt-4 font-display text-3xl leading-tight md:text-5xl">
              {content.sectionTitle}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              {content.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/portfolio"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-deep-plum hover:text-dusty-rose"
              >
                Browse real events
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-dusty-rose"
              >
                <Instagram className="h-4 w-4" />
                @{siteConfig.instagram.username}
              </a>
            </div>
          </div>

          <div className="reveal-on-scroll reveal-delay-100 overflow-hidden rounded-[1.75rem] border border-border/60 bg-card shadow-elegant">
            <div
              className="border-b border-border/40 px-7 py-6"
              style={{
                background: `linear-gradient(120deg, ${content.palette[0]} 0%, color-mix(in oklab, ${content.palette[1]} 35%, white) 100%)`,
              }}
            >
              <h3 className="font-display text-2xl text-midnight">What we deliver</h3>
              <p className="mt-1 text-sm text-midnight/65">
                Everything included for a calm, polished celebration.
              </p>
            </div>
            <ul className="space-y-1 p-4 sm:p-5">
              {content.highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl px-3 py-3 text-sm text-foreground/85 transition-colors hover:bg-muted/40"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-gold text-midnight">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-border/50 px-7 py-5">
              <Link
                to="/booking"
                onClick={() =>
                  trackConversion("availability_click", { page: `${content.slug}_deliverables` })
                }
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-midnight text-sm font-semibold text-cream transition-all hover:bg-deep-plum"
              >
                {siteConfig.cta.getQuote}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-gradient-to-b from-muted/25 to-background py-16 md:py-20">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow mx-auto">How it works</span>
            <h2 className="mt-4 font-display text-3xl md:text-4xl">
              A calm path from enquiry to celebration
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {content.process.map((item, index) => (
              <article
                key={item.step}
                className="relative rounded-[1.5rem] border border-border/60 bg-card p-7 shadow-soft"
              >
                <span className="font-display text-4xl text-soft-gold/80">{item.step}</span>
                <h3 className="mt-3 font-display text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                {index < content.process.length - 1 ? (
                  <span className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-border md:block" />
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Related real events */}
      <section className="py-16 md:py-24">
        <div className="container-prose">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Real event stories</span>
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                {content.portfolioCategory} we&apos;ve brought to life
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                Proof from real celebrations — not stock imagery. Follow more on Instagram or explore
                the full portfolio.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full border border-border/70 px-5 text-sm font-semibold hover:border-dusty-rose"
              >
                <Instagram className="h-4 w-4" />
                Follow on Instagram
              </a>
              <Link
                to="/portfolio"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-full bg-midnight px-5 text-sm font-semibold text-cream"
              >
                Full portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {portfolioLoading ? (
            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="mb-5 aspect-[4/5] animate-pulse break-inside-avoid rounded-[1.75rem] bg-muted"
                />
              ))}
            </div>
          ) : relatedPortfolio.length > 0 ? (
            <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
              {relatedPortfolio.map((item, index) => (
                <div key={item.id} className="mb-5 break-inside-avoid">
                  <GalleryCard
                    item={item}
                    className={index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}
                    index={index}
                    linkToDetail
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-10 rounded-[1.75rem] border border-dashed border-border/70 px-6 py-14 text-center">
              <p className="font-display text-2xl">See our latest work on Instagram</p>
              <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
                Portfolio stories for {content.portfolioCategory.toLowerCase()} are being curated.
                Meanwhile, @{siteConfig.instagram.username} shows live setups and behind-the-scenes.
              </p>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border/70 px-6 text-sm font-semibold hover:border-dusty-rose"
              >
                <Instagram className="h-4 w-4" />
                Open Instagram
              </a>
            </div>
          )}
        </div>
      </section>

      <BookingCTA />
      <FAQSection limit={4} />
      <FinalConversionCTA source={`${content.slug}_cta`} />
    </>
  );
}
