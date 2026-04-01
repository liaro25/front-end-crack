import { NextResponse } from "next/server";
import {
  LOGIN_REDIRECT_ADMIN,
  LOGIN_REDIRECT_USER,
} from "@/lib/auth/constants";
import { setSessionUser } from "@/lib/auth/session";
import { toSessionUser, validateLogin } from "@/lib/auth/auth-service";
import type { LoginInput } from "@/lib/auth/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LoginInput;

    const user = validateLogin(body);

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email or password.",
        },
        { status: 401 }
      );
    }

    const sessionUser = toSessionUser(user);
    await setSessionUser(sessionUser);

    return NextResponse.json(
      {
        success: true,
        message: "Login successful.",
        user: sessionUser,
        redirectTo:
          user.role === "admin"
            ? LOGIN_REDIRECT_ADMIN
            : LOGIN_REDIRECT_USER,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong during login.",
      },
      { status: 500 }
    );
  }
}