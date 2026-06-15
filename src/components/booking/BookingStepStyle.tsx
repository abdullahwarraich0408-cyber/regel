import { useFormContext } from "react-hook-form";
import type { BookingInput } from "@/lib/validators/booking-schema";
import { budgetRanges, decorServices } from "@/lib/validators/booking-schema";
import { StepHeader } from "./BookingStepEventType";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Field } from "./Field";

export function BookingStepStyle() {
  const { register, setValue, watch, formState: { errors } } = useFormContext<BookingInput>();
  const services = watch("servicesNeeded") ?? [];
  const budget = watch("budgetRange");

  const toggle = (s: typeof decorServices[number]) => {
    const exists = services.includes(s);
    const next = exists ? services.filter((x) => x !== s) : [...services, s];
    setValue("servicesNeeded", next, { shouldValidate: true });
  };

  return (
    <div>
      <StepHeader step="03" title="Style & decor preferences." subtitle="Share the look, the feel, and the elements you have in mind." />

      <div className="mt-8 grid gap-5">
        <Field label="Preferred theme or colour palette" error={errors.theme?.message}>
          <Input placeholder="e.g. Champagne, ivory and gold — soft and romantic" {...register("theme")} />
        </Field>

        <Field label="Decor services needed" error={errors.servicesNeeded?.message as string | undefined}>
          <div className="flex flex-wrap gap-2">
            {decorServices.map((s) => {
              const active = services.includes(s);
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => toggle(s)}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active ? "border-accent bg-accent/15" : "border-border bg-background hover:border-accent/50"
                  }`}
                  aria-pressed={active}
                >
                  {s}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Budget range" error={errors.budgetRange?.message}>
          <div className="flex flex-wrap gap-2">
            {budgetRanges.map((b) => {
              const active = budget === b;
              return (
                <button
                  key={b}
                  type="button"
                  onClick={() => setValue("budgetRange", b, { shouldValidate: true })}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active ? "border-accent bg-accent/15" : "border-border bg-background hover:border-accent/50"
                  }`}
                  aria-pressed={active}
                >
                  {b}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Inspiration notes" error={errors.inspirationNotes?.message}>
          <Textarea
            rows={4}
            placeholder="Anything you've seen and loved, references, must-haves, or details to avoid."
            {...register("inspirationNotes")}
          />
        </Field>

        <div className="rounded-xl border border-dashed border-border bg-muted/40 p-4 text-xs text-muted-foreground">
          Inspiration image uploads are available once you reply to our follow-up email — no need to attach
          anything here.
        </div>
      </div>
    </div>
  );
}
