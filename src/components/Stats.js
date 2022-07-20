import React from "react";
import { Link } from "react-router-dom";
import { GetData } from "../appContext/AppContext";

const Stats = () => {
  const { transactions } = GetData();
  const income = transactions
    .filter((el) => el.category === "Income")
    .reduce((acc, curr) => acc + curr.ammount, 0);
  const expense = transactions
    .filter((el) => el.category === "Expense")
    .reduce((acc, curr) => acc + curr.ammount, 0);
  const balance = income - expense;
  return (
    <div className="flex  gap-2 items-center">
      <div className=" stats  bg-neutral  text-primary-content items-start  lg:p-4  p-2 lg:max-w-md max-w-xs w-full flex">
        <div className="flex flex-col grow w-full border-r-2 border-r-slate-300">
          <div className="stat p-1 justify-items-center  ">
            <div className=" text-sm xl:text-3xl"> Balance</div>
            <div className="">${balance.toFixed(2, 0)}</div>
            <div className="mt-2"></div>
          </div>

          <Link
            to="/expenses"
            className="btn btn-xs btn-success text-xs   p-1 sm:hidden"
          >
            Add Transaction
          </Link>
        </div>

        <div className="  stat p-1 justify-items-center w-fit  ">
          <div className=" text-sm xl:text-3xl">Income</div>
          <div className="">${income.toFixed(2, 0)}</div>
        </div>
        <div className="stat p-1 justify-items-center w-fit ">
          <div className=" text-sm xl:text-3xl">Expense</div>
          <div className="">${expense.toFixed(2, 0)}</div>
        </div>
      </div>
      <Link
        to="/expenses"
        className="btn btn-md  items-center lg:btn-md btn-success  text-base lg:text-xl   p-1 hidden sm:flex"
      >
        Add Transaction
      </Link>
    </div>
  );
};

export default Stats;
