import { User } from "#models/users.js";

export async function getUser(email) {
  try {
    return await User.findOne({ email });
  } catch (error) {
    console.error(error.message);
  }
}
