import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl space-y-6 text-center">
          <h1 className="text-4xl font-bold text-text-primary md:text-5xl">
            Dessert Café Reservation
          </h1>

          <p className="mx-auto max-w-xl text-text-secondary">
            Reserve your favorite dessert experience. Perfect for birthdays,
            dates, and sweet celebrations.
          </p>

          <div className="flex justify-center gap-3">
            <Link href="/reservations/new">
              <Button wiggleOnHover>Reserve Now</Button>
            </Link>

            <Link href="/menu">
              <Button variant="outline">View Menu</Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-10">
        <div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-3">
          <Card>
            <h3 className="font-semibold text-text-primary">
              Easy Reservation
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Book your dessert table in seconds
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-text-primary">
              Custom Dessert Packages
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Choose from curated dessert experiences
            </p>
          </Card>

          <Card>
            <h3 className="font-semibold text-text-primary">
              Perfect For Events
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              Birthdays, dates, gatherings and more
            </p>
          </Card>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl space-y-4 text-center">
          <h2 className="text-2xl font-bold text-text-primary">
            Ready for a sweet experience?
          </h2>

          <Link href="/reservations/new">
            <Button wiggleOnHover>Book Your Table</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
