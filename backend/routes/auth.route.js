import express from "express";
import { login, logout, refresh_accessToken, register, getProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/refresh-token", refresh_accessToken);

router.get("/profile", protectRoute, getProfile)

export default router;

