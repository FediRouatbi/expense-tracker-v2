import React from "react";

const Settings = () => {
  return (
    <div className="relative h-full">
      <h1 className="mb-4">Security : </h1>
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
        <button className="btn ">Change</button>
      </div>

      <a
        href="#my-modal-2"
        class="btn btn-error btn-sm  absolute  bottom-0 right-0"
      >
        Delete Account
      </a>

      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete your Account ?
          </h3>
          <div class="modal-action justify-around">
            <a href="#" class="btn">
              Delete
            </a>
            <a href="#" class="btn">
              cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
