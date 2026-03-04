import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const generateQuestions = (role) =>
  API.post("/interview/generate", { role });

export const analyzeResume = (resumeText) =>
  API.post("/resume/analyze", { resumeText });