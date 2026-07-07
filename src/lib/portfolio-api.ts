const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";



import type { GalleryItem } from "@/data/gallery";



interface PortfolioResponse {

  items: GalleryItem[];

}



interface PortfolioItemResponse {

  item: GalleryItem;

}



export function resolvePortfolioMediaUrl(url: string) {

  if (!url) return "";

  if (url.startsWith("http")) return url;

  return `${API_URL}${url.startsWith("/") ? url : `/${url}`}`;

}



function normalizePortfolioItem(item: GalleryItem): GalleryItem {

  return {

    ...item,

    imageUrl: resolvePortfolioMediaUrl(item.imageUrl ?? ""),

    gallery: (item.gallery ?? []).map(resolvePortfolioMediaUrl).filter(Boolean),

  };

}



export async function fetchPublishedPortfolio(): Promise<GalleryItem[]> {

  try {

    const response = await fetch(`${API_URL}/api/portfolio?published=true`);



    if (!response.ok) {

      return [];

    }



    const data = (await response.json()) as PortfolioResponse;

    return data.items.map(normalizePortfolioItem);

  } catch {

    return [];

  }

}



export async function fetchPortfolioItem(idOrSlug: string): Promise<GalleryItem | null> {

  try {

    const response = await fetch(`${API_URL}/api/portfolio/${idOrSlug}`);



    if (!response.ok) {

      return null;

    }



    const data = (await response.json()) as PortfolioItemResponse;

    if (data.item.published === false) {

      return null;

    }

    return normalizePortfolioItem(data.item);

  } catch {

    return null;

  }

}

