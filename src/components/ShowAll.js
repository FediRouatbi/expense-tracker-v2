import React from "react";
import { Link } from "react-router-dom";

const ShowAll = () => {
  return (
    <div className="flex w-full justify-between pt-5 font-bold ">
      <div>Latest Expenses :</div>
      <Link
        to="/expenses"
        className="hover:text-sky-300 hover:underline-offset-2 hover:underline"
      >
        View All
      </Link>
    </div>
  );
};

export default ShowAll;
