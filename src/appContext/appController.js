export const toastOptions = {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const today = new Date().getDay();
const starterDays = days.splice(0, today + 1);
days.push(...starterDays);
days.pop();
days.push("Today");
const labels = days;
function Last7Days() {
  var result = [];
  for (let i = 0; i < 7; i++) {
    let day = new Date();
    day.setDate(day.getDate() - i);
    result.unshift(day.toISOString().slice(0, 10));
  }

  return result;
}

export const sortData = (transactions) => {
  days = Last7Days();
  const lastWeekTransactions = transactions.filter((el) =>
    days.includes(el.date)
  );
  const week = days.map((el) =>
    lastWeekTransactions.filter((tran) => tran.date === el)
  );
  const income = week.map((day) =>
    day
      .filter((el) => el.category === "Income")
      .map((data) => data.ammount)
      .reduce((acc, curr) => acc + curr, 0)
  );
  const expense = week.map((day) =>
    day
      .filter((el) => el.category === "Expense")
      .map((data) => data.ammount)
      .reduce((acc, curr) => acc + curr, 0)
  );
  return { income, expense };
};
export const data = {
  labels,
  datasets: [
    {
      label: "Expenses",
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Income",
      data: [0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
