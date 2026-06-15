import { createFileRoute } from "@tanstack/react-router";
import { BookingSuccess } from "@/components/booking/BookingSuccess";

const title = "Thank you — Regal Knot Events";
const description = "Your event request has been received. We will be in touch shortly.";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/thank-you" },
    ],
    links: [{ rel: "canonical", href: "/thank-you" }],
  }),
  component: BookingSuccess,
});
