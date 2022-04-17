import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import Reviews from "./Reviews";

const Reviwe = () => {
  const [reviwes, setreviwe] = useState([]);
  useEffect(() => {
    fetch("reviwedata.json")
      .then((response) => response.json())
      .then((data) => setreviwe(data));
  }, []);

  return (
    <div>
      <h1>Reviwes</h1>
      <div className="pt-10 grid md:grid-cols-3 gap-5 py10">
        {reviwes.map((reviwe) => (
          <Reviews key={reviwe.id} reviwe={reviwe}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Reviwe;
