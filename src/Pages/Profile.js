import React from "react";
import Stats from "../components/Stats";
import ShowAll from "../components/ShowAll";
import Table from "../components/Table";
import Chart from "../components/Chart";
import RecuredExpenses from "../components/RecuredExpenses";
import { GetData } from "../appContext/AppContext";

const Profile = () => {
  const { currentUser } = GetData();
  return (
    <div className="flex  overflow-auto gap-2">
      <div className="grow w-3/5">
        <div className="pb-4 font-bold text-2xl md:text-4xl">
          Welcome {currentUser?.displayName?.split(" ").shift() || ""}
        </div>
        <Stats />
        <Chart />
        <ShowAll latest={true} />
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
