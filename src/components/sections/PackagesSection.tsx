import { packages } from "@/data/packages";
import { PackageCard } from "@/components/cards/PackageCard";

export function PackagesSection() {
  return (
    <section className="bg-gradient-luxury py-16 md:py-20">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">Service Packages</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Choose your perfect
            <span className="text-[oklch(0.78_0.06_20)]"> celebration experience</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Every package is carefully curated, with flexible options to match your vision, venue, and guest count perfectly.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className={p.featured ? "order-first lg:order-none" : "order-last lg:order-none"}>
              <PackageCard tier={p} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
