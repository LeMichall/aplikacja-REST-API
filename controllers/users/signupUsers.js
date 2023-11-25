import gravatar from "gravatar";

import { getUser } from "#repositories/getUser.js";
import { createUser } from "#repositories/createUser.js";
import { sendVerificationMail } from "#repositories/sendMail.js";

export async function signupUser(req, res, next) {
  const { email, password } = req.body;
  const user = await getUser(email);
  if (user) return res.status(409).json({ message: "Email in use" });
  try {
    const avatarURL = gravatar.url(email, { default: "monsterid" }, true);
    const newUser = await createUser({ email, password, avatarURL });
    await sendVerificationMail(newUser.email, newUser.verificationToken);
    return res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        message: "Registration successful",
        avatar: newUser.avatarURL,
      },
    });
  } catch (error) {
    console.error(error.message);
  }
}
