import { packages } from "@/data/packages";
import { PackageCard } from "@/components/cards/PackageCard";

export function PackagesSection() {
  return (
    <section className="bg-gradient-warm py-24 md:py-32">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Service tiers</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Styling at every scale — priced around your event.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Each tier is a starting point. Final quotes are tailored to your venue, guest count, and
            styling brief — never one-size-fits-all.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <PackageCard key={p.name} tier={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
