import React, { useState, createContext, useContext } from "react";
import { auth, db } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  updateProfile,
  updateEmail,
  updatePassword,
  sendPasswordResetEmail,
  deleteUser,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const provider = new GoogleAuthProvider();
const Expense = createContext();
export const GetData = () => {
  return useContext(Expense);
};
const AppContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );
  const storage = getStorage();
  const storageRef = ref(storage, `Images/${currentUser?.uid}`);

  const updateProfileImage = async (image) => {
    try {
      await uploadBytes(storageRef, image[0]);
      const url = await getDownloadURL(storageRef);
      await updateProfile(auth.currentUser, { photoURL: url });
      const newUser = { ...currentUser, photoURL: url };
      setNewUser(newUser);
    } catch (err) {
      throw Error(err);
    }
  };
  const resetPassword = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      throw Error(err);
    }
  };
  const signOutF = async () => {
    await signOut(auth);
    setCurrentUser(null);
    sessionStorage.removeItem("user");
  };
  const upName = async (name) => {
    try {
      await updateProfile(auth.currentUser, { displayName: name });
      const newUser = { ...currentUser, displayName: name };
      setNewUser(newUser);
    } catch (err) {
      throw Error(err);
    }
  };
  const upPassword = async (newPassword) => {
    try {
      await updatePassword(auth.currentUser, newPassword);
    } catch (err) {
      throw Error(err);
    }
  };

  const upMail = async (newEmail) => {
    try {
      await updateEmail(auth.currentUser, newEmail);
      const newUser = { ...currentUser, email: newEmail };
      setNewUser(newUser);
      console.log("From upmail");
    } catch (err) {
      throw Error(err);
    }
  };
  const updateUser = () => {
    onAuthStateChanged(auth, () => {
      setCurrentUser(auth.currentUser);
      console.log(auth.currentUser);
      sessionStorage.setItem("user", JSON.stringify(auth.currentUser));
    });
  };
  const setNewUser = (user) => {
    setCurrentUser(user);
    sessionStorage.setItem("user", JSON.stringify(user));
  };
  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      updateUser();
    } catch (err) {
      throw Error(err);
    }
  };
  const SignInGoogle = async () => {
    await signInWithPopup(auth, provider);
    updateUser();
  };
  console.log(currentUser);

  const signup = async (email, password, name) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: name });
      updateUser();
    } catch (err) {
      throw Error(err);
    }
  };
  const deleteProfile = async () => {
    return deleteUser(auth.currentUser);
  };
  const addData = async () => {
    try {
      const data = {
        first: "dfsAda",
        last: "Lovedsflace",
        born: 19549815,
      };
      const res = await setDoc(doc(db, "users", "fd"), data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Expense.Provider
      value={{
        currentUser,
        signup,
        SignInGoogle,
        signOutF,
        setCurrentUser,
        upMail,
        upName,
        upPassword,
        signIn,
        resetPassword,
        updateProfileImage,
        deleteProfile,
      }}
    >
      {children}
    </Expense.Provider>
  );
};
export default AppContext;
