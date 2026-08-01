import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function BookingCTA() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="overflow-hidden py-16 md:py-20">
      <div className="container-prose">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] px-8 py-16 text-cream shadow-elegant reveal-on-scroll md:px-16 md:py-20">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[oklch(0.88_0.09_85_/_0.3)] blur-3xl transition-transform duration-1000" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-[oklch(0.78_0.06_20_/_0.2)] blur-3xl transition-transform duration-1000" />

          <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div className="space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[oklch(0.88_0.09_85)]">
                Now booking
              </span>
              <h2 className="font-display text-4xl leading-tight text-balance text-cream md:text-5xl">
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
                onClick={() =>
                  trackConversion("availability_click", { location: "mid_page_cta" })
                }
                className="inline-flex h-auto w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold px-8 py-4 text-sm font-semibold text-midnight shadow-elegant transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 md:w-auto"
              >
                {siteConfig.cta.primary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                onClick={() =>
                  trackConversion("whatsapp_click", { location: "mid_page_cta" })
                }
                className="inline-flex h-auto w-full items-center justify-center gap-2 whitespace-nowrap rounded-full border border-cream/30 bg-transparent px-8 py-4 text-sm font-semibold text-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-cream/80 hover:bg-cream/10 md:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {siteConfig.cta.whatsapp}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
