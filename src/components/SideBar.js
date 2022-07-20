import React, { useState } from "react";
import { FcHome, FcSettings, FcBinoculars } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { GetData } from "../appContext/AppContext";
const SideBar = () => {
  const { currentUser, signOutF } = GetData();
  const { pathname } = useLocation();

  const [open, setOpen] = useState(true);
  const transition = useTransition(open, {
    from: { scale: 0.3, x: -50, opacity: 0 },
    enter: { scale: 1, x: 0, opacity: 1 },
    leave: {
      scale: 0.3,
      x: -50,
      opacity: 0,
    },
  });
  return (
    currentUser && (
      <div
        className={`${
          open ? "" : "translate"
        } relative hidden md:block w-44 lg:w-64 duration-500    bg-sky-100 text-black font-bold p-4`}
      >
        <ul className={` flex flex-col   gap-4 text-lg h-full  `}>
          <label
            className={`${
              open ? "self-end " : "self-center "
            } swap swap-rotate  items-center mb-5 w-fit  `}
            onClick={() => setOpen((prev) => !prev)}
          >
            <svg
              className={`${
                open ? "swap-on " : "swap-off"
              } fill-current swap-flip		`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>

            <svg
              className={`${
                open ? "swap-off" : "swap-on"
              } fill-current swap-flip		`}
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label>
          <Link
            to="/"
            className={`${
              pathname === "/" && "bg-sky-200"
            } flex gap-2 items-center p-1  rounded hover:bg-sky-200 `}
          >
            <span className="">
              <FcHome size={30} />
            </span>
            {transition((style, item) =>
              item ? <animated.span style={style}> Profile</animated.span> : ""
            )}
          </Link>
          <Link
            to="/expenses"
            className={`${
              pathname === "/expenses" && "bg-sky-200"
            } flex gap-2 items-center p-1  rounded hover:bg-sky-200 `}
          >
            <span>
              <FcBinoculars size={30} />
            </span>

            {transition((style, item) =>
              item ? <animated.span style={style}> Transactions</animated.span> : ""
            )}
          </Link>
          <Link
            to="/settings"
            className={`${
              pathname === "/settings" && "bg-sky-200"
            } flex gap-2 items-center p-1  rounded hover:bg-sky-200 `}
          >
            <span>
              <FcSettings size={30} />
            </span>

            {transition((style, item) =>
              item ? <animated.span style={style}> Settings</animated.span> : ""
            )}
          </Link>
          <button
            onClick={signOutF}
            className=" mt-auto flex gap-2 items-center p-1 hover:bg-sky-200 rounded"
          >
            <span>
              <BiLogOut size={30} />
            </span>

            {transition((style, item) =>
              item ? <animated.span style={style}> Logout</animated.span> : ""
            )}
          </button>
        </ul>
      </div>
    )
  );
};

export default SideBar;
