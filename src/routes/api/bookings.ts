import { createFileRoute } from "@tanstack/react-router";
import { submitBooking } from "@/lib/booking/booking-service";

export const Route = createFileRoute("/api/bookings")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let payload: unknown;
        try {
          payload = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON body" }, { status: 400 });
        }

        const result = await submitBooking(payload);
        if (!result.ok) {
          return Response.json(
            { error: result.error, fieldErrors: result.fieldErrors },
            { status: 400 }
          );
        }
        return Response.json(
          { id: result.record!.id, status: result.record!.status },
          { status: 201 }
        );
      },
    },
  },
});
