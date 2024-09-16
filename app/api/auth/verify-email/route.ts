import { BadRequestError, handleErrorResponse } from "@/lib/errors";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email, verificationCode } = body;

    const user = await prisma.user.findFirst({
      where: {
        email,
        verificationToken: verificationCode,
        verificationTokenExpiry: {
          gte: new Date(Date.now()),
        },
      },
    });
    if (!user) {
      throw new BadRequestError("Invalid verification code");
    } 

    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        isVerified: true,
        verificationToken: null,
        verificationTokenExpiry: null,
      },
    });
    return NextResponse.json({ message: "Email verified", status: 200 });
  } catch (error) {
    return handleErrorResponse(error);
  }
}
