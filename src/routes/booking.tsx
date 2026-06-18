import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingWizard } from "@/components/booking/BookingWizard";
import { siteConfig } from "@/lib/site-config";

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
      <section className="relative overflow-hidden bg-gradient-hero">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-40 top-10 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-[oklch(0.85_0.07_20_/_0.35)] to-[oklch(0.7_0.08_310_/_0.25)] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[36rem] w-[36rem] rounded-full bg-gradient-to-tl from-[oklch(0.88_0.09_85_/_0.3)] to-[oklch(0.72_0.07_70_/_0.2)] blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[oklch(0.905_0.015_65_/_0.4)] blur-2xl" />
        </div>

        <div className="container-prose relative py-10 md:py-14 lg:py-16">
          <div className="space-y-6 mx-auto max-w-3xl text-center">
            <div className="space-y-4">
              <span className="eyebrow">Book Regal Knot Events</span>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-balance md:text-6xl lg:text-7xl">
                Tell us about your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[oklch(0.78_0.06_20)] to-[oklch(0.32_0.06_300)] italic">
                  celebration
                </span>
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-foreground/80 mx-auto">
                A quick five-step form. We will return with availability, styling ideas, and a tailored
                quote within two working days.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-base font-semibold hover:brightness-110 shadow-luxury hover:shadow-elegant hover:scale-[1.02] transition-all duration-300 px-7 h-12"
              >
                View Portfolio
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-border/60 bg-background/50 px-7 h-12 text-base font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
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
