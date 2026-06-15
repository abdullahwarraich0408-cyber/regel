import { useFormContext } from "react-hook-form";
import { Heart, Cake, Baby, PartyPopper, Briefcase, Wand2 } from "lucide-react";
import type { BookingInput } from "@/lib/validators/booking-schema";
import { eventTypes } from "@/lib/validators/booking-schema";

const icons = {
  Wedding: Heart,
  Birthday: Cake,
  "Baby Shower": Baby,
  Party: PartyPopper,
  "Corporate or Private Event": Briefcase,
  "Custom Theme": Wand2,
} as const;

export function BookingStepEventType() {
  const { setValue, watch, formState } = useFormContext<BookingInput>();
  const selected = watch("eventType");
  const error = formState.errors.eventType?.message;

  return (
    <div>
      <StepHeader
        step="01"
        title="What are we styling?"
        subtitle="Choose the type of event you would like styled."
      />
      <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {eventTypes.map((type) => {
          const Icon = icons[type];
          const active = selected === type;
          return (
            <button
              key={type}
              type="button"
              onClick={() => setValue("eventType", type, { shouldValidate: true })}
              className={`group flex items-start gap-3 rounded-2xl border p-5 text-left transition-all ${
                active
                  ? "border-accent bg-accent/10 shadow-soft"
                  : "border-border bg-background hover:border-accent/50 hover:shadow-soft"
              }`}
              aria-pressed={active}
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${active ? "bg-gradient-gold text-charcoal" : "bg-muted text-foreground/70"}`}>
                <Icon className="h-4 w-4" />
              </span>
              <span>
                <span className="block font-display text-lg leading-tight">{type}</span>
              </span>
            </button>
          );
        })}
      </div>
      {error && <p className="mt-4 text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function StepHeader({ step, title, subtitle }: { step: string; title: string; subtitle: string }) {
  return (
    <div>
      <div className="text-[11px] font-medium uppercase tracking-[0.22em] text-accent">Step {step}</div>
      <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
