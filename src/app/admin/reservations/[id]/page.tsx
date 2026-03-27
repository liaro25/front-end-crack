import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import OrderCard from "@/components/reservations/OrderCard";

export default function AdminReservationDetailPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-text-primary">
            Reservation Detail
          </h1>
          <p className="text-text-secondary">
            Review reservation information and manage booking status.
          </p>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-text-primary">
                  Booking Information
                </h2>
                <p className="mt-1 text-sm text-text-secondary">
                  Reservation details submitted by the guest
                </p>
              </div>

              <StatusBadge status="pending" />
            </div>

            <div className="mt-6 space-y-4 text-sm">
              <div>
                <p className="text-text-secondary">Reservation Code</p>
                <p className="font-medium text-text-primary">RSV-001</p>
              </div>

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
                <p className="text-text-secondary">Guest Count</p>
                <p className="font-medium text-text-primary">4 Guests</p>
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
            paymentLabel="Deposit Paid"
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-semibold text-text-primary">
              Payment Information
            </h2>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="text-text-secondary">Payment Status</p>
                <div className="mt-1">
                  <StatusBadge status="paid" />
                </div>
              </div>

              <div>
                <p className="text-text-secondary">Payment Method</p>
                <p className="font-medium text-text-primary">Credit Card</p>
              </div>

              <div>
                <p className="text-text-secondary">Payment Type</p>
                <p className="font-medium text-text-primary">Deposit</p>
              </div>

              <div>
                <p className="text-text-secondary">Amount Paid</p>
                <p className="font-medium text-text-primary">Rp 23.650</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-text-primary">
              Table Assignment
            </h2>

            <p className="mt-1 text-sm text-text-secondary">
              Manual assignment by admin
            </p>

            <div className="mt-5 space-y-4">
              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Assigned Tables
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-accent px-3 py-1 text-sm text-text-primary">
                    T3
                  </span>
                  <span className="rounded-full bg-accent px-3 py-1 text-sm text-text-primary">
                    T4
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-text-secondary mb-2">
                  Available Tables
                </p>
                <div className="flex flex-wrap gap-2">
                  <button className="rounded-full border border-border-soft bg-white px-3 py-1 text-sm text-text-primary hover:bg-background">
                    T1
                  </button>
                  <button className="rounded-full border border-border-soft bg-white px-3 py-1 text-sm text-text-primary hover:bg-background">
                    T2
                  </button>
                  <button className="rounded-full border border-border-soft bg-white px-3 py-1 text-sm text-text-primary hover:bg-background">
                    T5
                  </button>
                  <button className="rounded-full border border-border-soft bg-white px-3 py-1 text-sm text-text-primary hover:bg-background">
                    T6
                  </button>
                </div>
              </div>

              <Button variant="outline">Save Table Assignment</Button>
            </div>
          </Card>
        </div>

        <Card>
          <h2 className="text-xl font-semibold text-text-primary">
            Reservation Actions
          </h2>

          <p className="mt-1 text-sm text-text-secondary">
            Update booking status manually
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Button>Approve Reservation</Button>
            <Button variant="outline">Cancel Reservation</Button>
            <Button variant="secondary">Mark Completed</Button>
            <Button variant="soft">Mark No Show</Button>
          </div>
        </Card>
      </div>
    </main>
  );
}
