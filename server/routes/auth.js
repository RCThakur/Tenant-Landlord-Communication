// server/routes/auth.js
import express from "express";
import { register, login } from "../controllers/authController.js";
// import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
// router.get("/properties", verifyToken, getAllProperties);
// router.post("/properties", verifyToken, createProperty);

export default router;
