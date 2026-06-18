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
          <Input placeholder="Your full name" className="rounded-xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4" autoComplete="name" {...register("fullName")} />
        </Field>

        <Field label="Email" error={errors.email?.message} required>
          <Input type="email" placeholder="you@email.com" className="rounded-xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4" autoComplete="email" {...register("email")} />
        </Field>
        <Field label="Phone or WhatsApp" error={errors.phone?.message}>
          <Input placeholder="+44 …" className="rounded-xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] h-11 px-4" inputMode="tel" autoComplete="tel" {...register("phone")} />
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
                  className={`rounded-full border px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 gold-glow ${
                    active
                      ? "border-transparent bg-gradient-to-br from-deep-plum to-midnight text-cream shadow-luxury scale-[1.02]"
                      : "border-border/60 bg-background/50 text-foreground/75 hover:border-accent hover:bg-background/80"
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
          <Textarea rows={4} placeholder="Anything else we should know?" className="rounded-2xl border-border/60 bg-background/50 focus-visible:ring-[oklch(0.8_0.08_85)] p-4" {...register("message")} />
        </Field>

        <div className="md:col-span-2">
          <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-border bg-background/40 p-5 text-sm hover:border-[oklch(0.8_0.08_85)] transition-all duration-300 backdrop-blur-sm">
            <Checkbox
              checked={!!consent}
              onCheckedChange={(v) => setValue("consent", !!v, { shouldValidate: true })}
              aria-required="true"
              className="mt-0.5"
            />
            <span className="text-foreground/80 leading-relaxed">
              I consent to Regal Knot Events contacting me about my event enquiry and storing the
              details I have submitted for this purpose.
            </span>
          </label>
          {errors.consent?.message && (
            <p className="mt-2 text-sm text-destructive font-medium">{errors.consent.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
