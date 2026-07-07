import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { siteConfig, whatsappUrl } from "@/lib/site-config";

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
      href: whatsappUrl(),
      external: true,
    },
    {
      icon: MapPin,
      label: "Service area",
      value: siteConfig.serviceArea,
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[oklch(0.975_0.005_90)] via-[oklch(0.94_0.01_70)] to-[oklch(0.905_0.015_65)]">
      <div className="container-prose grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Let's talk through your event.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground mx-auto lg:mx-0">
            Prefer to chat first? Reach us directly or follow along to see recent setups.
          </p>

          <div className="mt-10 flex gap-4 justify-center lg:justify-start">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group grid h-14 w-14 place-items-center rounded-full border border-border/70 bg-background transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-gradient-gold hover:text-midnight hover:shadow-luxury"
              >
                <Instagram className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group grid h-14 w-14 place-items-center rounded-full border border-border/70 bg-background transition-all duration-300 hover:border-[oklch(0.78_0.06_20)] hover:bg-gradient-gold hover:text-midnight hover:shadow-luxury"
              >
                <Facebook className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </a>
            )}
          </div>
        </div>

        <div className="space-y-5">
          {items.map((it) => {
            const Icon = it.icon;
            const content = (
              <div className="group flex items-center gap-5 rounded-3xl border border-border/60 bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-[oklch(0.78_0.06_20)] hover:shadow-luxury">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-gold text-midnight shadow-soft transition-transform duration-300 group-hover:scale-110 group-hover:shadow-elegant">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
                    {it.label}
                  </div>
                  <div className="mt-1 font-display text-lg sm:text-xl break-all sm:break-normal">{it.value}</div>
                </div>
                {it.href && (
                  <span className="text-[oklch(0.78_0.06_20)] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                )}
              </div>
            );
            return it.href ? (
              <a
                key={it.label}
                href={it.href}
                target={"external" in it && it.external ? "_blank" : undefined}
                rel={"external" in it && it.external ? "noreferrer" : undefined}
                className="block"
              >
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
