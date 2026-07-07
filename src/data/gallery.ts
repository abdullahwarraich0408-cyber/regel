export interface GalleryItem {
  id: string;
  slug?: string;
  category: "Weddings" | "Private Events" | "Corporate";
  title: string;
  palette: [string, string];
  imageUrl?: string;
  gallery?: string[];
  clientName?: string;
  description?: string;
  highlights?: string[];
  instagramUrl?: string;
  published?: boolean;
  sortOrder?: number;
}

export const galleryCategories = ["All", "Weddings", "Private Events", "Corporate"] as const;

export type GalleryCategory = (typeof galleryCategories)[number];
