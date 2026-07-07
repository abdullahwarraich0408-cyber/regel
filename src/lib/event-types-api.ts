export interface EventTypeItem {
  id: string;
  name: string;
  icon: string;
  published: boolean;
  sortOrder: number;
}

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function fetchPublishedEventTypes(): Promise<EventTypeItem[]> {
  try {
    const response = await fetch(`${API_URL}/api/event-types?published=true`);

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as { items: EventTypeItem[] };
    return data.items;
  } catch {
    return [];
  }
}
