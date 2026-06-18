import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import type { BookingInput } from "@/lib/validators/booking-schema";
import { venueTypes } from "@/lib/validators/booking-schema";
import { StepHeader } from "./BookingStepEventType";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field } from "./Field";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export function BookingStepDetails() {
  const { setValue, watch, formState: { errors }, control } = useFormContext<BookingInput>();
  const venueType = watch("venueType");
  const today = React.useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const parseLocalDate = (dateStr: string) => {
    if (!dateStr) return undefined;
    const [year, month, day] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  return (
    <div>
      <StepHeader step="02" title="Tell us the details." subtitle="Date, venue, and the basics about the day." />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {/* Preferred Date Picker */}
        <Field label="Preferred date" error={errors.preferredDate?.message} required>
          <Controller
            control={control}
            name="preferredDate"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                       "flex h-11 w-full items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-2 text-sm shadow-inner transition-all duration-300 text-left hover:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(0.8_0.08_85)] focus-visible:border-[oklch(0.8_0.08_85)] focus-visible:bg-background/95",
                      !field.value && "text-muted-foreground/60"
                    )}
                  >
                    <span>{field.value ? format(parseLocalDate(field.value)!, "PPP") : "Pick a date"}</span>
                    <CalendarIcon className="h-4.5 w-4.5 text-muted-foreground/70" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-2xl border-border bg-card shadow-elegant" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? parseLocalDate(field.value) : undefined}
                    onSelect={(date) => {
                      if (date) {
                        const year = date.getFullYear();
                        const month = String(date.getMonth() + 1).padStart(2, "0");
                        const day = String(date.getDate()).padStart(2, "0");
                        field.onChange(`${year}-${month}-${day}`);
                      } else {
                        field.onChange("");
                      }
                    }}
                    disabled={{ before: today }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
        </Field>

        {/* Alternative Date Picker */}
        <Field label="Alternative date" error={errors.alternativeDate?.message}>
          <Controller
            control={control}
            name="alternativeDate"
            render={({ field }) => (
              <Popover>
                <PopoverTrigger asChild>
                  <button
                    type="button"
                    className={cn(
                       "flex h-11 w-full items-center justify-between rounded-xl border border-border/60 bg-background/40 px-4 py-2 text-sm shadow-inner transition-all duration-300 text-left hover:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[oklch(0.8_0.08_85)] focus-visible:border-[oklch(0.8_0.08_85)] focus-visible:bg-background/95",
                      !field.value && "text-muted-foreground/60"
                    )}
                  >
                    <span>{field.value ? format(parseLocalDate(field.value)!, "PPP") : "Pick an alternative date"}</span>
                    <CalendarIcon className="h-4.5 w-4.5 text-muted-foreground/70" />
                  </button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-2xl border-border bg-card shadow-elegant" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? parseLocalDate(field.value) : undefined}
                    onSelect={(date) => {
                      if (date) {
                        const year = date.getFullYear();
                        const month = String(date.getMonth() + 1).padStart(2, "0");
                        const day = String(date.getDate()).padStart(2, "0");
                        field.onChange(`${year}-${month}-${day}`);
                      } else {
                        field.onChange("");
                      }
                    }}
                    disabled={{ before: today }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            )}
          />
        </Field>

        <Field label="Event location or venue" error={errors.eventLocation?.message} required className="md:col-span-2">
          <Input placeholder="Venue name or address" className="rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4" {...control._formValues.eventLocation && setValue("eventLocation", control._formValues.eventLocation)} {...control.register("eventLocation")} />
        </Field>

        <Field label="Manchester area" error={errors.area?.message}>
          <Input placeholder="e.g. Didsbury, Salford, City Centre" className="rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4" {...control.register("area")} />
        </Field>

        <Field label="Estimated guest count" error={errors.guestCount?.message}>
          <Input placeholder="e.g. 80" inputMode="numeric" className="rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4" {...control.register("guestCount")} />
        </Field>

        <Field label="Indoor or outdoor" error={errors.venueType?.message}>
          <div className="flex flex-wrap gap-2">
            {venueTypes.map((v) => {
              const active = venueType === v;
              return (
                <button
                  type="button"
                  key={v}
                  onClick={() => setValue("venueType", v, { shouldValidate: true })}
                  className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 gold-glow ${
                    active
                      ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]"
                      : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"
                  }`}
                  aria-pressed={active}
                >
                  {v}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Setup time preference" error={errors.setupTime?.message}>
          <Input placeholder="e.g. From 10am, 2-hour window" className="rounded-xl border-border/60 bg-background/40 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4" {...control.register("setupTime")} />
        </Field>
      </div>
    </div>
  );
}

export { Label };
