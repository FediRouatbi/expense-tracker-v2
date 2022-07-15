import React from "react";

const SignUp = () => {
  return (
    <div class="flex justify-center self-center  z-10">
      <div class=" bg-white mx-auto rounded-2xl w-100 ">
        <div class="mb-4">
          <h3 class="font-semibold text-2xl text-gray-800">Sign Up </h3>
        </div>
        <div class="space-y-3">
          <div class="space-y-1">
            <label class="text-sm font-medium text-gray-700 tracking-wide">
              Full name :
            </label>
            <input
              class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type=""
              placeholder="mohamed ali"
            />
          </div>
          <div class="space-y-1">
            <label class="text-sm font-medium text-gray-700 tracking-wide">
              Email :
            </label>
            <input
              class=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type=""
              placeholder="mail@gmail.com"
            />
          </div>
          <div class="space-y-1">
            <label class=" text-sm font-medium text-gray-700 tracking-wide">
              Password :
            </label>
            <input
              class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type=""
              placeholder="Password"
            />
          </div>
          <div class="space-y-1">
            <label class="text-sm font-medium text-gray-700 tracking-wide">
              Confirm Password :
            </label>
            <input
              class="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
              type=""
              placeholder="Confirm  Password"
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
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
