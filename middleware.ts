import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path.startsWith("/auth");

  const token = request.cookies.get("token")?.value || "";

  if (isPublicPath && token) {
    return NextResponse.redirect("/");
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect("/auth/login");
  }

  if (!isPublicPath && token) {
    try {
      const decodedUser = jwt.verify(token, process.env.JWT_SECRET!);
    } catch (error) {
      console.log("invalid token");

      const resp = NextResponse.redirect("/auth/login");
      resp.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

      return resp;
    }
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/auth/:path*"],
};
