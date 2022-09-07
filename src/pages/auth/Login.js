import React from "react";
import { NavLink } from "react-router-dom";
import OTP from "components/OTP";

function Login() {
  return (
    <>
    <div className="grid h-screen items-center justify-center mx-auto">
      <div className="w-full">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-semibold text-center text-[#234092]">
            Login
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <div className="mb-2">
              <label
                for="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>
            <NavLink
              to={"/reset-password"}
              className="text-xs text-[#e41d21] hover:underline"
            >
              Forget Password?
            </NavLink>
            <div className="mt-6 w-full">
              <NavLink to="/dashboard">
                <button className="w-full bg-[#234092] py-2 rounded-md font-bold">
                  Log in
                </button>
              </NavLink>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Don't have an account?{" "}
            <NavLink
              to={"/signup"}
              className="font-medium text-[#234092] hover:underline"
            >
              Sign up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  );
}

export default Login;
