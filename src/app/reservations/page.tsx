import ReservationCard from "@/components/reservations/ReservationCard";
import reservations from "@/lib/mocks/reservations.json";

export default function ReservationsPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-6">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-text-primary">Reservations</h1>
          <p className="text-text-secondary">
            View current reservation records.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {reservations.map((reservation) => (
            <ReservationCard
              key={reservation.id}
              guestName={reservation.guestName}
              date={reservation.reservationDate}
              time={reservation.startTime}
              guestCount={reservation.guestCount}
              status={
                reservation.status as
                  | "pending"
                  | "approved"
                  | "cancelled"
                  | "completed"
                  | "no_show"
                  | "unpaid"
                  | "paid"
                  | "partial"
                  | "refunded"
              }
            />
          ))}
        </section>
      </div>
    </main>
  );
}
