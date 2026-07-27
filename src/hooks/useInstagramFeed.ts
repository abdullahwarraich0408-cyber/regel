import { useQuery } from "@tanstack/react-query";
import { fetchInstagramFeed } from "@/lib/instagram-api";

export function useInstagramFeed() {
  return useQuery({
    queryKey: ["instagram-feed", import.meta.env.VITE_API_URL ?? "http://localhost:3001"],
    queryFn: fetchInstagramFeed,
    staleTime: 1000 * 60 * 2,
    refetchOnWindowFocus: true,
  });
}
