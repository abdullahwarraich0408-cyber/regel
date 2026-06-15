import { bookingSchema, type BookingInput } from "@/lib/validators/booking-schema";
import { bookingStorage } from "./booking-storage";
import type { BookingRecord } from "./booking-types";

export interface BookingSubmissionResult {
  ok: boolean;
  record?: BookingRecord;
  fieldErrors?: Record<string, string[]>;
  error?: string;
}

export async function submitBooking(raw: unknown): Promise<BookingSubmissionResult> {
  const parsed = bookingSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten().fieldErrors as Record<string, string[]>,
      error: "Please review the highlighted fields and try again.",
    };
  }
  const record = await bookingStorage.create(parsed.data as BookingInput);
  return { ok: true, record };
}
