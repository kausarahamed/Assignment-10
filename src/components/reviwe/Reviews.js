import React from "react";

const Reviews = ({ reviwe }) => {
  const { name, ratting, comment } = reviwe;
  return (
    <div>
      <div className="mx-5 mb-10 bg-white rounded-xl h-[500px] relative shadow-2xl">
        <h3 className="text-4xl font-serif italic  text-center text-blue-500 font-bold pt-1">
          {name}
        </h3>
        <div className="text-xl font-sans p-5 ">{comment}</div>
        <div className="text-xl font-sans p-5 absolute bottom-5">
          <span className="text-2xl">Ratting: </span>
          {ratting}
          <span className="text-xl"> stars</span>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
