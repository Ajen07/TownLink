/*
  Warnings:

  - You are about to drop the column `forgotPasswordToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `forgotPasswordTokenExpiry` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "forgotPasswordToken",
DROP COLUMN "forgotPasswordTokenExpiry",
ALTER COLUMN "verificationToken" SET DEFAULT '';
