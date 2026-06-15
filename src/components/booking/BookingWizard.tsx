import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingSchema, type BookingInput } from "@/lib/validators/booking-schema";
import { BookingStepEventType } from "./BookingStepEventType";
import { BookingStepDetails } from "./BookingStepDetails";
import { BookingStepStyle } from "./BookingStepStyle";
import { BookingStepContact } from "./BookingStepContact";
import { BookingSummary } from "./BookingSummary";

const steps = [
  { id: 1, label: "Event type" },
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
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const back = () => {
    setStep((s) => Math.max(s - 1, 1));
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
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

        <div className="mt-10 rounded-3xl border border-border bg-card p-6 shadow-soft md:p-10">
          {step === 1 && <BookingStepEventType />}
          {step === 2 && <BookingStepDetails />}
          {step === 3 && <BookingStepStyle />}
          {step === 4 && <BookingStepContact />}
          {step === 5 && <BookingSummary />}

          {serverError && (
            <p className="mt-6 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
              {serverError}
            </p>
          )}

          <div className="mt-10 flex flex-col-reverse items-stretch justify-between gap-3 sm:flex-row sm:items-center">
            <Button
              type="button"
              variant="ghost"
              onClick={back}
              disabled={step === 1 || submitting}
              className="rounded-full"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back
            </Button>

            {step < steps.length ? (
              <Button type="button" size="lg" onClick={next} className="rounded-full">
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" size="lg" disabled={submitting} className="rounded-full">
                {submitting ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending…</>
                ) : (
                  "Send Booking Request"
                )}
              </Button>
            )}
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

function Stepper({ current }: { current: number }) {
  return (
    <ol className="flex flex-wrap items-center justify-center gap-2 text-xs">
      {steps.map((s, i) => {
        const active = s.id === current;
        const done = s.id < current;
        return (
          <li key={s.id} className="flex items-center gap-2">
            <div
              className={`flex h-8 items-center gap-2 rounded-full border px-3 transition-colors ${
                active
                  ? "border-accent bg-accent/15 text-foreground"
                  : done
                  ? "border-accent/60 bg-background text-foreground"
                  : "border-border bg-background text-muted-foreground"
              }`}
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-foreground/10 text-[10px] font-semibold">
                {s.id}
              </span>
              <span className="font-medium tracking-wide">{s.label}</span>
            </div>
            {i < steps.length - 1 && <span className="h-px w-4 bg-border" />}
          </li>
        );
      })}
    </ol>
  );
}
