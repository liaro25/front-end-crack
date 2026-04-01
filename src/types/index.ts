// Shared domain types for CRACK reservation system

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

  // null if guest reservation
  userId: number | null;

  // contact info stored when booking is created
  guestName: string;
  guestEmail: string;
  guestPhone: string;

  reservationDate: string;
  startTime: string;
  endTime: string;

  guestCount: number;

  status: ReservationStatus;
  paymentStatus: PaymentStatus;

  createdAt: string;
  updatedAt: string;
};