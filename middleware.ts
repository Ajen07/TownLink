import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path.startsWith("/auth");

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect(process.env.DOMAIN_URL!);
  }

  else if (!isPublicPath && !token) {
    return NextResponse.redirect( process.env.DOMAIN_URL! + "/auth/sign-in");
  }
  
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"],
};
