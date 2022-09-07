import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";
export default function Success({ prevStep, values }) {
  
  const handlePrevStep = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className="bg-white w-full h-screen grid items-center justify-center">
      <div className=" w-2/2 flex flex-col mx-auto p-3 justify-center items-center ">
        <div className="h-14 w-14 border-4 rounded-full border-[#234092] flex justify-center items-center">
          <AiOutlineCheck className="text-[#234092]" size={30} />
        </div>
        <h1 className="font-bold text-gray-700 text-3xl my-2">Thank you!</h1>
        <p className="text-gray-700">
          Your submission is received and we will contact you soon
        </p>
        <NavLink
          to={"/"}
          className="mt-10 text-[#e41d21] font-bold uppercase text-base flex flex-row items-center"
        >
          <BsArrowLeft className="mx-2" />
          back to home
        </NavLink>
      </div>
    </div>
  );
}
