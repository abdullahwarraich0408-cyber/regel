import type { BookingData as BookingInput } from "@/lib/validators/booking-schema";
import type { BookingRecord, BookingStorageAdapter } from "./booking-types";

/**
 * In-memory mock adapter used until Lovable Cloud (Supabase) is connected.
 *
 * TODO: When Lovable Cloud is enabled, swap this for a Supabase adapter:
 *
 *   const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
 *   const { data, error } = await supabaseAdmin
 *     .from("bookings")
 *     .insert({ ...input, status: "new" })
 *     .select()
 *     .single();
 *
 * Suggested `bookings` table columns:
 *   id, created_at, event_type, preferred_date, alternative_date,
 *   event_location, area, guest_count, venue_type, setup_time,
 *   theme, services_needed (text[]), budget_range, inspiration_notes,
 *   full_name, email, phone, preferred_contact_method, message,
 *   status ('new' | 'contacted' | 'quoted' | 'confirmed' | 'declined')
 */
class MockBookingAdapter implements BookingStorageAdapter {
  private bookings: BookingRecord[] = [];

  async create(input: BookingInput): Promise<BookingRecord> {
    const record: BookingRecord = {
      ...input,
      id:
        typeof crypto !== "undefined" && "randomUUID" in crypto
          ? crypto.randomUUID()
          : `booking_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`,
      createdAt: new Date().toISOString(),
      status: "new",
    };
    this.bookings.push(record);
    // eslint-disable-next-line no-console
    console.info("[bookings] new request received", {
      id: record.id,
      eventType: record.eventType,
      preferredDate: record.preferredDate,
    });
    return record;
  }
}

export const bookingStorage: BookingStorageAdapter = new MockBookingAdapter();
