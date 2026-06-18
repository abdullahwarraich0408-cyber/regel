import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function BookingCTA() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="py-16 md:py-20 overflow-hidden">
      <div className="container-prose">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] px-8 py-16 text-cream shadow-elegant md:px-16 md:py-20 reveal-on-scroll">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[oklch(0.88_0.09_85_/_0.3)] blur-3xl transition-transform duration-1000" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[oklch(0.78_0.06_20_/_0.2)] blur-3xl transition-transform duration-1000" />

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[oklch(0.88_0.09_85)]">
                Now booking
              </span>
              <h2 className="font-display text-4xl leading-tight text-cream md:text-5xl text-balance">
                Ready to design a celebration worth remembering?
              </h2>
              <p className="max-w-xl text-base leading-relaxed text-cream/75">
                Share your date, venue, and vision. We will return with availability, ideas, and a
                tailored styling plan within two working days.
              </p>
            </div>
            <div className="flex flex-col gap-3 md:items-end">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold text-midnight text-sm font-semibold hover:brightness-110 shadow-elegant px-8 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
              >
                {siteConfig.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cream/30 bg-transparent text-cream text-sm font-semibold hover:bg-cream/10 hover:border-cream/80 px-8 py-4 h-auto transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
              >
                Speak to us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
