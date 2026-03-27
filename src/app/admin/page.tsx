import Card from "@/components/ui/Card";

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-6xl space-y-8">
        {/* Header */}
        <section className="space-y-2">
          <h1 className="text-3xl font-bold text-text-primary">
            Admin Dashboard
          </h1>
          <p className="text-text-secondary">
            Quick overview of reservation activity
          </p>
        </section>

        {/* Stats */}
        <section className="grid gap-4 md:grid-cols-4">
          <Card>
            <p className="text-sm text-text-secondary">Pending Reservations</p>
            <p className="mt-2 text-3xl font-bold text-primary">12</p>
          </Card>

          <Card>
            <p className="text-sm text-text-secondary">Approved Reservations</p>
            <p className="mt-2 text-3xl font-bold text-secondary">18</p>
          </Card>

          <Card>
            <p className="text-sm text-text-secondary">Today’s Guests</p>
            <p className="mt-2 text-3xl font-bold text-accent">34</p>
          </Card>

          <Card>
            <p className="text-sm text-text-secondary">Payments Received</p>
            <p className="mt-2 text-3xl font-bold text-text-primary">
              Rp 2.450.000
            </p>
          </Card>
        </section>
      </div>
    </main>
  );
}
