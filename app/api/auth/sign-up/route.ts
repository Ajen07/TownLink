import { BadRequestError, handleErrorResponse } from "@/lib/errors";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { prisma } from "@/lib/db";
import { sign_up_verification_email } from "@/lib/emails/sign_up";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { email, password, name } = body;

    if (!email || !password || !name) {
      throw new BadRequestError("Email, password, and name are required");
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const userExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (userExists) {
      throw new BadRequestError("User already exists");
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    //await sign_up_verification_email(email);

    return NextResponse.json(
      { message: "User created", user },
      { status: 201 }
    );
  } catch (error: any) {
    return handleErrorResponse(error);
  }
}
