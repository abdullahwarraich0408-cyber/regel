import { Link } from "@tanstack/react-router";
import { ArrowRight, Expand } from "lucide-react";
import { galleryItems } from "@/data/gallery";
import { GalleryCard } from "@/components/cards/GalleryCard";

export function GalleryPreview() {
  const preview = galleryItems.slice(0, 6);
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/25">
      <div className="container-prose">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">Our Portfolio</span>
            <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
              Moments of
              <span className="block text-[oklch(0.78_0.06_20)]">pure elegance</span>
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-3 rounded-full border border-border/70 bg-background/90 px-8 py-4 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-gradient-to-r hover:from-[oklch(0.32_0.06_300)] hover:to-[oklch(0.78_0.06_20)] hover:text-cream hover:shadow-luxury"
          >
            View Full Portfolio
            <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>

        {/* Two-column grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {preview.map((item, i) => (
            <GalleryCard key={item.id} item={item} className="aspect-[16/10]" index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
