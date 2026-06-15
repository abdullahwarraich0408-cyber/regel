import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function ContactSection() {
  const items = [
    {
      icon: Mail,
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s+/g, "")}`,
    },
    {
      icon: MapPin,
      label: "Service area",
      value: siteConfig.serviceArea,
    },
  ];

  return (
    <section className="bg-muted/60 py-24 md:py-32">
      <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Let's talk through your event.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Prefer to chat first? Reach us directly or follow along to see recent setups.
          </p>

          <div className="mt-8 flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background transition-colors hover:border-accent hover:text-accent"
              >
                <Instagram className="h-4 w-4" />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-11 w-11 place-items-center rounded-full border border-border bg-background transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {items.map((it) => {
            const Icon = it.icon;
            const content = (
              <div className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/60 hover:shadow-elegant">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-charcoal">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {it.label}
                  </div>
                  <div className="mt-1 font-display text-lg">{it.value}</div>
                </div>
              </div>
            );
            return it.href ? (
              <a key={it.label} href={it.href} className="block">
                {content}
              </a>
            ) : (
              <div key={it.label}>{content}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
