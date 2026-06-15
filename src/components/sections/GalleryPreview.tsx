import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { GalleryCard } from "@/components/cards/GalleryCard";

export function GalleryPreview() {
  const preview = galleryItems.slice(0, 6);
  return (
    <section className="py-24 md:py-32">
      <div className="container-prose">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
              A glimpse of the moments we style.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-accent"
          >
            View full portfolio <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-5">
          {preview.map((item, i) => (
            <GalleryCard
              key={item.id}
              item={item}
              className={i === 0 ? "row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-square"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
