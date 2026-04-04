import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import QuestionCard from "../components/QuestionCard";

function Interview() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    API.get("/interview")
      .then((res) => setQuestions(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Interview Questions</h2>
      {questions.map((q, i) => (
        <QuestionCard key={i} question={q} />
      ))}
    </div>
  );
}

export default Interview;