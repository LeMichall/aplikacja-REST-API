import express from "express";

import { tokenMiddleware } from "#auth/tokenMiddleware.js";
import { userValidationMiddleware } from "#validators/validator.js";

import { loginUser } from "#controllers/users/loginUsers.js";
import { signupUser } from "#controllers/users/signupUsers.js";
import { logoutUser } from "#controllers/users/logoutUsers.js";
import { currentUser } from "#controllers/users/currentUsers.js";

export const router = express.Router();

router.post("/signup", userValidationMiddleware, signupUser);
router.post("/login", userValidationMiddleware, loginUser);
router.get("/logout", tokenMiddleware, logoutUser);
router.get("/current", tokenMiddleware, currentUser);
