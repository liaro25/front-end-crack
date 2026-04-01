import { NextResponse } from "next/server";
import { clearSessionUser } from "@/lib/auth/session";

export async function POST() {
  try {
    await clearSessionUser();

    return NextResponse.json(
      {
        success: true,
        message: "Logout successful.",
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong during logout.",
      },
      { status: 500 }
    );
  }
}