// Reservation Status
export type ReservationStatus =
  | "pending"
  | "approved"
  | "cancelled"
  | "completed"
  | "no_show";

// Payment Status
export type PaymentStatus =
  | "paid"
  | "unpaid"
  | "partial"
  | "refunded";

// Reservation
export type Reservation = {
  id: number;
  reservationCode: string;

  guestName: string;
  guestEmail: string;
  guestPhone: string;

  reservationDate: string;
  startTime: string;

  guestCount: number;

  status: ReservationStatus;
  paymentStatus: PaymentStatus;
};