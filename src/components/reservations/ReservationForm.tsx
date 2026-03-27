import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

export default function ReservationForm() {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-text-primary mb-6">
        Make a Reservation
      </h2>

      <div className="space-y-4">
        <Input label="Guest Name" placeholder="Enter your name" />

        <Input label="Email" placeholder="Enter your email" />

        <Input label="Phone" placeholder="Enter your phone" />

        <div>
          <label className="text-sm text-text-secondary">Date</label>
          <input
            type="date"
            className="mt-1 w-full rounded-xl border border-border-soft p-2"
          />
        </div>

        <div>
          <label className="text-sm text-text-secondary">Time</label>
          <select className="mt-1 w-full rounded-xl border border-border-soft p-2">
            <option>10:00</option>
            <option>12:00</option>
            <option>14:00</option>
            <option>16:00</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-text-secondary">Guests</label>
          <select className="mt-1 w-full rounded-xl border border-border-soft p-2">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
            <option>5 Guests</option>
            <option>6 Guests</option>
          </select>
        </div>

        <Button className="w-full" wiggleOnHover>
          Reserve Table
        </Button>
      </div>
    </Card>
  );
}
