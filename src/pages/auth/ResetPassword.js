import React from "react";
import { NavLink } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="grid h-screen items-center justify-center mx-auto">
      <div className="">
        <div className="w-96 p-6 m-auto bg-white rounded-md shadow-md">
          <h1 className="text-3xl font-semibold text-center text-purple-700">
            Password Reset
          </h1>
          <form className="mt-6">
            <div className="mb-2">
              <label
                for="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Please enter your email address. We will send you a link to
                reset your password.
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
            </div>

            <div className="mt-6">
              <button className="w-full bg-blue-200 py-2 rounded-md font-bold">
                Send Reset Link
              </button>
            </div>
          </form>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <NavLink
              to={"/"}
              className="font-medium text-purple-600 hover:underline"
            >
              Log in
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
