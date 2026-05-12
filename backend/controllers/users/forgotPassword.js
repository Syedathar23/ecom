// forgotPasswordController.js
import asyncHandler from "express-async-handler";
import { query } from "../../db.js";
import { createPasswordResetToken } from "../../token/authtoken.js";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const forgotPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;

  const userResult = await query(`SELECT * FROM users WHERE email = $1`, [email]);
  const user = userResult.rows[0];

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  // Call the function here
  const resetToken = await createPasswordResetToken(user.id);

  // Send reset email
  const resetLink = `http://localhost:3000/reset-password?token=${resetToken}`;

  const msg = {
    to: user.email,
    from: 'your@email.com',
    subject: 'Reset Your SkillBolt Password',
    text: `Click here to reset your password: ${resetLink}`,
    html: `<p>Click <a href="${resetLink}">here</a> to reset your password.</p>`,
  };

  await sgMail.send(msg);

  res.status(200).json({ success: true, message: "Password reset link sent to your email" });
});