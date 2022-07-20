import React from "react";
import { GetData } from "../appContext/AppContext";

const RecuredExpenses = () => {
  const { transactions } = GetData();
  const inputList = new Set();
  let duplicates = new Set();
  //expenses with no id and date so we can compare objects
  const expenses = transactions.map((elm) => {
    const { note, ammount, category } = elm;
    return { note, ammount, category };
  });
  for (const item of expenses) {
    if (inputList.has(JSON.stringify(item))) {
      duplicates.add(JSON.stringify(item));
    } else {
      inputList.add(JSON.stringify(item));
    }
  }
  duplicates = [...duplicates].map((elm) => JSON.parse(elm));

  return (
    <div className="overflow-x-auto mt-3  border border-black rounded-md shadow-lg ">
      <table className="bacjtable bacjtable-compact w-full  ">
        <thead>
          <tr className=" [&>*]:text-center">
            <th>Category</th>
            <th>Ammount</th>

            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {!duplicates.length && (
            <tr>
              <td
                colSpan={4}
                className="p-4 text-center text-base font-extrabold "
              >
                No Duplicate Transactions
              </td>
            </tr>
          )}
          {duplicates.map((el, i) => (
            <tr key={i} className="[&>*]:text-center">
              <td>{el.category}</td>
              <td>{el.ammount}</td>
              <td>{el.note}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecuredExpenses;
