import { Link } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect } from "react";
import { siteConfig } from "@/lib/site-config";
import { serviceLinks, utilityLinks } from "./nav-links";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true" data-lenis-prevent>
      <button
        type="button"
        aria-label="Close menu backdrop"
        className="absolute inset-0 bg-mobile-backdrop transition-opacity duration-300"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col border-l border-cream/10 bg-mobile-drawer p-6 text-cream shadow-elegant">
        <div className="flex items-center justify-between">
          <span className="font-display text-xl tracking-wide text-cream/90">{siteConfig.name}</span>
          <button
            type="button"
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="mt-8 flex flex-1 flex-col gap-6 overflow-y-auto" aria-label="Mobile">
          <div>
            <p className="px-1 text-[10px] font-bold uppercase tracking-[0.22em] text-soft-gold/90">
              Our services
            </p>
            <div className="mt-3 space-y-2">
              {serviceLinks.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.to}
                    to={service.to}
                    onClick={onClose}
                    className="group flex items-center gap-3 rounded-2xl border border-cream/10 bg-cream/5 px-3 py-3 transition-all hover:border-soft-gold/35 hover:bg-cream/10"
                    activeProps={{
                      className:
                        "group flex items-center gap-3 rounded-2xl border border-soft-gold/40 bg-cream/10 px-3 py-3 ring-1 ring-soft-gold/20",
                    }}
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-gold text-midnight shadow-soft">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-display text-xl leading-none text-cream">
                        {service.label}
                      </span>
                      <span className="mt-1 block text-xs text-cream/55">{service.description}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="space-y-1 border-t border-cream/10 pt-5">
            {utilityLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={onClose}
                activeProps={{
                  className:
                    "rounded-xl border-l-4 border-soft-gold bg-cream/10 px-4 py-2.5 pl-3 font-sans text-base font-semibold text-soft-gold",
                }}
                activeOptions={{ exact: link.to === "/" }}
                className="rounded-xl px-4 py-2.5 font-sans text-base text-cream/80 transition-all hover:bg-cream/5 hover:text-cream"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-auto space-y-3 border-t border-cream/10 pt-6">
          <Link
            to="/booking"
            onClick={onClose}
            className="inline-flex h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-gold px-4 text-sm font-semibold text-midnight shadow-soft transition-all hover:brightness-105"
          >
            {siteConfig.cta.primary}
          </Link>
          <Link
            to="/services"
            onClick={onClose}
            className="inline-flex h-11 w-full items-center justify-center rounded-full border border-cream/25 px-4 text-sm font-semibold text-cream/90 transition-all hover:bg-cream/10"
          >
            View all services
          </Link>
          <p className="text-center text-xs text-cream/60">
            {siteConfig.location} · {siteConfig.email}
          </p>
        </div>
      </div>
    </div>
  );
}
