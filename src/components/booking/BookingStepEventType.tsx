import { useFormContext } from "react-hook-form";
import type { BookingInput } from "@/lib/validators/booking-schema";
import { getEventTypeIcon } from "@/lib/event-type-icons";
import { useEventTypes } from "@/hooks/useEventTypes";

export function BookingStepEventType() {
  const { setValue, watch, formState } = useFormContext<BookingInput>();
  const selected = watch("eventType");
  const error = formState.errors.eventType?.message;
  const { data: eventTypes = [], isLoading } = useEventTypes();

  return (
    <div>
      <StepHeader
        step="01"
        title="What are we styling?"
        subtitle="Choose the type of event you would like styled."
      />

      {isLoading ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="h-24 animate-pulse rounded-2xl border border-border/60 bg-muted/40"
            />
          ))}
        </div>
      ) : eventTypes.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-border/70 bg-background/60 px-6 py-10 text-center">
          <p className="font-display text-2xl text-foreground/90">Event types coming soon</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Booking options will appear here once they are published from the admin panel.
          </p>
        </div>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((type) => {
            const Icon = getEventTypeIcon(type.icon);
            const active = selected === type.name;

            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setValue("eventType", type.name, { shouldValidate: true })}
                className={`group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all duration-300 backdrop-blur-sm gold-glow ${
                  active
                    ? "border-[oklch(0.78_0.06_20)] bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]"
                    : "border-border/60 bg-background/40 hover:border-accent hover:bg-background/80 hover:shadow-soft"
                }`}
                aria-pressed={active}
              >
                <span
                  className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl transition-all duration-500 group-hover:scale-110 ${
                    active
                      ? "bg-gradient-gold text-midnight shadow-soft"
                      : "bg-secondary/50 text-foreground/70"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <span
                    className={`block font-display text-xl leading-tight font-medium transition-colors ${
                      active ? "text-cream" : "group-hover:text-[oklch(0.78_0.06_20)]"
                    }`}
                  >
                    {type.name}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}

      {error ? (
        <p className="mt-4 text-sm text-destructive font-medium animate-shake">{error}</p>
      ) : null}
    </div>
  );
}

export function StepHeader({
  step,
  title,
  subtitle,
}: {
  step: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <div className="text-[10px] font-bold uppercase tracking-[0.24em] text-accent">
        Step {step}
      </div>
      <h2 className="mt-2 font-display text-3xl leading-tight md:text-4xl">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
    </div>
  );
}
