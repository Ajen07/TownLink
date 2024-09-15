-- AlterTable
ALTER TABLE "User" ADD COLUMN     "forgotPasswordToken" TEXT,
ADD COLUMN     "forgotPasswordTokenExpiry" TIMESTAMP(3),
ADD COLUMN     "isVerified" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "verificationToken" TEXT,
ADD COLUMN     "verificationTokenExpiry" TIMESTAMP(3);
