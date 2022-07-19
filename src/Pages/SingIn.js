import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../appContext/AppContext";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../appContext/appController";
const SingIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, SignInGoogle, signIn } = GetData();
  const navTo = useNavigate();
  useEffect(() => {
    if (currentUser) navTo("/");
  });
  const signInWithEmailandPassword = async () => {
    try {
      const mail = emailRef.current.value;
      const password = passwordRef.current.value;
      await signIn(mail, password);
    } catch (err) {
      toast.error(err.message, toastOptions);
    }
  };
  return (
    !currentUser && (
      <div className="flex justify-center self-center items-center md:items-start h-full z-10 p-4 ">
        <div className=" mx-auto rounded-2xl w-100 md:w-96 ">
          <div className="mb-4">
            <h3 className="font-semibold text-2xl text-gray-800">Sign In </h3>
            <p className="text-gray-500">Please sign in to your account.</p>
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-700 tracking-wide">
                Email
              </label>
              <input
                ref={emailRef}
                className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="space-y-2">
              <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                Password
              </label>
              <input
                ref={passwordRef}
                className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                type=""
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="text-sky-500 hover:text-sky-600"
                >
                  Forgot your password?
                </Link>
              </div>
            </div>
            <div>
              <button
                onClick={signInWithEmailandPassword}
                type="submit"
                className=" active:scale-95 w-full flex justify-center bg-sky-500  hover:bg-sky-600 text-gray-100 p-3  rounded-lg tracking-wide font-semibold   cursor-pointer transition ease-in duration-200"
              >
                Login
              </button>
            </div>
            <div>
              <button
                onClick={SignInGoogle}
                type="submit"
                className=" active:scale-95 w-full  flex  gap-2 justify-center items-center  p-3  rounded-lg outline  outline-gray-500  tracking-wide font-semibold   cursor-pointer transition ease-in duration-200"
              >
                <FcGoogle size={25} /> Sign in with Google
              </button>
            </div>
            <div className="text-center">
              OR{" "}
              <Link
                to="/signup"
                className="text-red-500 cursor-pointer hover:underline w-fit"
              >
                Sign up here
              </Link>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    )
  );
};

export default SingIn;
