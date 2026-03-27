import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import StatusBadge from "@/components/ui/StatusBadge";
import ReservationForm from "@/components/reservations/ReservationForm";
import ReservationCard from "@/components/reservations/ReservationCard";
import OrderCard from "@/components/reservations/OrderCard";

export default function UiPreviewPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <section className="space-y-2">
          <h1 className="text-4xl font-bold text-text-primary">
            Dessert Café UI Preview
          </h1>
          <p className="text-text-secondary">Global design system preview</p>
        </section>
        {/* Color Palette */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Color Palette
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <ColorBox label="Primary" className="bg-primary" />
            <ColorBox label="Secondary" className="bg-secondary" />
            <ColorBox label="Accent" className="bg-accent" />
            <ColorBox label="Accent 2" className="bg-accent2" />
            <ColorBox label="Background" className="bg-background border" />
            <ColorBox label="Surface" className="bg-surface border" />
          </div>
        </section>
        {/* Buttons */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Buttons
          </h2>

          <div className="flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="soft">Soft</Button>
          </div>

          <div className="mt-4">
            <p className="text-sm text-text-secondary mb-2">
              Wiggle Hover Buttons
            </p>

            <div className="flex flex-wrap gap-3">
              <Button wiggleOnHover>Book Now</Button>
              <Button variant="secondary" wiggleOnHover>
                Check Reservation
              </Button>
              <Button variant="soft" wiggleOnHover>
                Reserve Table
              </Button>
            </div>
          </div>
        </section>
        {/* Inputs */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Inputs
          </h2>

          <Card>
            <div className="space-y-4">
              <Input label="Guest Name" placeholder="Enter name" />
              <Input label="Email" placeholder="Enter email" />
              <Input label="Phone" placeholder="Enter phone" />
            </div>
          </Card>
        </section>
        {/* Status Badge */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Status Badge
          </h2>

          <div className="flex flex-wrap gap-3">
            <StatusBadge status="pending" />
            <StatusBadge status="approved" />
            <StatusBadge status="cancelled" />
            <StatusBadge status="completed" />
            <StatusBadge status="no_show" />
            <StatusBadge status="paid" />
            <StatusBadge status="unpaid" />
            <StatusBadge status="partial" />
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold text-text-primary">
            Order Card
          </h2>

          <div className="max-w-md">
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
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold text-text-primary">
            Reservation Card
          </h2>

          <div className="grid max-w-md gap-4">
            <ReservationCard
              guestName="Olivia"
              date="20 May 2026"
              time="14:00"
              guestCount={4}
              status="pending"
            />
            <ReservationCard
              guestName="Emma"
              date="21 May 2026"
              time="16:00"
              guestCount={2}
              status="approved"
            />
          </div>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-semibold text-text-primary">
            Reservation Form
          </h2>

          <div className="max-w-md">
            <ReservationForm />
          </div>
        </section>
        ;
      </div>
    </main>
  );
}

function ColorBox({ label, className }: { label: string; className: string }) {
  return (
    <div className="space-y-2">
      <div className={`h-20 rounded-xl ${className}`} />
      <p className="text-sm text-text-secondary">{label}</p>
    </div>
  );
}
