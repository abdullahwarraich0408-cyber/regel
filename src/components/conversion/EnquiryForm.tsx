"use client";

import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { CalendarDays, Loader2, Phone, Tag, User } from "lucide-react";
import { submitEnquiry } from "@/lib/enquiry-api";
import { trackConversion } from "@/lib/analytics";
import { whatsappUrl } from "@/lib/site-config";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

const eventTypes = ["Wedding", "Birthday", "Baby Shower", "Corporate Event", "Other"];

function FieldShell({
  label,
  icon: Icon,
  children,
}: {
  label: string;
  icon: typeof User;
  children: React.ReactNode;
}) {
  return (
    <label className="block space-y-1.5">
      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        <Icon className="h-3.5 w-3.5 opacity-80" strokeWidth={2} aria-hidden />
        {label}
      </span>
      <div className="relative">{children}</div>
    </label>
  );
}

function buildWhatsAppMessage(form: {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
}) {
  return [
    "Hi Regal Knot Events — I'd like to enquire about an event.",
    "",
    `Name: ${form.fullName}`,
    `Phone: ${form.phone}`,
    `Event type: ${form.eventType}`,
    `Event date: ${form.eventDate}`,
  ].join("\n");
}

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

    if (!form.fullName.trim() || !form.phone.trim() || !form.eventType || !form.eventDate) {
      setError("Please complete all fields.");
      return;
    }

    setLoading(true);

    // Open WhatsApp with the enquiry details (primary delivery to business)
    const waUrl = whatsappUrl(buildWhatsAppMessage(form));
    window.open(waUrl, "_blank", "noopener,noreferrer");

    // Also save to backend when available (admin panel) — non-blocking
    void submitEnquiry({ ...form, source });

    trackConversion("enquiry_submit", { source, channel: "whatsapp" });
    trackConversion("whatsapp_click", { location: `enquiry_form_${source}` });

    setLoading(false);
    navigate({ to: "/thank-you" });
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-border/70 bg-white pl-10 pr-4 text-sm text-midnight caret-midnight outline-none transition placeholder:text-zinc-400 focus:border-dusty-rose focus:ring-2 focus:ring-dusty-rose/20";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <FieldShell label="Name" icon={User}>
          <User
            className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-zinc-500"
            strokeWidth={1.75}
            aria-hidden
          />
          <input
            required
            value={form.fullName}
            onChange={(e) => setForm((f) => ({ ...f, fullName: e.target.value }))}
            className={fieldClass}
            placeholder="Your name"
            autoComplete="name"
          />
        </FieldShell>
        <FieldShell label="Phone" icon={Phone}>
          <Phone
            className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-zinc-500"
            strokeWidth={1.75}
            aria-hidden
          />
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={fieldClass}
            placeholder="+44 7XXX XXXXXX"
            autoComplete="tel"
          />
        </FieldShell>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <FieldShell label="Event Type" icon={Tag}>
          <Tag
            className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-zinc-500"
            strokeWidth={1.75}
            aria-hidden
          />
          <select
            required
            value={form.eventType}
            onChange={(e) => setForm((f) => ({ ...f, eventType: e.target.value }))}
            className={`${fieldClass} appearance-none`}
          >
            <option value="">Select event type</option>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FieldShell>
        <FieldShell label="Event Date" icon={CalendarDays}>
          <CalendarDays
            className="pointer-events-none absolute left-3.5 top-1/2 z-10 h-4 w-4 -translate-y-1/2 text-zinc-500"
            strokeWidth={1.75}
            aria-hidden
          />
          <input
            required
            type="date"
            value={form.eventDate}
            onChange={(e) => setForm((f) => ({ ...f, eventDate: e.target.value }))}
            className={`${fieldClass} [color-scheme:light]`}
          />
        </FieldShell>
      </div>

      {error ? (
        <p className="enquiry-error rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex h-12 min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-[#25D366] text-sm font-semibold text-white shadow-soft transition-all hover:brightness-110 disabled:opacity-60 sm:w-auto sm:px-8"
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Opening WhatsApp...
          </>
        ) : (
          <>
            <WhatsAppIcon className="h-4 w-4" />
            Send on WhatsApp
          </>
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        Opens WhatsApp with your details ready to send to Regal Knot Events.
      </p>
    </form>
  );
}
