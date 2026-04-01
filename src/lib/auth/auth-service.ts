import { mockUsers } from "./mock-users";
import type { AppUser, LoginInput, RegisterInput, SessionUser } from "./types";

export function toSessionUser(user: AppUser): SessionUser {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };
}

export function findUserByEmail(email: string): AppUser | undefined {
  return mockUsers.find(
    (user) => user.email.toLowerCase() === email.toLowerCase()
  );
}

export function validateLogin(input: LoginInput): AppUser | null {
  const user = findUserByEmail(input.email);

  if (!user) {
    return null;
  }

  if (user.password !== input.password) {
    return null;
  }

  return user;
}

export function validateRegister(input: RegisterInput): {
  success: boolean;
  message: string;
} {
  if (!input.name.trim()) {
    return {
      success: false,
      message: "Name is required.",
    };
  }

  if (!input.email.trim()) {
    return {
      success: false,
      message: "Email is required.",
    };
  }

  if (!input.password.trim()) {
    return {
      success: false,
      message: "Password is required.",
    };
  }

  if (input.password.length < 6) {
    return {
      success: false,
      message: "Password must be at least 6 characters.",
    };
  }

  if (input.password !== input.confirmPassword) {
    return {
      success: false,
      message: "Passwords do not match.",
    };
  }

  if (!input.phone.trim()) {
    return {
      success: false,
      message: "Phone is required.",
    };
  }

  if (!input.address.trim()) {
    return {
      success: false,
      message: "Address is required.",
    };
  }

  if (!input.dateOfBirth.trim()) {
    return {
      success: false,
      message: "Date of birth is required.",
    };
  }

  const existingUser = findUserByEmail(input.email);

  if (existingUser) {
    return {
      success: false,
      message: "Email is already registered.",
    };
  }

  return {
    success: true,
    message: "Registration input is valid.",
  };
}

export function registerUser(input: RegisterInput): AppUser {
  const newUser: AppUser = {
    id: Date.now(),
    name: input.name,
    email: input.email,
    password: input.password,
    phone: input.phone,
    address: input.address,
    dateOfBirth: input.dateOfBirth,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    role: "user",
  };

  mockUsers.push(newUser);

  return newUser;
}