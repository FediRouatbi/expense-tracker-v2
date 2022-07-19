import React from "react";

const Table = () => {
  return (
    <div className="overflow-x-auto mt-3">
      <table className="bacjtable bacjtable-compact w-full">
        <thead>
          <tr className="[&>*]:text-left">
            <th>Name</th>
            <th>Job</th>

            <th>location</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ganderton</td>
            <td>Canada</td>
            <td>Blue</td>
          </tr>
          <tr>
            <td>Ganderton</td>
            <td>Canada</td>
            <td>Blue</td>
          </tr>
          <tr>
            <td>Ganderton</td>
            <td>Canada</td>
            <td>Blue</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
