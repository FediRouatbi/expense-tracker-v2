import React, { useRef } from "react";
import Table from "../components/Table";
const Expenses = () => {
  const nameRef = useRef();
  const categorieRef = useRef();
  const selectRef = useRef();
  const priceRef = useRef();
  const dateRef = useRef();
  const handelSumbmit = (e) => {
    e.preventDefault();
    console.log(
      nameRef.current.value,
      categorieRef.current.value,
      selectRef.current.value,
      priceRef.current.value,
      dateRef.current.value
    );
    document.getElementById("my-modal-6").checked = false;
  };
  return (
    <div onSubmit={handelSumbmit}>
      <div className="text-right">
        <label
          htmlFor="my-modal-6"
          className="btn btn-info btn-sm  md:btn-md lg:btn-wide"
        >
          Add
        </label>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form action="">
            <div className="flex flex-col gap-2 items-center pt-3">
              <input
                ref={nameRef}
                required
                type="text"
                placeholder="Name"
                className="input input-bordered input-sm w-full max-w-xs"
              />
              <input
                ref={categorieRef}
                type="text"
                placeholder="Category"
                className="input input-bordered input-sm w-full max-w-xs"
              />
              <select
                ref={selectRef}
                className="select select-bordered select-sm w-full max-w-xs"
              >
                <option disabled value={"Type"}>
                  Type
                </option>
                <option value="expense">Expense</option>
                <option value="income">Income</option>
              </select>
              <input
                ref={priceRef}
                required
                type="number"
                placeholder="Price"
                className="input input-bordered input-sm w-full max-w-xs"
              />
              <input
                ref={dateRef}
                type="date"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>

            <div className="modal-action justify-between sm:justify-around">
              <button htmlFor="my-modal-6" className="btn">
                Confirm
              </button>
              <label htmlFor="my-modal-6" className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
      <Table />
    </div>
  );
};

export default Expenses;
