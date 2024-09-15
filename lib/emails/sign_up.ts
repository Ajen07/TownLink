import sendEmail from "@/lib//node-mailer";
import { v4 as uuidv4 } from "uuid";
import { VerifyEmailProps } from "@/lib/types";
import { prisma } from "@/lib/db";
import { BadRequestError, InternalServerError } from "@/lib/errors";

export const sign_up_verification_email = async ({
  email,
  userId,
}: VerifyEmailProps) => {
  try {
    const verificationToken = uuidv4();
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
        email,
      },
    });
    if (!user) {
      throw new BadRequestError("User not found");
    }
    await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        verificationToken,
        verificationTokenExpiry: new Date(Date.now() + 3600000),
      },
    });
    const subject = `Email verification`;
    const html = `<a href='${process.env.DOMAIN_URL}/verify?email=${email}&verificationCode=${verificationToken}'>Click on the link to verify your account</a>`;
    await sendEmail({ to: email, subject, html });
  } catch (e) {
    console.log(e);
    throw new InternalServerError("Error sending verification email");
  }
};
