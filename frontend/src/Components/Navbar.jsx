import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/upload">Upload</Link> |{" "}
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/roadmap">Roadmap</Link> |{" "}
      <Link to="/interview">Interview</Link>
    </div>
  );
}

export default Navbar;