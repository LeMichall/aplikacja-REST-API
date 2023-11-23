import { getUser } from "#repositories/getUser.js";
import { createUser } from "#repositories/createUser.js";

export async function signupUser(req, res, next) {
  const { email, password } = req.body;
  const user = await getUser(email);
  if (user) return res.status(409).json({ message: "Email in use" });
  try {
    const newUser = await createUser({ email, password });
    return res.status(201).json({
      user: {
        email: newUser.email,
        subscription: newUser.subscription,
        message: "Registration successful",
      },
    });
  } catch (error) {
    console.error(error.message);
  }
}
