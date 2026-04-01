import { NextRequest, NextResponse } from "next/server";
import {
  ADMIN_PROTECTED_ROUTES,
  AUTH_ROUTES,
  LOGIN_REDIRECT_ADMIN,
  LOGIN_REDIRECT_USER,
  SESSION_COOKIE_NAME,
  USER_PROTECTED_ROUTES,
} from "@/lib/auth/constants";
import type { SessionUser } from "@/lib/auth/types";

function matchesRoute(pathname: string, routes: string[]) {
  return routes.some((route) => pathname === route || pathname.startsWith(`${route}/`));
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const sessionValue = request.cookies.get(SESSION_COOKIE_NAME)?.value;

  let user: SessionUser | null = null;

  if (sessionValue) {
    try {
      user = JSON.parse(sessionValue) as SessionUser;
    } catch {
      user = null;
    }
  }

  const isAdminRoute = matchesRoute(pathname, ADMIN_PROTECTED_ROUTES);
  const isUserRoute = matchesRoute(pathname, USER_PROTECTED_ROUTES);
  const isAuthRoute = AUTH_ROUTES.includes(pathname);

  if ((isAdminRoute || isUserRoute) && !user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdminRoute && user?.role !== "admin") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isAuthRoute && user) {
    const redirectTo =
      user.role === "admin" ? LOGIN_REDIRECT_ADMIN : LOGIN_REDIRECT_USER;

    return NextResponse.redirect(new URL(redirectTo, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/account/:path*",
    "/my-reservations/:path*",
    "/login",
    "/register",
  ],
};