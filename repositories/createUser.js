import { nanoid } from "nanoid";
import { User } from "#models/users.js";

export async function createUser(userData) {
  try {
    return await User.create({
      ...userData,
      verify: false,
      verificationToken: nanoid(),
    });
  } catch (error) {
    console.log("Error creating user", error);
  }
}
