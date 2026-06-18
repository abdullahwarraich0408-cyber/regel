import type { GalleryItem } from "@/data/gallery";
import { ZoomIn } from "lucide-react";

interface GalleryCardProps {
  item: GalleryItem;
  className?: string;
  index?: number;
}

export function GalleryCard({ item, className = "", index = 0 }: GalleryCardProps) {
  const [a, b] = item.palette;
  return (
    <figure
      className={`group relative overflow-hidden border border-border/50 bg-card shadow-soft transition-all duration-700 hover:-translate-y-3 hover:shadow-luxury ${className}`}
      style={{ borderRadius: '1.75rem' }}
    >
      <div
        className="relative h-full w-full transition-transform duration-1000 group-hover:scale-[1.06] ease-out"
        style={{
          background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
        }}
        role="img"
        aria-label={`${item.title} — placeholder. Replace with real event photo.`}
      >
        {/* Multi-layer overlay for premium look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.45),transparent_65%)]" />

        {/* Hover interaction layer */}
        <div className="absolute inset-0 bg-[oklch(0.32_0.06_300_/_0)] transition-all duration-700 group-hover:bg-[oklch(0.32_0.06_300_/_0.15)]" />

        {/* Hover zoom icon with pulse effect */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="rounded-full bg-gradient-to-br from-cream to-[oklch(0.92_0.025_50)] p-5 shadow-elegant transition-transform duration-300 group-hover:scale-110">
            <ZoomIn className="h-7 w-7 text-midnight" />
          </div>
        </div>

        {/* Premium content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-[oklch(0.88_0.09_85)] shadow-sm" />
            <div className="rounded-full bg-cream/85 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-midnight/95 backdrop-blur-md shadow-soft">
              {item.category}
            </div>
          </div>
          <div className="mt-5 font-display text-3xl leading-tight text-cream drop-shadow-xl">
            {item.title}
          </div>
        </div>
      </div>
    </figure>
  );
}
