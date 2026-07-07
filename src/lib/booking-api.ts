const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export interface BookingSubmissionResult {
  ok: boolean;
  id?: string;
  status?: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

export async function submitBooking(
  data: Record<string, unknown>
): Promise<BookingSubmissionResult> {
  try {
    const response = await fetch(`${API_URL}/api/bookings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const body = (await response.json().catch(() => ({}))) as {
      id?: string;
      status?: string;
      error?: string;
      fieldErrors?: Record<string, string[]>;
    };

    if (!response.ok) {
      return {
        ok: false,
        error: body.error ?? "Something went wrong. Please try again.",
        fieldErrors: body.fieldErrors,
      };
    }

    return { ok: true, id: body.id, status: body.status };
  } catch {
    return {
      ok: false,
      error: "Network error — please try again.",
    };
  }
}
