import express from "express";
import { analyzeUserResume } from "../controllers/resumeControllers.js";

const router = express.Router();

router.post("/analyze", analyzeUserResume);

export default router;