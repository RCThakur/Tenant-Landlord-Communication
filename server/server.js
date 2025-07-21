// server/server.js

import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import authRoutes from "./routes/auth.js";
// import propertyRoutes from "./routes/propertyRoutes.js";
import propertyRoutes from "./routes/property.js";

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);
// app.use("/api/properties", propertyRoutes);

app.use("/api/properties", propertyRoutes);

// Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
