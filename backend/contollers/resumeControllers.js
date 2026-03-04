import { analyzeResume } from "../services/aiService.js";

export const analyzeUserResume = async (req, res) => {
  try {
    const { resumeText } = req.body;
    const analysis = await analyzeResume(resumeText);
    res.json({ success: true, analysis });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};