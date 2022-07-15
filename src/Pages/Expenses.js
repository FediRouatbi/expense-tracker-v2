import React from "react";
import Table from "../components/Table";
const Expenses = () => {
  return (
    <>
      <div className="text-right">
        <label for="my-modal-6" className="btn btn-info btn-sm ">
          Add
        </label>
      </div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <form action="">
            <div className="flex flex-col gap-2 items-center pt-3">
              <input
                required
                type="text"
                placeholder="Name"
                class="input input-bordered input-sm w-full max-w-xs"
              />
              <input
                type="text"
                placeholder="Category"
                class="input input-bordered input-sm w-full max-w-xs"
              />
              <input
                required
                type="text"
                placeholder="Price"
                class="input input-bordered input-sm w-full max-w-xs"
              />
              <input
                type="date"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>

            <div class="modal-action justify-between">
              <button class="btn">Confirm</button>
              <label for="my-modal-6" class="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
      <Table />
    </>
  );
};

export default Expenses;
