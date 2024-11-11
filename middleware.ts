import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// const protectedPath = "/register-internal-2411";

export function middleware(request: NextRequest) {
  // const { pathname } = request.nextUrl;

  // if (pathname.startsWith(protectedPath)) {
  //   const authToken = request.cookies.get("auth-token");
  //   if (authToken?.value !== process.env.TOKEN || !authToken) {
  const url = new URL("/", request.url);
  return NextResponse.redirect(url);
  //   }
  // }
  // return NextResponse.next();
}

export const config = {
  matcher: [
    "/register-internal-2411",
    "/registrations",
    "/ticket",
    "/ticket/:path*",
  ],
};
