const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export interface EnquirySubmissionResult {
  ok: boolean;
  id?: string;
  error?: string;
  fieldErrors?: Record<string, string[]>;
}

export interface EnquiryFormData {
  fullName: string;
  phone: string;
  eventType: string;
  eventDate: string;
  source?: string;
}

export async function submitEnquiry(data: EnquiryFormData): Promise<EnquirySubmissionResult> {
  try {
    const response = await fetch(`${API_URL}/api/enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const body = (await response.json().catch(() => ({}))) as {
      id?: string;
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

    return { ok: true, id: body.id };
  } catch {
    return { ok: false, error: "Network error — please try again." };
  }
}
