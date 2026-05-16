import crypto from "crypto";
import { query } from "../../shared/db.js";

export const createAccountVerificationToken = async (userId) => {
  const verificationToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(verificationToken).digest("hex");
  await query(
    `UPDATE users SET accountverificationtoken = $1, accountverificationtokenexpires = $2 WHERE id = $3`,
    [hashedToken, new Date(Date.now() + 30 * 60 * 1000), userId]
  );
  return verificationToken;
};

export const createPasswordResetToken = async (userId) => {
  const resetToken = crypto.randomBytes(32).toString("hex");
  const hashedToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  await query(
    `UPDATE users SET passwordresettoken = $1, passwordresetexpires = $2 WHERE id = $3`,
    [hashedToken, new Date(Date.now() + 30 * 60 * 1000), userId]
  );
  return resetToken;
};
