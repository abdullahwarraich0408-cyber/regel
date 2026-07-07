import { useQuery } from "@tanstack/react-query";
import { fetchPublishedTestimonials } from "@/lib/testimonials-api";

export function useTestimonials() {
  return useQuery({
    queryKey: ["testimonials"],
    queryFn: fetchPublishedTestimonials,
  });
}
