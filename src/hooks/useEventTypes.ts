import { useQuery } from "@tanstack/react-query";

import { fetchPublishedEventTypes } from "@/lib/event-types-api";

export function useEventTypes() {
  return useQuery({
    queryKey: ["event-types"],
    queryFn: fetchPublishedEventTypes,
  });
}
