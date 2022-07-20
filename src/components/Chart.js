import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { data, sortData } from "../appContext/appController";
import { GetData } from "../appContext/AppContext";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Weekly Transaction",
    },
  },
};

const Chart = () => {
  const { transactions } = GetData();
  const { expense, income } = sortData(transactions);

  data.datasets[0].data = expense;
  data.datasets[1].data = income;
  return (
    <div className="w-full">
      <div className="mt-3 h-64 w-11/12 mx-auto">
        <Bar options={(options, { maintainAspectRatio: false })} data={data} />
      </div>
    </div>
  );
};
export default Chart;
