import { Mail, Phone, MapPin, Instagram, Facebook, ArrowRight } from "lucide-react";
import { EnquiryForm } from "@/components/conversion/EnquiryForm";
import { siteConfig, whatsappUrl } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

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
    <section id="enquire" className="bg-gradient-to-br from-[oklch(0.975_0.005_90)] via-[oklch(0.94_0.01_70)] to-[oklch(0.905_0.015_65)] py-16 md:py-20">
      <div className="container-prose grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="eyebrow">Get in touch</span>
          <h2 className="mt-4 font-display text-4xl leading-tight text-balance md:text-5xl">
            Send a quick enquiry
          </h2>
          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-muted-foreground lg:mx-0">
            Name, phone, event type, and date — we&apos;ll reply with availability and next steps.
            Prefer chat? Message us on WhatsApp.
          </p>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackConversion("whatsapp_click", { location: "contact_section" })}
            className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-full bg-[#25D366] px-6 text-sm font-semibold text-white shadow-soft transition-all hover:brightness-110"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {siteConfig.cta.whatsapp}
          </a>

          <div className="mt-10 w-full space-y-4">
            {items.map((it) => {
              const Icon = it.icon;
              const content = (
                <div className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-card p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-dusty-rose/40 hover:shadow-elegant">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1 text-left">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                      {it.label}
                    </div>
                    <div className="mt-1 break-all font-display text-lg sm:break-normal">
                      {it.value}
                    </div>
                  </div>
                  {it.href ? (
                    <ArrowRight className="h-4 w-4 shrink-0 text-dusty-rose transition-transform group-hover:translate-x-0.5" />
                  ) : null}
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

          <div className="mt-8 flex gap-3">
            {siteConfig.social.instagram ? (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-12 w-12 place-items-center rounded-full border border-border/70 bg-background transition-all hover:border-dusty-rose hover:shadow-soft"
              >
                <Instagram className="h-5 w-5" />
              </a>
            ) : null}
            {siteConfig.social.facebook ? (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-12 w-12 place-items-center rounded-full border border-border/70 bg-background transition-all hover:border-dusty-rose hover:shadow-soft"
              >
                <Facebook className="h-5 w-5" />
              </a>
            ) : null}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-border/60 bg-card p-6 shadow-elegant sm:p-8">
          <h3 className="font-display text-2xl text-foreground">Quick Enquiry</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Takes less than a minute — we&apos;ll be in touch soon.
          </p>
          <div className="mt-6">
            <EnquiryForm source="contact_page" />
          </div>
        </div>
      </div>
    </section>
  );
}
