import ReservationForm from "@/components/reservations/ReservationForm";

export default function NewReservationPage() {
  return (
    <main className="min-h-screen bg-background px-6 py-10">
      <div className="mx-auto max-w-3xl space-y-6">
        <section className="space-y-2 text-center">
          <h1 className="text-3xl font-bold text-text-primary">
            Make a Reservation
          </h1>
          <p className="text-text-secondary">
            Book your dessert table and pre-order your favorite treats.
          </p>
        </section>

        <div className="mx-auto max-w-md">
          <ReservationForm />
        </div>
      </div>
    </main>
  );
}
