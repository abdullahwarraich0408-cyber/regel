import type { BookingData as BookingInput } from "@/lib/validators/booking-schema";

export type BookingStatus = "new" | "contacted" | "quoted" | "confirmed" | "declined";

export interface BookingRecord extends BookingInput {
  id: string;
  createdAt: string;
  status: BookingStatus;
}

export interface BookingStorageAdapter {
  create(input: BookingInput): Promise<BookingRecord>;
}
