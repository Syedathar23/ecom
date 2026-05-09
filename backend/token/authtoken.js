// backend/utils/authTokens.js

import crypto from "crypto";
import { prisma } from "../prisma/utils.js";

export const createAccountVerificationToken = async (userId) => {
  const verificationToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(verificationToken)
    .digest("hex");

  await prisma.user.update({
    where: { id: userId },
    data: {
      accountVerificationToken: hashedToken,
      accountVerificationTokenExpires: new Date(Date.now() + 30 * 60 * 1000), // 30 mins
    },
  });

  return verificationToken; // plain token to send in email link
};

export const createPasswordResetToken = async (userId) => {
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  await prisma.user.update({
    where: { id: userId },
    data: {
      passwordResetToken: hashedToken,
      passwordResetExpires: new Date(Date.now() + 30 * 60 * 1000), // 30 mins
    },
  });

  return resetToken; // plain token to send in email
};