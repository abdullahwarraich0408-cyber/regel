import { useQuery } from "@tanstack/react-query";

import { fetchPublishedServices } from "@/lib/services-api";

export function useServices() {
  return useQuery({
    queryKey: ["services"],
    queryFn: fetchPublishedServices,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
}
