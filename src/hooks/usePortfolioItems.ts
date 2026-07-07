import { useQuery } from "@tanstack/react-query";

import { fetchPublishedPortfolio } from "@/lib/portfolio-api";

export function usePortfolioItems() {
  return useQuery({
    queryKey: ["portfolio"],
    queryFn: fetchPublishedPortfolio,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
