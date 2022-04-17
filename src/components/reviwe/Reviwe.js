import React, { useEffect, useState } from "react";
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
      <div className="flex justify-center ">
        <div
          style={{ height: "1px" }}
          className="bg-slate-900 w-1/2 mt-8"
        ></div>
        <p className="text-6xl ">Reviwes</p>
        <div
          style={{ height: "1px" }}
          className="bg-slate-900 w-1/2 mt-8 "
        ></div>
      </div>

      <div className="pt-10 grid md:grid-cols-3 gap-5 py10 ">
        {reviwes.map((reviwe) => (
          <Reviews key={reviwe.id} reviwe={reviwe}></Reviews>
        ))}
      </div>
    </div>
  );
};

export default Reviwe;
