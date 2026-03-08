const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
import interviewRoutes from "./routes/interviewRouters.js";
import resumeRoutes from "./routes/resumeRouters.js";

app.use("/api/interview", interviewRouters);
app.use("/api/resume", resumeRouters);