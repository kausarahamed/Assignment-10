import React from "react";
import { useNavigate } from "react-router-dom";

const Package = ({ packag }) => {
  const navigate = useNavigate;
  const { name, price, img, description } = packag;
  return (
    <div>
      <div className="mx-5 mb-10 bg-gray-200 rounded-xl h-[550px] relative">
        <img className="rounded-t-xl w-full mt-3 h-[200px]" src={img} alt="" />
        <h3 className="text-4xl font-serif italic text-center text-blue-500 font-bold pt-1">
          {name}
        </h3>
        <div className="text-xl font-sans p-5 ">{description}</div>
        <div className="text-xl font-sans p-5 ">
          <span className="text-2xl">Price: </span>
          {price}
        </div>
      </div>
    </div>
  );
};

export default Package;
