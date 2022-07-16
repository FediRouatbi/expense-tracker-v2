import React from "react";

const Settings = () => {
  return (
    <div className=" ">
      <h1 id="security" className="mb-4 ">
        Security :{" "}
      </h1>
      <div className="flex flex-col gap-2 &>*:[flex]">
        <div>
          <div className="pb-2">Change Email :</div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div>
          <div className="pb-2">Change Name :</div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="pb-5">
          <div className="pb-2">Change Password :</div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <button className="btn max-w-xs">Change</button>
      </div>

      <div className=" pt-20 text-right">
        <label
          htmlFor="my-modal-6"
          className="btn btn-error btn-sm modal-button"
        >
          Delete Account
        </label>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal" id="my-modal-6">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Are you sure you want to delete your Account ?
            </h3>
            <div className="modal-action justify-around">
              <label htmlFor="my-modal-6" href="settings" className="btn">
                Delete
              </label>
              <label htmlFor="my-modal-6" className="btn">
                cancel
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
