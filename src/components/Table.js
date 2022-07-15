import React from "react";

const Table = () => {
  return (
    <div class="overflow-x-auto mt-3">
      <table class="table w-full">
        <thead>
          <tr className="[&>*]:p-1">
            <th></th>
            <th>PRODUCT NAME </th>
            <th>COLOR</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="[&>*]:p-1">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality </td>
            <td>Blue</td>
          </tr>

          <tr class="active [&>*]:p-1">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop </td>
            <td>Purple</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
