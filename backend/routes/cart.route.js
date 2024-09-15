import express from "express";
import { addToCart, getCartServices, removeAllItems, updateQuantity } from "../controllers/cart.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, getCartServices);
router.post("/", protectRoute, addToCart);
router.delete("/", protectRoute, removeAllItems);
router.put("/:id", protectRoute, updateQuantity);

export default router