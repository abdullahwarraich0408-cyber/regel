import { useFormContext } from "react-hook-form";
import type { BookingInput } from "@/lib/validators/booking-schema";
import { StepHeader } from "./BookingStepEventType";

export function BookingSummary() {
  const { watch } = useFormContext<BookingInput>();
  const v = watch();

  const rows: [string, string][] = [
    ["Event type", v.eventType ?? "—"],
    ["Preferred date", v.preferredDate || "—"],
    ["Alternative date", v.alternativeDate || "—"],
    ["Location", v.eventLocation || "—"],
    ["Area", v.area || "—"],
    ["Guests", v.guestCount || "—"],
    ["Venue", v.venueType ?? "—"],
    ["Setup time", v.setupTime || "—"],
    ["Theme", v.theme || "—"],
    ["Services", (v.servicesNeeded ?? []).join(", ") || "—"],
    ["Budget", v.budgetRange ?? "—"],
    ["Name", v.fullName || "—"],
    ["Email", v.email || "—"],
    ["Phone", v.phone || "—"],
    ["Contact via", v.preferredContactMethod ?? "—"],
  ];

  return (
    <div>
      <StepHeader step="05" title="Review your request." subtitle="A quick check before we receive your enquiry." />
      <dl className="mt-8 divide-y divide-border rounded-2xl border border-border bg-background">
        {rows.map(([k, val]) => (
          <div key={k} className="grid grid-cols-3 gap-4 px-5 py-3 text-sm">
            <dt className="text-muted-foreground">{k}</dt>
            <dd className="col-span-2 break-words text-foreground">{val}</dd>
          </div>
        ))}
      </dl>
      {(v.inspirationNotes || v.message) && (
        <div className="mt-6 space-y-4">
          {v.inspirationNotes && (
            <div className="rounded-2xl border border-border bg-background p-5 text-sm">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Inspiration notes</div>
              <p className="mt-2 whitespace-pre-wrap text-foreground/85">{v.inspirationNotes}</p>
            </div>
          )}
          {v.message && (
            <div className="rounded-2xl border border-border bg-background p-5 text-sm">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Message</div>
              <p className="mt-2 whitespace-pre-wrap text-foreground/85">{v.message}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
