export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  event: string;
  rating: number;
  source: "client" | "google";
}

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchPublishedTestimonials(): Promise<Testimonial[]> {
  try {
    const response = await fetch(`${API_URL}/api/testimonials?published=true`);
    if (!response.ok) {
      return [];
    }
    const data = (await response.json()) as { items: Testimonial[] };
    return data.items;
  } catch {
    return [];
  }
}
