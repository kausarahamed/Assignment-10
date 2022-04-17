import React from "react";
import img from "../../img/1640347898526.png";
const About = () => {
  return (
    <div>
      <div>
        <div className="  ">
          <img className="rounded-sm mt-5" src={img} alt="" />
        </div>

        <h1 className="mt-7  text-2xl flex gap-10">
          <span className="text-3xl text-slate-600"> Name</span>
          <p className="">Md kausar Ahamed</p>
        </h1>
        <h1 className="mt-2  text-2xl flex gap-10 ">
          <span className="text-3xl text-slate-600 flex"> Email</span>
          <p className="">galibhasan517@gmail.com</p>
        </h1>
        <h1 className="mt-2  text-2xl flex  gap-10">
          <span className="text-3xl text-slate-600 flex"> Contacts</span>
          <p className=""> 01868384430</p>
        </h1>
      </div>
    </div>
  );
};

export default About;
