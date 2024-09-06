import express from "express";
import { getAllServices, getFeaturedServices, createService, deleteService, getRecommendedServices, getServicesByCategory, toggleFeaturedService } 
    from "../controllers/service.controller.js";
import { protectRoute, adminRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

router.get("/", protectRoute, adminRoute, getAllServices);
router.get("/featuredServices", getFeaturedServices);
router.get("/recommendations", getRecommendedServices);
router.get("/category/:category", getServicesByCategory);
router.post("/", protectRoute, adminRoute, createService);
router.put("/:id", protectRoute, adminRoute, toggleFeaturedService);
router.delete("/:id", protectRoute, adminRoute, deleteService);

export default router;

