import React from "react";

const Settings = () => {
  return (
    <div className="grow">
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
        <a href="#my-modal-2" class="btn btn-error btn-sm ">
          Delete Account
        </a>
      </div>

      <div class="modal" id="my-modal-2">
        <div class="modal-box">
          <h3 class="font-bold text-lg">
            Are you sure you want to delete your Account ?
          </h3>
          <div class="modal-action justify-around">
            <a href="settings" class="btn">
              Delete
            </a>
            <a href="settings" class="btn">
              cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
