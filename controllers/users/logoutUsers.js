import { User } from "#models/users.js";

export async function logoutUser(req, res, next) {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { token: "" });
    return res.status(204).json({ message: "No content, logout success" });
  } catch (error) {
    return next(error);
  }
}
