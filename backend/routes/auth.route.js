import express from "express";
import { login, logout, refresh_accessToken, register } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", register);

router.post("/login", login);

router.post("/logout", logout);

router.post("/refresh-token", refresh_accessToken);

export default router;

