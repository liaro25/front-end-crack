import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";

type ReservationCardProps = {
  guestName: string;
  date: string;
  time: string;
  guestCount: number;
  status:
    | "pending"
    | "approved"
    | "cancelled"
    | "completed"
    | "no_show"
    | "paid"
    | "unpaid"
    | "partial"
    | "refunded";
};

export default function ReservationCard({
  guestName,
  date,
  time,
  guestCount,
  status,
}: ReservationCardProps) {
  return (
    <Card>
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {guestName}
          </h3>

          <div className="mt-1 space-y-1 text-sm text-text-secondary">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guestCount}</p>
          </div>
        </div>

        <StatusBadge status={status} />
      </div>

      <div className="mt-4 flex gap-2">
        <Button className="px-3 py-2 text-sm">View</Button>
        <Button variant="outline" className="px-3 py-2 text-sm">
          Edit
        </Button>
      </div>
    </Card>
  );
}
