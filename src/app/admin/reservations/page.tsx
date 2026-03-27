import StatusBadge from "@/components/ui/StatusBadge";
import reservations from "@/lib/mocks/reservations.json";
import { Reservation } from "@/types";
import Link from "next/link";

export default function AdminReservationsPage() {
  const data = reservations as Reservation[];

  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-text-primary">
            Admin Reservations
          </h1>
          <p className="text-text-secondary">
            Review reservation status and payment information.
          </p>
        </section>

        <div className="overflow-hidden rounded-2xl border border-border-soft bg-surface">
          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-background text-text-primary">
                <tr>
                  <th className="px-4 py-3 font-semibold">Code</th>
                  <th className="px-4 py-3 font-semibold">Guest</th>
                  <th className="px-4 py-3 font-semibold">Date</th>
                  <th className="px-4 py-3 font-semibold">Time</th>
                  <th className="px-4 py-3 font-semibold">Guests</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                  <th className="px-4 py-3 font-semibold">Payment</th>
                </tr>
              </thead>

              <tbody>
                {data.map((reservation) => (
                  <tr
                    key={reservation.id}
                    className="border-t border-border-soft text-text-secondary"
                  >
                    <td className="px-4 py-3 font-medium text-text-primary">
                      <Link
                        href={`/admin/reservations/${reservation.id}`}
                        className="hover:text-primary hover:underline"
                      >
                        {reservation.reservationCode}
                      </Link>
                    </td>
                    <td className="px-4 py-3">{reservation.guestName}</td>
                    <td className="px-4 py-3">{reservation.reservationDate}</td>
                    <td className="px-4 py-3">{reservation.startTime}</td>
                    <td className="px-4 py-3">{reservation.guestCount}</td>
                    <td className="px-4 py-3">
                      <StatusBadge status={reservation.status} />
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={reservation.paymentStatus} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
