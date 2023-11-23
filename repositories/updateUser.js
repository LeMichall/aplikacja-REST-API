import { User } from "#models/users.js";

export async function updateUser(email, userData) {
  try {
    return await User.findOneAndUpdate({ email }, userData);
  } catch (error) {
    console.error(error.message);
  }
}
