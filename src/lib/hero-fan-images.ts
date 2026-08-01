const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

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

/**
 * Build hero fan cards from Instagram + portfolio media only.
 * Missing slots keep an empty imageUrl so the UI shows the brand gradient
 * instead of stock photography.
 */
export function buildHeroFanImages(
  primaryUrls: string[],
  secondaryUrls: string[],
): Array<(typeof heroFanLayout)[number] & { imageUrl: string; fallbackUrl: string }> {
  const collected = [...primaryUrls, ...secondaryUrls]
    .map((url) => resolveHeroImageUrl(url))
    .filter(Boolean);

  const unique = [...new Set(collected)];

  return heroFanLayout.map((layout, index) => {
    const imageUrl = unique[index] ?? "";
    // Prefer another real image as fallback when the primary fails to load
    const fallbackUrl = unique[(index + 1) % unique.length] ?? unique[0] ?? "";

    return {
      ...layout,
      imageUrl,
      fallbackUrl: fallbackUrl !== imageUrl ? fallbackUrl : "",
    };
  });
}
