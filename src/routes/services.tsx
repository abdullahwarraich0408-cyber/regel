import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingCTA } from "@/components/sections/BookingCTA";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";

const title = "Event Decor Services — Regal Knot Events";
const description =
  "Wedding decor, birthday styling, baby showers, balloon installations, backdrops, table settings and floral arrangements across Manchester.";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-warm pb-12 pt-24 md:pt-32">
        <div className="container-prose max-w-3xl">
          <span className="eyebrow">Services</span>
          <h1 className="mt-5 font-display text-5xl leading-[1.05] md:text-6xl text-balance">
            Decor designed around the moment.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            From signature focal pieces to fully styled venues, every service is led by detail,
            scale, and a feeling for the room. Choose what you need — we will plan, source, and
            install it for you.
          </p>
        </div>
      </section>

      <ServicesSection />

      <section className="pb-24 md:pb-32">
        <div className="container-prose">
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.slug}
                  className="rounded-3xl border border-border bg-card p-8 shadow-soft"
                >
                  <div className="flex items-center gap-4">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-charcoal shadow-gold">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="font-display text-3xl">{s.title}</h2>
                  </div>
                  <p className="mt-5 text-base leading-relaxed text-foreground/85">{s.long}</p>
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      Best for · {s.bestFor}
                    </span>
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <Link to="/booking">Plan with us</Link>
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
