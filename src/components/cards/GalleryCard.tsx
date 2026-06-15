import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
  className?: string;
}

export function GalleryCard({ item, className = "" }: GalleryCardProps) {
  const [a, b] = item.palette;
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant ${className}`}
    >
      <div
        className="relative h-full w-full"
        style={{
          background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
        }}
        role="img"
        aria-label={`${item.title} — placeholder. Replace with real event photo.`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_55%)]" />
        <div className="absolute inset-0 flex items-end p-5">
          <div className="rounded-xl bg-background/70 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-foreground/80 backdrop-blur">
            Replace with real event photo
          </div>
        </div>
      </div>
      <figcaption className="flex items-center justify-between gap-4 p-5">
        <div>
          <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            {item.category}
          </div>
          <div className="mt-1 font-display text-lg leading-tight">{item.title}</div>
        </div>
      </figcaption>
    </figure>
  );
}
