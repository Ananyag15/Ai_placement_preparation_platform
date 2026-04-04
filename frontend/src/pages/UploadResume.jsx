import React, { useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";

function UploadResume() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("resume", file);

    try {
      await API.post("/resume/upload", formData);
      alert("Uploaded Successfully!");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Upload Resume</h2>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadResume;