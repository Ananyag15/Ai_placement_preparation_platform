import express from "express";
import { getInterviewQuestions } from "../controllers/interviewControllers.js";

const router = express.Router();

router.post("/generate", getInterviewQuestions);

export default router;