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
  const baseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

  try {
    const response = await fetch(`${baseUrl}/api/instagram/feed`);

    if (!response.ok) {
      console.warn("[instagram] feed request failed", response.status, baseUrl);
      return { posts: [], username: "regal.knot.events", followerCount: 0 };
    }

    return (await response.json()) as InstagramFeed;
  } catch (error) {
    console.warn("[instagram] feed request error", baseUrl, error);
    return { posts: [], username: "regal.knot.events", followerCount: 0 };
  }
}
