import express from "express";
import { addProperty } from "../controllers/propertyController.js";
import { authenticateToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/createProperties", authenticateToken, addProperty);

export default router;
