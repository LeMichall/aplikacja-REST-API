import { User } from "#models/users.js";
import { updateUser } from "#repositories/updateUser.js";

export async function verifyUsers(req, res, next) {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    if (!user)
      return res
        .status(400)
        .json({ message: "Invalid or expired verification token" });
    if (user.verify)
      return res.status(400).json({ message: "User is already verified" });
    await updateUser(user.email, {
      verify: true,
      verificationToken: "",
    });
    return res.status(200).json({ message: "Verification successful" });
  } catch (error) {
    return next(error);
  }
}
