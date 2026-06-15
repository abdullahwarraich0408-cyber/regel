import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export function BookingCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-prose">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-charcoal px-8 py-16 text-ivory shadow-elegant md:px-16 md:py-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/30 blur-3xl" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blush/20 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">
                Now booking
              </span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-ivory md:text-5xl text-balance">
                Ready to design a celebration worth remembering?
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/75">
                Share your date, venue, and vision. We will return with availability, ideas, and a
                tailored styling plan within two working days.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Button asChild size="lg" className="rounded-full bg-gradient-gold px-8 text-charcoal hover:opacity-95">
                <Link to="/booking">
                  {siteConfig.cta.primary}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-ivory/30 bg-transparent text-ivory hover:bg-ivory/10 hover:text-ivory"
              >
                <Link to="/contact">Speak to us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
