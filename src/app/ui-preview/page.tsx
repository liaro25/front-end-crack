import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Input from "@/components/ui/Input";
import StatusBadge from "@/components/ui/StatusBadge";

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

        {/* Card Example */}
        <section>
          <h2 className="text-xl font-semibold text-text-primary mb-4">
            Card Example
          </h2>

          <Card>
            <h3 className="text-lg font-semibold text-text-primary">
              Reservation Example
            </h3>

            <div className="mt-3 space-y-2 text-sm">
              <p>Guest: Olivia</p>
              <p>Date: 20 May 2026</p>
              <p>Guests: 4</p>
              <StatusBadge status="pending" />
            </div>

            <div className="mt-4 flex gap-2">
              <Button>Approve</Button>
              <Button variant="outline">Reject</Button>
            </div>
          </Card>
        </section>
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

<button className="hover:[animation:wiggle_0.35s_ease-in-out] rounded-xl bg-primary px-4 py-2 text-white">
  Test Wiggle
</button>;
