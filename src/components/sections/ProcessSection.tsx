import { ProcessCard } from "@/components/cards/ProcessCard";

const steps = [
  {
    step: "01",
    title: "Tell us your vision",
    description:
      "Share your date, venue, theme, and the feeling you want guests to walk into. No detail is too small.",
  },
  {
    step: "02",
    title: "Receive your styling plan",
    description:
      "We return a tailored proposal with concepts, decor pieces, and a transparent custom quote built around you.",
  },
  {
    step: "03",
    title: "Refine the details",
    description:
      "We collaborate on colour, scale, and finishing touches until the styling plan feels exactly right.",
  },
  {
    step: "04",
    title: "We style. You celebrate.",
    description:
      "On the day, our team installs every element and pack-down is handled — so you can be fully present.",
  },
];

export function ProcessSection() {
  return (
    <section className="bg-muted/60 py-24 md:py-32">
      <div className="container-prose">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The process</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            Seamless from first idea to final setup.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            A calm, considered way of working — built around clear communication and beautifully
            executed details.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <ProcessCard key={s.step} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
