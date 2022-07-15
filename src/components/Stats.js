import React from "react";
import { Link } from "react-router-dom";
const Stats = () => {
  return (
    <div class="stats bg-neutral text-primary-content justify-items-center mx-auto p-1 max-w-xl w-full flex">
      <div class="stat p-1 justify-items-center grow w-full">
        <div class=" text-sm"> Balance</div>
        <div class="">$350,400</div>
        <div class="mt-2">
          <Link to="/expenses" class="btn btn-xs btn-success text-xs p-1">
            Add funds
          </Link>
        </div>
      </div>

      <div class="stat p-1 justify-items-center w-fit">
        <div class=" text-sm">Income</div>
        <div class="">$100,400</div>
      </div>
      <div class="stat p-1 justify-items-center w-fit ">
        <div class=" text-sm">Expense</div>
        <div class="">$40,400</div>
      </div>
    </div>
  );
};

export default Stats;
