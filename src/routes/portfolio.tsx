import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { galleryItems, type GalleryItem } from "@/data/gallery";
import { GalleryCard } from "@/components/cards/GalleryCard";
import { Button } from "@/components/ui/button";

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

const categories = ["All", "Weddings", "Birthdays", "Baby Showers", "Balloon Installations", "Romantic Setups", "Custom Backdrops"] as const;

function PortfolioPage() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const items = useMemo<GalleryItem[]>(
    () => (filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter)),
    [filter]
  );

  return (
    <>
      <section className="bg-gradient-warm pb-12 pt-24 md:pt-32">
        <div className="container-prose max-w-3xl">
          <span className="eyebrow">Portfolio</span>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl text-balance">
            A gallery of styled moments.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Below is a preview layout for real event photography. Each card is a placeholder — once
            your photos are added, this gallery will showcase the styling we have created for clients
            across Manchester.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-prose">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = filter === c;
              return (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active ? "border-accent bg-accent/15 text-foreground" : "border-border bg-background hover:border-accent/50"
                  }`}
                  aria-pressed={active}
                >
                  {c}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <GalleryCard key={item.id} item={item} className="aspect-[4/5]" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-prose">
          <div className="mx-auto max-w-2xl rounded-[2rem] border border-border bg-card p-10 text-center shadow-soft md:p-14">
            <h2 className="font-display text-4xl leading-tight md:text-5xl text-balance">
              Have a vision like this? Let us style it for you.
            </h2>
            <p className="mt-5 text-base text-muted-foreground">
              Share your date, theme, and venue — we will design the rest.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/booking">Plan my event</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link to="/services">View services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
