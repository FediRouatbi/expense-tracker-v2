import React from "react";

const SignUp = () => {
  return (
    <div className="flex justify-center self-center  z-10 ">
      <div className=" bg-white mx-auto rounded-2xl w-100 ">
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
              className=" duration-200 active:scale-95 w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in "
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
