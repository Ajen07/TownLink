import { BadRequestError, handleErrorResponse } from "@/lib/errors";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { prisma } from "@/lib/db";
import jwt from "jsonwebtoken";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, password } = body;

    if (!email || !password) {
      throw new BadRequestError("Email and password are required");
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    
    if (!user) {
      throw new BadRequestError("Invalid email Id");
    }

    if (!user.isVerified) {
      throw new BadRequestError("User is not verified");
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      throw new BadRequestError("Invalid password");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET!, {
      expiresIn: "1d",
    });

    const resp = NextResponse.json({
      message: "User logged in successfully",
      status: 200,
    });

    resp.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict", 
    });

    return resp;
  } catch (error: any) {
    return handleErrorResponse(error);
  }
}
