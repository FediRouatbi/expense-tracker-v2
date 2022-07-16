import React from "react";
import Stats from "../components/Stats";
import ShowAll from "../components/ShowAll";
import Table from "../components/Table";
import Chart from "../components/Chart";
import RecuredExpenses from "../components/RecuredExpenses";

const Profile = () => {
  return (
    <div className="flex  overflow-auto gap-2">
      <div className="grow w-3/5">
        <Stats />
        <Chart />
        <ShowAll />
        <Table />
      </div>
      <div className="w-[250px] lg:w-[300px] hidden md:block">
        <ShowAll />
        <RecuredExpenses />
      </div>
    </div>
  );
};

export default Profile;
