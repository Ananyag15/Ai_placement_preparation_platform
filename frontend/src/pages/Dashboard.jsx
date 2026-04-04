import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";


function Dashboard() {
  const [score, setScore] = useState(0);

  useEffect(() => {
    API.get("/resume/data")
      .then((res) => setScore(res.data.score))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Dashboard</h2>
      <ScoreCard score={score} />
    </div>
  );
}

export default Dashboard;