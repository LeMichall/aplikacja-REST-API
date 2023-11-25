import express from "express";

import { upload } from "#auth/avatarMiddleware.js";
import { tokenMiddleware } from "#auth/tokenMiddleware.js";
import {
  userValidationMiddleware,
  emailValidationMiddleware,
} from "#validators/validator.js";

import { loginUser } from "#controllers/users/loginUsers.js";
import { signupUser } from "#controllers/users/signupUsers.js";
import { logoutUser } from "#controllers/users/logoutUsers.js";
import { verifyUsers } from "#controllers/users/verifyUsers.js";
import { currentUser } from "#controllers/users/currentUsers.js";
import { updateAvatar } from "#controllers/users/updateAvatar.js";
import { resendVerifyUsers } from "#controllers/users/resendVerifyUsers.js";

export const router = express.Router();

router.post("/signup", userValidationMiddleware, signupUser);
router.post("/login", userValidationMiddleware, loginUser);
router.get("/logout", tokenMiddleware, logoutUser);
router.get("/current", tokenMiddleware, currentUser);
router.patch(
  "/avatars",
  tokenMiddleware,
  upload.single("avatar"),
  updateAvatar
);
router.post("/verify", emailValidationMiddleware, resendVerifyUsers);
router.get("/verify/:verificationToken", verifyUsers);
