import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GetData } from "../appContext/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../appContext/appController";
const ForgotPassword = () => {
  const emailRef = useRef();
  const { currentUser, resetPassword } = GetData();
  const navTo = useNavigate();
  console.log(currentUser);
  useEffect(() => {
    if (currentUser) navTo("/");
  });
  const send = async () => {
    try {
      const email = emailRef.current.value;
      await resetPassword(email);
      toast.success("Email send", toastOptions);
      emailRef.current.value = "";
    } catch (err) {
      toast.error(err.message, toastOptions);
    }
  };
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
                  ref={emailRef}
                  className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type=""
                  placeholder="mohamed@gmail.com"
                />
              </div>

              <div>
                <button
                  onClick={send}
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
        <ToastContainer />
      </div>
    )
  );
};

export default ForgotPassword;
