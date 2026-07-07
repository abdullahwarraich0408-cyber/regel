import { useQuery } from "@tanstack/react-query";
import { fetchInstagramFeed } from "@/lib/instagram-api";

export function useInstagramFeed() {
  return useQuery({
    queryKey: ["instagram-feed"],
    queryFn: fetchInstagramFeed,
    staleTime: 1000 * 60 * 30,
    refetchOnWindowFocus: false,
  });
}
