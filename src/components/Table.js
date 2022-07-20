import React from "react";
import { GetData } from "../appContext/AppContext";

import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useTransition, animated } from "react-spring";
const Table = ({ takeData, edit }) => {
  const { transactions, deleteTransaction } = GetData();
  let data = transactions;
  if (!edit) data = transactions.slice(0, 5);
  return (
    <div className="overflow-auto mt-3 mb-10 ">
      <div className="overflow-x-auto relative  w-full  shadow-lg rounded-lg  border-2 border-zinc-500">
        <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th scope="col" className="py-3 px-6">
                Date
              </th>
              <th scope="col" className="py-3 px-3 text-center">
                Ammount
              </th>
              <th scope="col" className="py-3 px-6 text-center">
                Note
              </th>
              {edit && (
                <th scope="col" className="py-3 px-6 text-center">
                  Action
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {!data.length && (
              <tr>
                <td
                  colSpan={4}
                  className="p-10 text-center text-2xl font-extrabold "
                >
                  No Transactions so far !
                </td>
              </tr>
            )}
            {data.map((el) => (
              <tr
                key={el.id}
                className={`   dark:bg-gray-800 dark:border-gray-700  last:border-none border-b-2 border-gray-300`}
              >
                <th
                  scope="row"
                  className=" py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {el.date}
                </th>
                <td className={` text-center py-4 px-6 `}>
                  <span
                    className={`${
                      el.category === "Income" ? " bg-blue-500" : "bg-red-500"
                    } p-1 rounded-md text-white font-medium`}
                  >
                    ${el.ammount}
                  </span>
                </td>
                <td className="py-4 px-6 text-center">{el.note}</td>

                {edit && (
                  <td className="justify-center flex items-center py-4 px-6 space-x-3">
                    <button
                      onClick={takeData}
                      data-id={el.id}
                      className="hover:scale-110 active:scale-95 transition-all font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      <AiFillEdit size={25} />
                    </button>
                    <button
                      onClick={deleteTransaction}
                      data-id={el.id}
                      className="hover:scale-110 active:scale-95  transition-all font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      <MdDelete size={25} />
                    </button>
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
