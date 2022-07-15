import React from "react";
import { Link } from "react-router-dom";

const ShowAll = () => {
  return (
    <div className="flex w-full justify-between pt-5">
      <div>Latest Expenses</div>
      <Link to="/expenses">View All</Link>
    </div>
  );
};

export default ShowAll;
