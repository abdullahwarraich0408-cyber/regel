"use client";

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { submitEnquiry } from "@/lib/enquiry-api";
import { trackConversion } from "@/lib/analytics";

const eventTypes = ["Wedding", "Birthday", "Baby Shower", "Corporate Event", "Other"];

export function EnquiryForm({ source = "homepage" }: { source?: string }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    eventType: "",
    eventDate: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const result = await submitEnquiry({ ...form, source });

    setLoading(false);

    if (!result.ok) {
      setError(result.error ?? "Please check your details and try again.");
      return;
    }

    trackConversion("enquiry_submit", { source });
    navigate({ to: "/thank-you" });
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Name
          </span>
          <input
            required
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            className="h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20"
            placeholder="Your name"
            autoComplete="name"
          />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Phone
          </span>
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className="h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20"
            placeholder="+44 7XXX XXXXXX"
            autoComplete="tel"
          />
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Event Type
          </span>
          <select
            required
            value={form.eventType}
            onChange={(e) => setForm((f) => ({ ...f, eventType: e.target.value }))}
            className="h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20"
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Event Date
          </span>
          <input
            required
            type="date"
            value={form.eventDate}
            onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))}
            className="h-12 w-full rounded-xl border border-border/70 bg-background px-4 text-sm outline-none transition focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20"
          />
        </label>
      </div>

      {error ? (
        <p className="rounded-xl bg-destructive/10 px-4 py-3 text-sm text-destructive">{error}</p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-deep-plum to-dusty-rose text-sm font-semibold text-cream shadow-luxury transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Enquiry"
        )}
      </button>
    </form>
  );
}
