import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Clock3,
  Instagram,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";

const nextSteps = [
  {
    icon: Clock3,
    title: "We review your details",
    detail: "Our team checks availability against your date and event type.",
  },
  {
    icon: MessageCircle,
    title: "Personal reply within 2 days",
    detail: "Expect a tailored response with ideas, next steps, and quote guidance.",
  },
  {
    icon: CalendarCheck,
    title: "Confirm & plan together",
    detail: "Once locked in, we refine the styling plan for a calm, flawless delivery.",
  },
];

export function BookingSuccess() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-[oklch(0.85_0.07_20_/_0.28)] blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-[32rem] w-[32rem] rounded-full bg-[oklch(0.88_0.09_85_/_0.25)] blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-[oklch(0.32_0.06_300_/_0.12)] blur-3xl" />
      </div>

      <div className="container-prose relative py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-gold text-midnight shadow-luxury ring-8 ring-soft-gold/15">
            <CheckCircle2 className="h-9 w-9" strokeWidth={2.25} />
          </div>

          <span className="eyebrow mx-auto mt-8">Request received</span>

          <h1 className="mt-4 font-display text-4xl leading-tight text-balance md:text-5xl lg:text-6xl">
            Thank you — we&apos;re excited to
            <span className="block text-dusty-rose italic">style your celebration</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Your enquiry is with the Regal Knot Events team. We&apos;ll be in touch shortly to
            discuss availability, styling, and quote details — usually within{" "}
            <span className="font-semibold text-foreground">two working days</span>.
          </p>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground shadow-soft backdrop-blur-sm">
            <Sparkles className="h-3.5 w-3.5 text-soft-gold" />
            Luxury event styling · Manchester &amp; UK
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 md:grid-cols-3">
          {nextSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <article
                key={step.title}
                className="rounded-[1.5rem] border border-border/60 bg-card/90 p-6 text-left shadow-soft backdrop-blur-sm"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-2xl text-soft-gold/70">
                    0{index + 1}
                  </span>
                </div>
                <h2 className="mt-5 font-display text-xl leading-snug">{step.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-[1.75rem] border border-border/60 bg-card p-7 shadow-elegant sm:p-8">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-3xl">Need a faster reply?</h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Message us on WhatsApp with your date and event type — we often respond even sooner.
            </p>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <a
              href={whatsappUrl(
                "Hi Regal Knot Events, I've just submitted an enquiry and would love to chat about my event.",
              )}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackConversion("whatsapp_click", { location: "thank_you_page" })
              }
              className="inline-flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 text-sm font-semibold text-white shadow-soft transition-all hover:brightness-110"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {siteConfig.cta.whatsapp}
            </a>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-full border border-border/70 bg-background px-7 text-sm font-semibold transition-all hover:border-dusty-rose"
            >
              <Instagram className="h-4 w-4" />
              Follow @{siteConfig.instagram.username}
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/"
            className="inline-flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose px-8 text-sm font-semibold text-cream shadow-luxury transition-all hover:brightness-110"
          >
            Back to home
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-full border border-border/70 bg-background/80 px-8 text-sm font-semibold backdrop-blur-sm transition-all hover:border-dusty-rose"
          >
            Browse real events
          </Link>
          <Link
            to="/services"
            className="inline-flex h-12 min-h-[48px] items-center justify-center gap-2 rounded-full border border-border/70 bg-background/80 px-8 text-sm font-semibold backdrop-blur-sm transition-all hover:border-dusty-rose"
          >
            View services
          </Link>
        </div>
      </div>
    </section>
  );
}
