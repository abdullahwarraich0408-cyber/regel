import { ProcessCard } from "@/components/cards/ProcessCard";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MessageSquare, ClipboardList, Palette, PartyPopper } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Tell us your vision",
    description:
      "Share your date, venue, theme, and the feeling you want guests to walk into. No detail is too small.",
    icon: MessageSquare,
  },
  {
    step: "02",
    title: "Receive your styling plan",
    description:
      "We return a tailored proposal with concepts, decor pieces, and a transparent custom quote built around you.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Refine the details",
    description:
      "We collaborate on colour, scale, and finishing touches until the styling plan feels exactly right.",
    icon: Palette,
  },
  {
    step: "04",
    title: "We style. You celebrate.",
    description:
      "On the day, our team installs every element and pack-down is handled — so you can be fully present.",
    icon: PartyPopper,
  },
];

export function ProcessSection() {
  const revealRef = useScrollReveal();

  return (
    <section ref={revealRef} className="py-16 md:py-20 lg:pb-36 overflow-hidden">
      <div className="container-prose">
        <div className="mx-auto max-w-3xl text-center reveal-on-scroll">
          <span className="eyebrow">Our Process</span>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl text-balance">
            From dream to <span className="text-[oklch(0.78_0.06_20)]">reality</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            A calm, thoughtful approach focused on clear communication and flawless execution of your vision.
          </p>
        </div>

        {/* Timeline-style layout */}
        <div className="mt-16 pb-24 lg:pb-32 relative">
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-[oklch(0.88_0.09_85)] via-[oklch(0.78_0.06_20)] to-[oklch(0.88_0.09_85)] hidden lg:block reveal-on-scroll" />

          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {steps.map((s, index) => {
              const delayClass = `reveal-delay-${index * 150}`;
              return (
                <div
                  key={s.step}
                  className={`relative reveal-on-scroll ${delayClass} ${
                    index % 2 === 1 ? "lg:translate-y-24" : ""
                  }`}
                >
                  <ProcessCard {...s} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
