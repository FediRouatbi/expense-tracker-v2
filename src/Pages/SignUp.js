import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../appContext/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../appContext/appController";
const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { currentUser, signup } = GetData();
  useEffect(() => {
    if (currentUser) navTo("/");
  }, []);

  const navTo = useNavigate();

  const signupUser = async () => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    try {
      if (password !== confirmPassword) throw Error("Password mesh kif kif ");

      await signup(email, password, name);

      navTo("/");
    } catch (err) {
      toast.error(err.message, toastOptions);
    }
  };

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
                ref={nameRef}
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
                ref={emailRef}
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
                ref={passwordRef}
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
                ref={confirmPasswordRef}
              />
            </div>

            <div>
              <button
                onClick={signupUser}
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
        <ToastContainer />
      </div>
    )
  );
};

export default SignUp;
