import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to AI Placement Platform 🚀</h1>
      <p>This is landing page</p>

      <button onClick={() => navigate("/upload")}>
        Go to Upload Page
      </button>
    </div>
  );
}

export default Landing;