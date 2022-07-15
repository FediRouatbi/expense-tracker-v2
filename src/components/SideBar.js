import React, { useState } from "react";
import { FcHome, FcSettings, FcBinoculars } from "react-icons/fc";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
const SideBar = () => {
  const [open, setOpen] = useState(true);
  console.log(open);
  return (
    <div
      className={`${
        open ? "" : "translate"
      } relative hidden md:block w-64 duration-500  bg-gray-600 text-white font-bold p-4 `}
    >
      <div className="absolute top-3 right-5  ">
        <label
          class=" swap swap-rotate"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            class={`${open ? "swap-on " : "swap-off"} fill-current swap-flip		`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          <svg
            class={`${open ? "swap-off" : "swap-on"} fill-current swap-flip		`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      <ul
        className={`${
          !open && "items-center"
        } flex flex-col  gap-4 text-lg h-full pt-10 `}
      >
        <Link
          to="/"
          className="flex gap-2 items-center p-1  rounded hover:bg-red-300 "
        >
          <FcHome size={30} />
          <span className={`${!open && "hidden"}`}> Profile</span>
        </Link>
        <Link
          to="/expenses"
          className="flex gap-2 items-center p-1 hover:bg-red-300 rounded"
        >
          <FcBinoculars size={30} />
          <span className={`${!open && "hidden"}`}> Expenses</span>
        </Link>
        <Link
          to="/settings"
          className="flex gap-2 items-center p-1 hover:bg-red-300 rounded"
        >
          <FcSettings size={30} />
          <span className={`${!open && "hidden"}`}> Settings</span>
        </Link>
        <Link
          to="/login"
          className=" mt-auto flex gap-2 items-center p-1 hover:bg-red-300 rounded"
        >
          <BiLogOut size={30} />
          <span className={`${!open && "hidden"}`}> Logout</span>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
