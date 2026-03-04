mport express from "express";
import { analyzeUserResume } from "../controllers/resumeController.js";

const router = express.Router();

router.post("/analyze", analyzeUserResume);

export default router;