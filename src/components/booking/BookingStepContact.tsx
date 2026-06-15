import { useFormContext } from "react-hook-form";
import type { BookingInput } from "@/lib/validators/booking-schema";
import { contactMethods } from "@/lib/validators/booking-schema";
import { StepHeader } from "./BookingStepEventType";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Field } from "./Field";

export function BookingStepContact() {
  const { register, setValue, watch, formState: { errors } } = useFormContext<BookingInput>();
  const method = watch("preferredContactMethod");
  const consent = watch("consent");

  return (
    <div>
      <StepHeader step="04" title="How can we reach you?" subtitle="We will reply within two working days." />

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field label="Full name" error={errors.fullName?.message} required className="md:col-span-2">
          <Input placeholder="Your full name" autoComplete="name" {...register("fullName")} />
        </Field>

        <Field label="Email" error={errors.email?.message} required>
          <Input type="email" placeholder="you@email.com" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Phone or WhatsApp" error={errors.phone?.message}>
          <Input placeholder="+44 …" inputMode="tel" autoComplete="tel" {...register("phone")} />
        </Field>

        <Field label="Preferred contact method" error={errors.preferredContactMethod?.message} required className="md:col-span-2">
          <div className="flex flex-wrap gap-2">
            {contactMethods.map((m) => {
              const active = method === m;
              return (
                <button
                  key={m}
                  type="button"
                  onClick={() => setValue("preferredContactMethod", m, { shouldValidate: true })}
                  className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                    active ? "border-accent bg-accent/15" : "border-border bg-background hover:border-accent/50"
                  }`}
                  aria-pressed={active}
                >
                  {m}
                </button>
              );
            })}
          </div>
        </Field>

        <Field label="Message or special notes" error={errors.message?.message} className="md:col-span-2">
          <Textarea rows={4} placeholder="Anything else we should know?" {...register("message")} />
        </Field>

        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background p-4 text-sm">
            <Checkbox
              checked={!!consent}
              onCheckedChange={(v) => setValue("consent", !!v, { shouldValidate: true })}
              aria-required="true"
            />
            <span className="text-foreground/80">
              I consent to Regal Knot Events contacting me about my event enquiry and storing the
              details I have submitted for this purpose.
            </span>
          </label>
          {errors.consent?.message && (
            <p className="mt-2 text-sm text-destructive">{errors.consent.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
