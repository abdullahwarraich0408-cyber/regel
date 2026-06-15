import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-gradient-warm">
      <div className="container-prose grid gap-12 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-gold text-[11px] font-semibold tracking-widest text-charcoal shadow-gold">
              RK
            </span>
            <span className="font-display text-xl">{siteConfig.name}</span>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-6 flex gap-3">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 transition-colors hover:border-accent hover:text-accent"
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
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background/60 transition-colors hover:border-accent hover:text-accent"
              >
                <Facebook className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-display text-lg">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-foreground">Portfolio</Link></li>
            <li><Link to="/booking" className="hover:text-foreground">Plan my event</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-accent" />
              <span>{siteConfig.location}<br />{siteConfig.serviceArea}</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">{siteConfig.email}</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-foreground">{siteConfig.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="container-prose flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Premium event decor &middot; Manchester, UK</p>
        </div>
      </div>
    </footer>
  );
}
