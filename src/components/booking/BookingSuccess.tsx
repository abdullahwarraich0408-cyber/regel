import { Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BookingSuccess() {
  return (
    <section className="bg-gradient-warm py-32">
      <div className="container-prose mx-auto max-w-2xl text-center">
        <span className="grid mx-auto h-16 w-16 place-items-center rounded-full bg-gradient-gold text-charcoal shadow-gold">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h1 className="mt-8 font-display text-5xl leading-tight md:text-6xl text-balance">
          Your event request has been received.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Thank you. Regal Knot Events will contact you shortly to discuss availability, styling, and
          quote details. You can expect a personal reply within two working days.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            to="/"
            className="h-10 rounded-full px-8 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            Back to home
          </Link>
          <Link
            to="/services"
            className="h-10 rounded-full px-8 border border-border bg-background text-sm font-medium hover:border-[oklch(0.78_0.06_20)] hover:bg-background/70 backdrop-blur-sm transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
