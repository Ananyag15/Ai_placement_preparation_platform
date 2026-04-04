import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import interviewRoutes from "./routes/interviewRouters.js";
import resumeRoutes from "./routes/resumeRouters.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());


// Debug check
console.log("MONGO_URI:", process.env.MONGO_URI);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("✅ Database connected successfully");
})
.catch((err) => {
    console.error("❌ Database Error:", err.message);
});
app.use(cors());
// Routes
app.use("/api/interview", interviewRoutes);
app.use("/api/resume", resumeRoutes);

// Test route
app.get("/", (req, res) => {
    res.send("🚀 AI Placement Preparation Platform Backend Running");
});

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});