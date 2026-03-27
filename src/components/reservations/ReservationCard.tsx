import Card from "@/components/ui/Card";
import StatusBadge from "@/components/ui/StatusBadge";
import Button from "@/components/ui/Button";

type ReservationCardProps = {
  guestName: string;
  date: string;
  time: string;
  guestCount: number;
  status: string;
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
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-text-primary">
            {guestName}
          </h3>

          <div className="text-sm text-text-secondary mt-1 space-y-1">
            <p>Date: {date}</p>
            <p>Time: {time}</p>
            <p>Guests: {guestCount}</p>
          </div>
        </div>

        <StatusBadge status={status as any} />
      </div>

      <div className="flex gap-2 mt-4">
        <Button size="sm">View</Button>
        <Button variant="outline" size="sm">
          Edit
        </Button>
      </div>
    </Card>
  );
}
