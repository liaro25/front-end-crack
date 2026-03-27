import Card from "@/components/ui/Card";

type OrderItem = {
  id: number;
  type: "item" | "package";
  name: string;
  quantity: number;
  price: number;
};

type OrderCardProps = {
  items: OrderItem[];
  subtotal: number;
  tax: number;
  totalAmount: number;
  paymentAmount?: number;
  paymentLabel?: string;
};

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function OrderCard({
  items,
  subtotal,
  tax,
  totalAmount,
  paymentAmount,
  paymentLabel = "Pay Now",
}: OrderCardProps) {
  return (
    <Card>
      <h3 className="text-lg font-semibold text-text-primary">Order Summary</h3>

      <div className="mt-4 space-y-3 text-sm text-text-primary">
        {items.length === 0 ? (
          <p className="text-text-secondary">No pre-order selected.</p>
        ) : (
          items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4"
            >
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-xs text-text-secondary capitalize">
                  {item.type} × {item.quantity}
                </p>
              </div>
              <p className="shrink-0">
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
          ))
        )}

        <div className="my-3 border-t border-border-soft" />

        <div className="flex items-center justify-between text-text-secondary">
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-text-secondary">
          <span>Tax</span>
          <span>{formatCurrency(tax)}</span>
        </div>

        <div className="flex items-center justify-between font-semibold text-text-primary">
          <span>Total</span>
          <span>{formatCurrency(totalAmount)}</span>
        </div>

        {typeof paymentAmount === "number" && (
          <div className="mt-4 rounded-xl bg-accent p-4">
            <p className="text-sm text-text-primary">
              {paymentLabel}:{" "}
              <span className="font-semibold">
                {formatCurrency(paymentAmount)}
              </span>
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}
