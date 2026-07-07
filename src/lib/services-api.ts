import type { Service } from "@/data/services";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchPublishedServices(): Promise<Service[]> {
  try {
    const response = await fetch(`${API_URL}/api/services?published=true`);

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as { items: Service[] };
    return data.items;
  } catch {
    return [];
  }
}
