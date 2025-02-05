import express from "express";
import { signUpUser, loginUser, forgotPassword, resetPassword, checkForToken } from "../controllers/auth.controller.js";
const router = express.Router();


router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/forgot-password", checkForToken, forgotPassword);
router.post("/reset-password/:token", checkForToken, resetPassword);

export { router };
