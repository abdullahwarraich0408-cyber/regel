"use client";

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ZoomIn } from "lucide-react";

import type { GalleryItem } from "@/data/gallery";

interface GalleryCardProps {
  item: GalleryItem;
  className?: string;
  index?: number;
  linkToDetail?: boolean;
}

export function GalleryCard({
  item,
  className = "",
  index = 0,
  linkToDetail = false,
}: GalleryCardProps) {
  const [a, b] = item.palette;
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = Boolean(item.imageUrl) && !imageFailed;
  const detailPath = `/portfolio/${item.slug ?? item.id}`;

  const content = (
    <>
      <div className="relative h-full w-full transition-transform duration-1000 group-hover:scale-[1.06] ease-out">
        {showImage ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="h-full w-full object-cover"
            loading={index > 2 ? "lazy" : "eager"}
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
            }}
            role="img"
            aria-label={item.title}
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.45),transparent_65%)]" />
        <div className="absolute inset-0 bg-[oklch(0.32_0.06_300_/_0)] transition-all duration-700 group-hover:bg-[oklch(0.32_0.06_300_/_0.15)]" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="rounded-full bg-gradient-to-br from-cream to-[oklch(0.92_0.025_50)] p-5 shadow-elegant transition-transform duration-300 group-hover:scale-110">
            <ZoomIn className="h-7 w-7 text-midnight" />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-soft-gold shadow-sm" />
            <div className="rounded-full bg-cream/85 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.25em] text-midnight/95 backdrop-blur-md shadow-soft">
              {item.category}
            </div>
          </div>
          <div className="mt-5 font-display text-3xl leading-tight text-cream drop-shadow-xl">
            {item.title}
          </div>
          {item.clientName ? (
            <p className="mt-2 text-sm text-cream/85">{item.clientName}</p>
          ) : null}
        </div>
      </div>
    </>
  );

  const figureClass = `group relative overflow-hidden border border-border/50 bg-card shadow-soft transition-all duration-700 hover:-translate-y-3 hover:shadow-luxury ${className}`;

  if (linkToDetail) {
    return (
      <Link to={detailPath} className={`block ${figureClass}`} style={{ borderRadius: "1.75rem" }}>
        {content}
      </Link>
    );
  }

  return (
    <figure className={figureClass} style={{ borderRadius: "1.75rem" }}>
      {content}
    </figure>
  );
}
