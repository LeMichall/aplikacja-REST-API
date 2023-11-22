import dotenv from "dotenv";
import JWT from "jsonwebtoken";

dotenv.config();
const { JWT_SECRET: secretKey } = process.env;

export const genToken = (user) => {
  return JWT.sign(user, secretKey, { expiresIn: "12h" });
};

export const verifyToken = (token) => {
  try {
    return JWT.verify(token, secretKey);
  } catch (error) {
    console.error(error.message);
    if (error instanceof JWT.TokenExpiredError)
      throw new Error("Token expired");
    if (error instanceof JWT.JsonWebTokenError)
      throw new Error("Token is invalid");
    throw new Error("Token error");
  }
};
