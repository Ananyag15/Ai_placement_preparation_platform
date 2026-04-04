import React, { useEffect, useState } from "react";
import API from "../services/api";
import Navbar from "../components/Navbar";
import RoadmapCard from "../components/RoadmapCard";

function Roadmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    API.get("/roadmap")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Roadmap</h2>
      {data.map((item, index) => (
        <RoadmapCard key={index} step={item} />
      ))}
    </div>
  );
}

export default Roadmap;