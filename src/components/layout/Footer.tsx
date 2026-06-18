import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream">
      <div className="container-prose grid gap-14 py-20 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-4">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-gold text-[12px] font-bold tracking-widest text-midnight shadow-luxury">
              RK
            </span>
            <span className="font-display text-2xl">{siteConfig.name}</span>
          </div>
          <p className="mt-6 max-w-md leading-relaxed text-cream/80">
            {siteConfig.description}
          </p>
          <div className="mt-8 flex gap-4">
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 bg-cream/10 transition-all hover:border-cream hover:bg-cream/20 hover:shadow-soft"
              >
                <Instagram className="h-5 w-5 text-cream" />
              </a>
            )}
            {siteConfig.social.facebook && (
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="grid h-12 w-12 place-items-center rounded-full border border-cream/30 bg-cream/10 transition-all hover:border-cream hover:bg-cream/20 hover:shadow-soft"
              >
                <Facebook className="h-5 w-5 text-cream" />
              </a>
            )}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream">Explore</h4>
          <ul className="mt-6 space-y-3 text-cream/75">
            <li><Link to="/services" className="hover:text-cream transition-colors">Services</Link></li>
            <li><Link to="/portfolio" className="hover:text-cream transition-colors">Portfolio</Link></li>
            <li><Link to="/booking" className="hover:text-cream transition-colors">Plan my event</Link></li>
            <li><Link to="/contact" className="hover:text-cream transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-cream">Get in Touch</h4>
          <ul className="mt-6 space-y-4 text-cream/75">
            <li className="flex items-start gap-3">
              <MapPin className="mt-1 h-5 w-5 text-[oklch(0.88_0.09_85)]" />
              <span>{siteConfig.location}<br />{siteConfig.serviceArea}</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-[oklch(0.88_0.09_85)]" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cream transition-colors">{siteConfig.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[oklch(0.88_0.09_85)]" />
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="hover:text-cream transition-colors">{siteConfig.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/20">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-8 text-sm text-cream/70 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p>Premium event decor &middot; Manchester, UK</p>
        </div>
      </div>
    </footer>
  );
}
