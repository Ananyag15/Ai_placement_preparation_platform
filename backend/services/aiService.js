import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const analyzeResume = async (resumeText) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "You are a resume analyzer." },
      { role: "user", content: `Analyze this resume:\n${resumeText} `}
    ], });

  return response.choices[0].message.content;
};

export const generateInterviewQuestions = async (role) => {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Generate interview questions." },
      { role: "user", content: `Generate interview questions for ${role}` }
    ],
  });

  return response.choices[0].message.content;
};
