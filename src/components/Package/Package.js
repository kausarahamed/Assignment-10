import React from "react";
import { useNavigate } from "react-router-dom";

const Package = ({ packag }) => {
  const navigate = useNavigate;
  const { name, price, img, description } = packag;
  return (
    <div>
      <div className="mx-5 mb-10 bg-gray-200 rounded-xl h-[650px] relative">
        <img className="rounded-t-xl w-full mt-3 h-[200px]" src={img} alt="" />
        <h3 className="text-2xl font-serif italic text-center text-blue-500 font-bold pt-1">
          {name}
        </h3>
      </div>
    </div>
  );
};

export default Package;
