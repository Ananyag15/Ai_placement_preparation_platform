import { generateInterviewQuestions } from "../services/aiService.js";

export const getInterviewQuestions = async (req, res) => {
  try {
    const { role } = req.body;
    const questions = await generateInterviewQuestions(role);
    res.json({ success: true, questions });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};