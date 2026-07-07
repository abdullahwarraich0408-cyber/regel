import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { galleryCategories, type GalleryItem } from "@/data/gallery";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { usePortfolioItems } from "@/hooks/usePortfolioItems";
import { siteConfig } from "@/lib/site-config";

const title = "Portfolio — Regal Knot Events";
const description =
  "A gallery of premium event setups by Regal Knot Events — weddings, birthdays, baby showers, balloon installations, romantic restaurant setups and bespoke backdrops.";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/portfolio" },
    ],
    links: [{ rel: "canonical", href: "/portfolio" }],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof galleryCategories)[number]>("All");
  const { data: portfolioItems = [], isLoading } = usePortfolioItems();

  const items = useMemo<GalleryItem[]>(
    () =>
      filter === "All"
        ? portfolioItems
        : portfolioItems.filter((item) => item.category === filter),
    [filter, portfolioItems]
  );

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-[oklch(0.88_0.09_85_/_0.3)] to-[oklch(0.72_0.07_70_/_0.2)] blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[oklch(0.905_0.015_65_/_0.4)] blur-2xl" />
        </div>

        <div className="container-prose relative py-10 md:py-14 lg:py-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="eyebrow">Portfolio</span>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                A gallery of
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic">
                  styled moments
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-foreground/80 text-balance">
                Event styling work published from the admin panel appears here
                automatically.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-base font-semibold hover:brightness-110 shadow-luxury hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 px-7 h-12"
              >
                {siteConfig.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container-prose">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`rounded-full border px-4 py-2 text-sm transition-all ${
                    active
                      ? "border-[oklch(0.78_0.06_20)] bg-gradient-to-r from-[oklch(0.32_0.06_300_/_0.15)] to-[oklch(0.78_0.06_20_/_0.15)] text-[oklch(0.78_0.06_20)] font-semibold shadow-soft"
                      : "border-border bg-background hover:border-[oklch(0.78_0.06_20)] hover:shadow-soft"
                  }`}
                  aria-pressed={active}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {isLoading ? (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-[4/5] animate-pulse rounded-[1.75rem] bg-muted"
                />
              ))}
            </div>
          ) : items.length === 0 ? (
            <div className="mt-10 rounded-[1.75rem] border border-dashed border-border/70 bg-background/60 px-8 py-16 text-center">
              <p className="font-display text-3xl text-foreground/90">Portfolio coming soon</p>
              <p className="mt-3 max-w-md mx-auto text-foreground/65">
                New event styling work will appear here once it is published from the admin panel.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item, index) => (
                <GalleryCard key={item.id} item={item} className="aspect-[4/5]" index={index} linkToDetail />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-prose">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-border/50 bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] p-10 text-center md:p-16 text-cream shadow-luxury">
            <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[oklch(0.88_0.09_85_/_0.3)] blur-3xl" />
            <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[oklch(0.78_0.06_20_/_0.2)] blur-3xl" />
            <div className="relative">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-gold shadow-elegant">
                <span className="text-2xl">✨</span>
              </div>
              <h2 className="font-display text-4xl leading-tight md:text-5xl text-balance text-cream">
                Have a vision like this? Let us style it for you.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-cream/80 max-w-2xl mx-auto">
                Share your date, theme, and venue — we will design the rest.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold text-midnight text-base font-semibold hover:brightness-110 shadow-elegant px-10 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5"
                >
                  Plan my event
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cream/40 text-cream text-base font-semibold hover:bg-cream/10 hover:border-cream/80 px-10 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5"
                >
                  View services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
