import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Instagram } from "lucide-react";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { galleryCategories } from "@/data/gallery";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { siteConfig } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

export function PortfolioSection() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const { data: portfolioItems = [], isLoading } = usePortfolioItems();
  const revealRef = useScrollReveal([isLoading, portfolioItems.length, filter]);

  const items = useMemo(
    () =>
      filter === "All"
        ? portfolioItems.slice(0, 6)
        : portfolioItems.filter((item) => item.category === filter).slice(0, 6),
    [filter, portfolioItems]
  );

  if (!isLoading && portfolioItems.length === 0) {
    return (
      <section ref={revealRef} className="bg-gradient-to-b from-background to-muted/20 py-16 md:py-24">
        <div className="container-prose text-center reveal-on-scroll">
          <span className="eyebrow mx-auto">Real Event Stories</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            Our latest work lives on Instagram
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-muted-foreground">
            We showcase real weddings and celebrations from @{siteConfig.instagram.username}.
            Follow for proof — then check availability for your date.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-border/70 bg-background px-6 text-sm font-semibold hover:border-dusty-rose"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
            </a>
            <Link
              to="/booking"
              onClick={() =>
                trackConversion("availability_click", { location: "portfolio_empty" })
              }
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full bg-midnight px-6 text-sm font-semibold text-cream"
            >
              {siteConfig.cta.primary}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={revealRef} className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container-prose">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end reveal-on-scroll">
          <div>
            <span className="eyebrow">Real Event Stories</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
              Celebrations we&apos;ve
              <span className="block text-dusty-rose">brought to life</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex h-12 min-h-[48px] items-center gap-3 rounded-full border border-border/70 bg-background/90 px-8 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-dusty-rose hover:shadow-luxury"
          >
            View Full Portfolio
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2 reveal-on-scroll">
          {galleryCategories.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setFilter(category)}
                className={`min-h-[44px] rounded-full border px-4 py-2 text-sm transition-all ${
                  active
                    ? "border-dusty-rose bg-gradient-to-r from-deep-plum/15 to-dusty-rose/15 font-semibold text-dusty-rose shadow-soft"
                    : "border-border bg-background hover:border-dusty-rose"
                }`}
                aria-pressed={active}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {isLoading
            ? Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="mb-5 aspect-[4/5] animate-pulse break-inside-avoid rounded-[1.75rem] bg-muted"
                />
              ))
            : items.map((item, index) => (
                <div key={item.id} className="mb-5 break-inside-avoid reveal-on-scroll">
                  <GalleryCard
                    item={item}
                    className={index % 3 === 1 ? "aspect-[3/4]" : "aspect-[4/5]"}
                    index={index}
                    linkToDetail
                  />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}
