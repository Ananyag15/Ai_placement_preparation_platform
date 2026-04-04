import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <h1>AI Placement Platform 🚀</h1>
      <button onClick={() => navigate("/upload")}>
        Get Started
      </button>
    </div>
  );
}

export default Landing;