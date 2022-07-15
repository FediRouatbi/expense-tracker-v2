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

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
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

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: [4, 5, 6, 9, 8, 50, 3, 6],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Income",
      data: [4, 5, 6, 9, 8, 2, 3, 6],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const Chart = () => {
  return (
    <div className="mt-3 h-64">
      <Bar options={(options, { maintainAspectRatio: false })} data={data} />
    </div>
  );
};
export default Chart;
