const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

/** Fallback event photography when API images are unavailable */
export const heroFallbackImages = [
  "https://images.unsplash.com/photo-1519741497659-963689620745?w=640&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1464366400600-664085567c68?w=640&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=640&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=640&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=640&q=80&auto=format&fit=crop",
] as const;

export const heroFanLayout = [
  {
    title: "Wedding styling",
    palette: ["oklch(0.95 0.03 85)", "oklch(0.78 0.06 20)"],
    rotate: "-rotate-6",
    size: "fan-outer" as const,
  },
  {
    title: "Private celebrations",
    palette: ["oklch(0.32 0.06 300)", "oklch(0.20 0.01 260)"],
    rotate: "-rotate-3",
    size: "fan-inner" as const,
  },
  {
    title: "Dream events",
    palette: ["oklch(0.975 0.005 90)", "oklch(0.32 0.06 300)"],
    rotate: "rotate-0",
    size: "fan-center" as const,
    featured: true,
  },
  {
    title: "Milestone moments",
    palette: ["oklch(0.78 0.06 20)", "oklch(0.8 0.08 85)"],
    rotate: "rotate-3",
    size: "fan-inner" as const,
  },
  {
    title: "Corporate events",
    palette: ["oklch(0.905 0.015 65)", "oklch(0.55 0.06 150)"],
    rotate: "rotate-6",
    size: "fan-outer" as const,
  },
];

export function resolveHeroImageUrl(url: string) {
  if (!url) return "";
  if (url.startsWith("http")) return url;
  return `${API_URL}${url}`;
}

export function buildHeroFanImages(
  primaryUrls: string[],
  secondaryUrls: string[],
): Array<(typeof heroFanLayout)[number] & { imageUrl: string; fallbackUrl: string }> {
  const collected = [...primaryUrls, ...secondaryUrls]
    .map((url) => resolveHeroImageUrl(url))
    .filter(Boolean);

  const unique = [...new Set(collected)];
  const used = new Set<string>();

  const pickFallback = (index: number) => {
    for (let offset = 0; offset < heroFallbackImages.length; offset += 1) {
      const candidate = heroFallbackImages[(index + offset) % heroFallbackImages.length];
      if (!used.has(candidate)) {
        used.add(candidate);
        return candidate;
      }
    }
    return heroFallbackImages[index];
  };

  return heroFanLayout.map((layout, index) => {
    const fallbackUrl = heroFallbackImages[index];
    // Last fan card: use a reliable fallback (5th Instagram thumbnails often fail or appear blank)
    let imageUrl =
      index === 4 ? pickFallback(index) : (unique[index] ?? pickFallback(index));

    if (imageUrl !== fallbackUrl && index !== 4) {
      used.add(imageUrl);
    }

    return {
      ...layout,
      imageUrl,
      fallbackUrl,
    };
  });
}
