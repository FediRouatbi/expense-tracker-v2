import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../appContext/AppContext";

const SignUp = () => {
  const { currentUser } = GetData();
  const navTo = useNavigate();
  console.log(currentUser);
  useEffect(() => {
    if (currentUser) navTo("/");
  });
  return (
    !currentUser && (
      <div className="flex justify-center self-center items-center md:items-start z-10 p-4 h-full">
        <div className="  mx-auto rounded-2xl w-100 md:w-96 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
          </div>
          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Full name :
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mohamed ali"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email :
              </label>
              <input
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="space-y-1">
              <label className=" text-sm font-medium text-gray-700 tracking-wide">
                Password :
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="Password"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Confirm Password :
              </label>
              <input
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="Confirm  Password"
              />
            </div>

            <div>
              <button
                type="submit"
                className=" duration-200 active:scale-95 w-full flex justify-center bg-sky-500  hover:bg-sky-600 text-gray-100 p-3  rounded-lg tracking-wide font-semibold   cursor-pointer transition ease-in "
              >
                Sign up
              </button>
            </div>
            <div className="text-center">
              Already have an Account{" "}
              <Link
                to="/signin"
                className="text-red-500 cursor-pointer hover:underline w-fit"
              >
                Sing in here
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default SignUp;
