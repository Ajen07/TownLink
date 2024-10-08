// TODO: email verification and forgot password if time permits

import nodemailer from "nodemailer";
import { EmailProps } from "@/lib/types";

async function sendEmail({ to, subject, html }: EmailProps) {
  let mailTransporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let mailDetails = {
    from: process.env.EMAIL_ID,
    to,
    subject,
    html,
  };

  return mailTransporter.sendMail(mailDetails, function (err, data) {
    if (err) {
      console.log("Error Occurs");
    } else {
      console.log("Email sent successfully");
    }
  });
}

export default sendEmail;