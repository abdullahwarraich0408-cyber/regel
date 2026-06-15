import { createFileRoute } from "@tanstack/react-router";
import { BookingWizard } from "@/components/booking/BookingWizard";

const title = "Plan My Event — Regal Knot Events";
const description =
  "Send your event styling enquiry to Regal Knot Events. Share your date, venue, theme, and decor needs and we will reply with availability and a tailored quote.";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <>
      <section className="bg-gradient-warm pb-12 pt-24 md:pt-32">
        <div className="container-prose mx-auto max-w-3xl text-center">
          <span className="eyebrow">Book Regal Knot Events</span>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl text-balance">
            Tell us about your celebration.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            A quick five-step form. We will return with availability, styling ideas, and a tailored
            quote within two working days.
          </p>
        </div>
      </section>

      <section className="pb-24 pt-12 md:pb-32">
        <div className="container-prose">
          <BookingWizard />
        </div>
      </section>
    </>
  );
}
