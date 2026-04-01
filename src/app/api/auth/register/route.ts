import { NextResponse } from "next/server";
import { registerUser, validateRegister } from "@/lib/auth/auth-service";
import type { RegisterInput } from "@/lib/auth/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RegisterInput;

    const validation = validateRegister(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          message: validation.message,
        },
        { status: 400 }
      );
    }

    const newUser = registerUser(body);

    return NextResponse.json(
      {
        success: true,
        message: "Registration successful.",
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong during registration.",
      },
      { status: 500 }
    );
  }
}