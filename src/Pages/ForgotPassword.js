import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../appContext/AppContext";
const ForgotPassword = () => {
  const { currentUser } = GetData();
  const navTo = useNavigate();
  console.log(currentUser);
  useEffect(() => {
    if (currentUser) navTo("/");
  });
  return (
    !currentUser && (
      <div className="flex h-full w-full justify-center md:items-start ">
        <div className="flex justify-center  z-10 flex-col pt-4 max-w-sm">
          <div className=" bg-white mx-auto rounded-2xl w-100 md:w-96">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">
                Forgot Password
              </h3>
            </div>
            <div className="space-y-3">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Email :
                </label>
                <input
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type=""
                  placeholder="mohamed@gmail.com"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="active:scale-95 w-full flex justify-center bg-sky-500  hover:bg-sky-600 text-gray-100 p-3  rounded-lg tracking-wide font-semibold   cursor-pointer  duration-200"
                >
                  SEND
                </button>
              </div>
            </div>
          </div>
          <Link
            to="/signin"
            className="text-red-500 cursor-pointer hover:underline mt-5 w-fit"
          >
            Back to Sign in form
          </Link>
        </div>
      </div>
    )
  );
};

export default ForgotPassword;
