import React from "react";
import { GetData } from "../appContext/AppContext";

const Table = ({ takeData, edit }) => {
  const { transactions, deleteTransaction } = GetData();

  return (
    <div className="overflow-auto mt-3 ">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="max-w-4xl w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Category
              </th>
              <th scope="col" className="py-3 px-3">
                Ammount
              </th>
              <th scope="col" className="py-3 px-6">
                Note
              </th>
              {edit && (
                <th scope="col" className="py-3 px-6">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {transactions.map((el) => (
              <tr
                key={el.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.category}
                </th>
                <td className="py-4 px-6">{el.ammount}</td>
                <td className="py-4 px-6">{el.note}</td>

                {edit && (
                  <td className="flex items-center py-4 px-6 space-x-3">
                    <a
                      onClick={takeData}
                      data-id={el.id}
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                    <a
                      onClick={deleteTransaction}
                      data-id={el.id}
                      href="#"
                      className="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Remove
                    </a>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
