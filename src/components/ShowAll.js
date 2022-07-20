import React from "react";
import { Link } from "react-router-dom";

const ShowAll = ({ latest }) => {
  return (
    <div className="flex w-full justify-between pt-5 font-bold ">
      <div>{latest ? "Latest" : "Recuring"} Expenses :</div>
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
