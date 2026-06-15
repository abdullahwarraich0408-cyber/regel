import { useFormContext } from "react-hook-form";
import type { BookingInput } from "@/lib/validators/booking-schema";
import { venueTypes } from "@/lib/validators/booking-schema";
import { StepHeader } from "./BookingStepEventType";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Field } from "./Field";

export function BookingStepDetails() {
  const { register, setValue, watch, formState: { errors } } = useFormContext<BookingInput>();
  const venueType = watch("venueType");

  return (
    <div>
      <StepHeader step="02" title="Tell us the details." subtitle="Date, venue, and the basics about the day." />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Preferred date" error={errors.preferredDate?.message} required>
          <Input type="date" {...register("preferredDate")} />
        </Field>
        <Field label="Alternative date" error={errors.alternativeDate?.message}>
          <Input type="date" {...register("alternativeDate")} />
        </Field>

        <Field label="Event location or venue" error={errors.eventLocation?.message} required className="md:col-span-2">
          <Input placeholder="Venue name or address" {...register("eventLocation")} />
        </Field>

        <Field label="Manchester area" error={errors.area?.message}>
          <Input placeholder="e.g. Didsbury, Salford, City Centre" {...register("area")} />
        </Field>

        <Field label="Estimated guest count" error={errors.guestCount?.message}>
          <Input placeholder="e.g. 80" inputMode="numeric" {...register("guestCount")} />
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
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active ? "border-accent bg-accent/15" : "border-border bg-background hover:border-accent/50"
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
          <Input placeholder="e.g. From 10am, 2-hour window" {...register("setupTime")} />
        </Field>
      </div>
    </div>
  );
}

export { Label };
