import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import OrderCard from "@/components/reservations/OrderCard";

export default function ReservationConfirmationPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-5xl space-y-8">
        <section className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-text-primary">
            Reservation Confirmation
          </h1>
          <p className="text-text-secondary">
            Please review your reservation details before proceeding.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  Booking Details
                </h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Your reservation summary
                </p>
              </div>

              <StatusBadge status="pending" />
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-text-secondary">Guest Name</p>
                <p className="font-medium text-text-primary">Olivia Tan</p>
              </div>

              <div>
                <p className="text-text-secondary">Email</p>
                <p className="font-medium text-text-primary">
                  olivia@example.com
                </p>
              </div>

              <div>
                <p className="text-text-secondary">Phone</p>
                <p className="font-medium text-text-primary">081234567890</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-text-secondary">Date</p>
                  <p className="font-medium text-text-primary">20 May 2026</p>
                </div>

                <div>
                  <p className="text-text-secondary">Time</p>
                  <p className="font-medium text-text-primary">14:00</p>
                </div>
              </div>

              <div>
                <p className="text-text-secondary">Guests</p>
                <p className="font-medium text-text-primary">4 Guests</p>
              </div>

              <div>
                <p className="text-text-secondary">Reservation Code</p>
                <p className="font-medium text-text-primary">
                  RSV-20260520-001
                </p>
              </div>
            </div>
          </Card>

          <OrderCard
            items={[
              {
                id: 1,
                type: "package",
                name: "Sweet Package",
                quantity: 1,
                price: 120000,
              },
              {
                id: 2,
                type: "item",
                name: "Coffee",
                quantity: 2,
                price: 30000,
              },
              {
                id: 3,
                type: "item",
                name: "Croissant",
                quantity: 1,
                price: 35000,
              },
            ]}
            subtotal={215000}
            tax={21500}
            totalAmount={236500}
            paymentAmount={23650}
            paymentLabel="Deposit Due Now"
          />
        </div>

        <Card>
          <div className="space-y-3">
            <h2 className="text-lg font-semibold text-text-primary">
              Important Notes
            </h2>

            <ul className="space-y-2 text-sm text-text-secondary">
              <li>• Reservation duration is limited to 2 hours.</li>
              <li>• Table assignment will be handled manually by the admin.</li>
              <li>• Deposit payment is required to secure your reservation.</li>
              <li>
                • If no menu is selected, a fixed reservation fee will apply.
              </li>
            </ul>
          </div>
        </Card>

        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button variant="outline">Back to Edit</Button>
          <Button wiggleOnHover>Proceed to Payment</Button>
        </div>
      </div>
    </main>
  );
}
