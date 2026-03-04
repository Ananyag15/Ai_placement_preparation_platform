import { generateQuestions } from "../services/api";
import { useState } from "react";

function Interview() {
  const [role, setRole] = useState("");
  const [questions, setQuestions] = useState("");

  const handleGenerate = async () => {
    const res = await generateQuestions(role);
    setQuestions(res.data.questions);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Role"
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={handleGenerate}>Generate</button>
      <p>{questions}</p>
    </div>
  );
}

export default Interview