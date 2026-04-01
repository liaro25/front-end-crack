import { NextResponse } from "next/server";
import { getSessionUser } from "@/lib/auth/session";

export async function GET() {
  try {
    const user = await getSessionUser();

    return NextResponse.json(
      {
        success: true,
        user,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Failed to get current user.",
      },
      { status: 500 }
    );
  }
}