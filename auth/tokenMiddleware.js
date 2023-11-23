import { User } from "#models/users.js";
import { verifyToken } from "./tokenService.js";

export const getToken = (headers) => {
  return headers.authorization?.replace("Bearer ", "");
};

export async function tokenMiddleware(req, res, next) {
  try {
    const token = getToken(req.headers);
    if (!token) {
      return res.status(401).json({ message: "Token doesn't exist" });
    }
    const { id } = verifyToken(token);
    const newUser = await User.findById(id);
    if (!newUser || newUser.token !== token)
      throw new Error("Token is invalid");
    req.user = newUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Not authorized" });
  }
}
