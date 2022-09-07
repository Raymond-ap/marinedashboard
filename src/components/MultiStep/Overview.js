import React from "react";
import { MdWork } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Overview = () => {
  return (
    <div className="bg-white w-full h-screen grid items-center justify-center">
      <div className="text-center">
        <h1 className="my-2 text-3xl lg:text-4xl font-extrabold tracking-wider capitalize text-[#234092]">
          buy your <span className="text-[#e41d21]">marine&nbsp;</span>insurance
        </h1>
        <p className="text-base font-medium text-gray-300">
          Select a category to get started
        </p>
        <div className="grid lg:grid-cols-2 gap-4 my-10">
          <NavLink
            to={"/customer"}
            className="text-white flex flex-row hover:bg-blue-800 bg-[#234092] items-center justify-center py-4 rounded-md shadow-sm"
          >
            <MdWork size={20} />
            <p className="ml-2 text-base">I am a Broker or Agent</p>
          </NavLink>
          <NavLink 
          to={"/customer"}
          className="text-gray-800 flex flex-row bg-[#f8f5f5] items-center justify-center py-4 rounded-md shadow-sm">
            <FaUserAlt size={20} />
            <p className="ml-2">I am a customer buying</p>
          </NavLink>
        </div>
        <div className="">
          <NavLink
          to="/login" className="text-base font-medium text-gray-300 ">
            Already have an account?{" "}
            <span className="text-[#234092] font-bold capitalize underline">
              login
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Overview;
