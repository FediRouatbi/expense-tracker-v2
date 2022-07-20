import React, { useRef, useState } from "react";
import Table from "../components/Table";
import { GetData } from "../appContext/AppContext";
import { v4 } from "uuid";

const Expenses = () => {
  const [edit, setEdit] = useState(false);
  const { addTransaction, transactions, editData } = GetData();
  const noteRef = useRef();
  const selectRef = useRef();
  const ammountRef = useRef();
  const dateRef = useRef();

  const handelSumbmit = (e) => {
    e.preventDefault();
    const id = v4();
    const category = selectRef.current.value;
    const ammount = +ammountRef.current.value;
    let date = dateRef.current.value;
    const note = noteRef.current.value;
    if (!date) date = new Date().toISOString().slice(0, 10);
    if (edit) {
      editData(edit, category, ammount, date, note);
    } else addTransaction(id, category, ammount, date, note);
    document.getElementById("my-modal-6").checked = false;
    setEdit(false);
    clearAll();
  };
  const takeData = (e) => {
    document.getElementById("my-modal-6").checked = true;
    transactions.forEach((el) => {
      if (el.id === e.currentTarget.dataset.id) {
        setEdit(el.id);
        noteRef.current.value = el.note;
        selectRef.current.value = el.category;
        ammountRef.current.value = el.ammount;
        dateRef.current.value = el.date;
      }
    });
  };

  const clearAll = () => {
    noteRef.current.value = "";
    selectRef.current.value = "";
    ammountRef.current.value = "";
    dateRef.current.value = "";
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
              <select
                required={true}
                ref={selectRef}
                className=" text-base select select-bordered select-sm w-full max-w-xs h-full "
                defaultValue={"Category"}
              >
                <option hidden value=""></option>
                <option value="Expense" className="text-base ">
                  Expense
                </option>
                <option value="Income" className="cursor-pointer text-base">
                  Income
                </option>
              </select>
              <input
                ref={ammountRef}
                required
                type="number"
                placeholder="Ammount"
                className="input input-bordered input-sm w-full max-w-xs"
              />
              <input
                ref={dateRef}
                type="date"
                className="input input-bordered input-sm w-full max-w-xs"
              />
              <input
                ref={noteRef}
                required
                type="text"
                placeholder="Note"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>

            <div className="modal-action justify-between sm:justify-around">
              <button htmlFor="my-modal-6" className="btn">
                Confirm
              </button>
              <label
                onClick={() => {
                  clearAll();
                  setEdit(false);
                }}
                htmlFor="my-modal-6"
                className="btn"
              >
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
      <div className="max-w-4xl">
        <Table takeData={takeData} edit={true} />
      </div>
    </div>
  );
};

export default Expenses;
