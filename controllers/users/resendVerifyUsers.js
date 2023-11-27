import { getUser } from "#repositories/getUser.js";
import { sendVerificationMail } from "#repositories/sendMail.js";

export async function resendVerifyUsers(req, res, next) {
  try {
    const { email } = req.body;
    const user = await getUser(email);
    if (!user) return res.status(404).json({ message: "User does not exist" });
    if (user.verify)
      return res
        .status(400)
        .json({ message: "Verification has already been passed" });
    await sendVerificationMail(user.email, user.verificationToken);
    return res.status(200).json({ message: "Verification email sent " });
  } catch (error) {
    return next(error);
  }
}
