import { genToken } from "#auth/tokenService.js";
import { getUser } from "#repositories/getUser.js";
import { updateUser } from "#repositories/updateUser.js";

export async function loginUser(req, res, next) {
  const { email, password } = req.body;
  const user = await getUser(email);
  if (!user || !(await user.validatePassword(password)))
    return res.status(401).json({ message: "Email or password is wrong" });
  const userPayload = {
    id: user._id,
    email: user.email,
    subscription: user.subscription,
  };
  const token = genToken(userPayload);
  await updateUser(user.email, { token });
  return res.status(200).json({ user: userPayload, token });
}
