import type { AppUser } from "./types";

export const mockUsers: AppUser[] = [
  {
    id: 1,
    name: "Admin CRACK",
    email: "admin@crack.com",
    password: "admin123",
    phone: "08000000001",
    address: "Tokyo",
    dateOfBirth: "1990-01-01",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    role: "admin",
  },
  {
    id: 2,
    name: "Lia User",
    email: "lia@example.com",
    password: "user123",
    phone: "08000000002",
    address: "Setagaya",
    dateOfBirth: "1995-05-10",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    role: "user",
  },
];