import React from "react";
import { Link } from "react-router-dom";
const Stats = () => {
  return (
    <div className="flex  gap-2 items-center">
      <div className=" stats  bg-neutral  text-primary-content items-start  lg:p-4  p-2 lg:max-w-md max-w-xs w-full flex">
        <div className="flex flex-col grow w-full">
          <div className="stat p-1 justify-items-center  ">
            <div className=" text-sm xl:text-3xl"> Balance</div>
            <div className="">$350,400</div>
            <div className="mt-2"></div>
          </div>

          <Link
            to="/expenses"
            className="btn btn-xs btn-success text-xs   p-1 sm:hidden"
          >
            Add funds
          </Link>
        </div>

        <div className="  stat p-1 justify-items-center w-fit">
          <div className=" text-sm xl:text-3xl">Income</div>
          <div className="">$100,400</div>
        </div>
        <div className="stat p-1 justify-items-center w-fit ">
          <div className=" text-sm xl:text-3xl">Expense</div>
          <div className="">$40,400</div>
        </div>
      </div>
      <Link
        to="/expenses"
        className="btn btn-md  items-center lg:btn-md btn-success  text-base lg:text-xl   p-1 hidden sm:flex"
      >
        Add funds
      </Link>
    </div>
  );
};

export default Stats;
