import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Loader2, Check } from "lucide-react";
import { bookingSchema, type BookingInput } from "@/lib/validators/booking-schema";
import { BookingStepEventType } from "./BookingStepEventType";
import { BookingStepDetails } from "./BookingStepDetails";
import { BookingStepStyle } from "./BookingStepStyle";
import { BookingStepContact } from "./BookingStepContact";
import { BookingSummary } from "./BookingSummary";

const steps = [
  { id: 1, label: "Event Type" },
  { id: 2, label: "Details" },
  { id: 3, label: "Style" },
  { id: 4, label: "Contact" },
  { id: 5, label: "Review" },
] as const;

const fieldsPerStep: Record<number, (keyof BookingInput)[]> = {
  1: ["eventType"],
  2: ["preferredDate", "eventLocation"],
  3: ["servicesNeeded"],
  4: ["fullName", "email", "phone", "preferredContactMethod", "consent"],
  5: [],
};

export function BookingWizard() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const navigate = useNavigate();

  const methods = useForm<BookingInput>({
    resolver: zodResolver(bookingSchema),
    mode: "onTouched",
    defaultValues: {
      eventType: undefined as unknown as BookingInput["eventType"],
      preferredDate: "",
      alternativeDate: "",
      eventLocation: "",
      area: "",
      guestCount: "",
      venueType: undefined,
      setupTime: "",
      theme: "",
      servicesNeeded: [],
      budgetRange: undefined,
      inspirationNotes: "",
      fullName: "",
      email: "",
      phone: "",
      preferredContactMethod: undefined as unknown as BookingInput["preferredContactMethod"],
      message: "",
      consent: false,
    },
  });

  const next = async () => {
    const fields = fieldsPerStep[step];
    const ok = await methods.trigger(fields, { shouldFocus: true });
    if (!ok) return;
    setStep((s) => Math.min(s + 1, steps.length));
  };

  const back = () => {
    setStep((s) => Math.max(s - 1, 1));
  };

  const onSubmit = methods.handleSubmit(async (data) => {
    setSubmitting(true);
    setServerError(null);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setServerError(body?.error ?? "Something went wrong. Please try again.");
        setSubmitting(false);
        return;
      }
      navigate({ to: "/thank-you" });
    } catch {
      setServerError("Network error — please try again.");
      setSubmitting(false);
    }
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit} className="mx-auto max-w-3xl">
        <Stepper current={step} />

        <div className="mt-10 rounded-[2rem] border border-border bg-card/50 backdrop-blur-md p-6 shadow-elegant md:p-10 transition-all duration-300 relative overflow-hidden">
          {/* Subtle background glow spots inside form container */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,oklch(0.78_0.06_20_/_0.04),transparent_40%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_90%,oklch(0.8_0.08_85_/_0.04),transparent_40%)] pointer-events-none" />

          <div className="relative">
            {step === 1 && <BookingStepEventType />}
            {step === 2 && <BookingStepDetails />}
            {step === 3 && <BookingStepStyle />}
            {step === 4 && <BookingStepContact />}
            {step === 5 && <BookingSummary />}
          </div>

          {serverError && (
            <p className="mt-6 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive font-medium animate-shake">
              {serverError}
            </p>
          )}

          <div className="mt-10 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center pt-6 border-t border-border/40 relative">
            <button
              type="button"
              onClick={back}
              disabled={step === 1 || submitting}
              className="h-11 rounded-full px-6 border border-border bg-background/50 text-sm font-semibold hover:bg-accent hover:border-accent hover:text-accent-foreground transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ArrowLeft className="h-4 w-4" /> Back
            </button>

            {step < steps.length ? (
              <button
                type="button"
                onClick={next}
                className="h-11 rounded-full px-8 bg-gradient-to-r from-[oklch(0.32_0.06_300)] to-[oklch(0.78_0.06_20)] text-cream text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 hover:shadow-elegant inline-flex items-center justify-center gap-2 whitespace-nowrap gold-glow"
              >
                Continue <ArrowRight className="h-4 w-4" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={submitting}
                className="h-11 rounded-full px-8 bg-gradient-gold text-midnight text-sm font-semibold hover:brightness-110 shadow-soft transition-all duration-300 hover:shadow-elegant inline-flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed gold-glow"
              >
                {submitting ? (
                  <><Loader2 className="h-4 w-4 animate-spin" /> Sending Request…</>
                ) : (
                  "Send Booking Request"
                )}
              </button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

function Stepper({ current }: { current: number }) {
  return (
    <div className="w-full relative px-4 py-2">
      {/* Background timeline track */}
      <div className="absolute top-[21px] left-10 right-10 h-0.5 bg-border hidden sm:block" />
      {/* Filled timeline track */}
      <div
        className="absolute top-[21px] left-10 h-0.5 bg-gradient-gold hidden sm:block transition-all duration-500"
        style={{
          width: `${((current - 1) / (steps.length - 1)) * 84}%`,
        }}
      />

      <ol className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10 w-full">
        {steps.map((s) => {
          const active = s.id === current;
          const done = s.id < current;
          return (
            <li key={s.id} className="flex items-center sm:flex-col gap-3 group">
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  active
                    ? "border-accent bg-accent/15 text-foreground scale-110 shadow-soft"
                    : done
                    ? "border-transparent bg-gradient-to-br from-[oklch(0.32_0.06_300)] to-[oklch(0.2_0.01_260)] text-cream shadow-sm"
                    : "border-border bg-background text-muted-foreground"
                }`}
              >
                {done ? (
                  <Check className="h-4.5 w-4.5 stroke-[2.5]" />
                ) : (
                  <span className="text-xs font-bold">{s.id}</span>
                )}
              </div>
              <span
                className={`text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  active
                    ? "text-[oklch(0.78_0.06_20)]"
                    : done
                    ? "text-[oklch(0.32_0.06_300)]"
                    : "text-muted-foreground"
                }`}
              >
                {s.label}
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
