import React, { useRef } from "react";
import { GetData } from "../appContext/AppContext";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../appContext/appController";

const Settings = () => {
  const newMailRef = useRef();
  const newNameRef = useRef();
  const newPasswordRef = useRef();
  const newImgRef = useRef();
  const {
    upMail,
    currentUser,
    upName,
    upPassword,
    updateProfileImage,
    deleteProfile,
  } = GetData();

  const updateProfile = async () => {
    const mail = newMailRef.current.value;
    const name = newNameRef.current.value;
    const password = newPasswordRef.current.value;
    const image = newImgRef.current.files;
    try {
      if (image) {
        await updateProfileImage(image);
        toast.success("Image change ", toastOptions);
        newImgRef.current.value = "";
      }
      if (mail) {
        await upMail(mail);
        toast.success("Email change", toastOptions);
        newMailRef.current.value = "";
      }
      if (name) {
        await upName(name);
        toast.success("Name change", toastOptions);
        newNameRef.current.value = "";
      }
      if (password) {
        await upPassword(password);
        toast.success("Password change", toastOptions);
        newPasswordRef.current.value = "";
      }
    } catch (err) {
      toast.error(err.message, toastOptions);
    }
  };
  const deleteUser = async () => {
    try {
      await deleteProfile();
    } catch (err) {
      toast.error(err.message, toastOptions);
    }
  };
  return (
    <div>
      <h1 id="security" className="mb-4 font-bold text-xl">
        Security :
      </h1>
      <div>
        <label className="block mb-2 " htmlFor="file_input">
          Upload new Picture :
        </label>
        <input
          className="block w-full max-w-xs text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          id="file_input"
          type="file"
          ref={newImgRef}
        />

        <div>
          <div className="pb-2">Change Email :</div>
          <input
            type="text"
            placeholder={currentUser.email}
            className="input input-bordered input-sm w-full max-w-xs"
            ref={newMailRef}
          />
        </div>
        <div>
          <div className="pb-2">Change Name :</div>
          <input
            type="text"
            placeholder={currentUser.displayName}
            className="input input-bordered input-sm w-full max-w-xs"
            ref={newNameRef}
          />
        </div>
        <div className="pb-5">
          <div className="pb-2">Change Password :</div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
            ref={newPasswordRef}
          />
        </div>
        <button className="btn max-w-xs" onClick={updateProfile}>
          Change
        </button>
      </div>

      <div className=" pt-7 text-right">
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
              <label onClick={deleteUser} href="settings" className="btn">
                Delete
              </label>
              <label htmlFor="my-modal-6" className="btn">
                cancel
              </label>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Settings;
