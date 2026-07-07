const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export interface InstagramPost {
  id: string;
  shortcode: string;
  imageUrl: string;
  videoUrl?: string;
  caption: string;
  likes: number;
  url: string;
  isVideo: boolean;
  isReel?: boolean;
}

export interface InstagramFeed {
  posts: InstagramPost[];
  username: string;
  followerCount: number;
  stale?: boolean;
}

export async function fetchInstagramFeed(): Promise<InstagramFeed> {
  try {
    const response = await fetch(`${API_URL}/api/instagram/feed`);

    if (!response.ok) {
      return { posts: [], username: "regal.knot.events", followerCount: 0 };
    }

    return (await response.json()) as InstagramFeed;
  } catch {
    return { posts: [], username: "regal.knot.events", followerCount: 0 };
  }
}
