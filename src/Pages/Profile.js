import React from "react";
import Stats from "../components/Stats";
import ShowAll from "../components/ShowAll";
import Table from "../components/Table";
import Chart from "../components/Chart";
const Profile = () => {
  return (
    <div>
      <Stats />
      <Chart />
      <ShowAll />
      <Table />
    </div>
  );
};

export default Profile;
