import React from "react";
import img from "../../img/1640347898526.png";
const About = () => {
  return (
    <div className="flex mt-5 mb-14">
      <div>
        <div>
          <img className="rounded-sm " src={img} alt="" />
        </div>

        <div className="mt-7  text-2xl flex gap-10">
          <span className="text-3xl text-slate-600"> Name</span>
          <span className="ml-9">Md kausar Ahamed</span>
        </div>
        <div className="mt-2  text-2xl flex gap-10 ">
          <span className="text-3xl text-slate-600 flex"> Email</span>
          <span className="ml-11">galibhasan517@gmail.com</span>
        </div>
        <div className="mt-2  text-2xl flex  gap-10">
          <span className="text-3xl text-slate-600 flex"> Contacts</span>
          <span className=""> 01868384430</span>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-serif text-center ">
          <span className="border-b-2 border-dotted border-red-300">
            About Me
          </span>
        </h1>
        <p className="mt-4 ml-14 text-2xl">
          I am very passionate about programming development. I always try to
          hard work to fulfill my project.In every moment I try to gain my
          programming level.In next 6 months at least I want to join a reputated
          programming company as a interner or full time job. Besides in the
          next 10 years, I'd like to move into a Chief programming Officer role.
          A position like this senior programming devoloper job would let me
          gain more experience with project management and leadership.
        </p>
      </div>
    </div>
  );
};

export default About;
