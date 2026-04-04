import React, { useState } from "react";
import axios from "axios";

function UploadResume() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("resume", file);

    try {
      await axios.post("http://localhost:5000/api/resume/upload", formData);
      alert("Resume Uploaded Successfully!");
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div>
      <h2>Upload Resume</h2>

      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <br /><br />

      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default UploadResume;