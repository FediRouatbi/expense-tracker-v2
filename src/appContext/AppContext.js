import React, { useState, createContext, useContext } from "react";
import { auth, db } from "./firebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const provider = new GoogleAuthProvider();
const Expense = createContext();
export const GetData = () => {
  return useContext(Expense);
};
const AppContext = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user")) || null
  );
  const signOutF = async () => {
    await signOut(auth);
    setCurrentUser(null);
    sessionStorage.removeItem("user");
  };
  const SignInGoogle = async () => {
    const user = await signInWithPopup(auth, provider);
    setCurrentUser(user.user);
    sessionStorage.setItem("user", JSON.stringify(user.user));
  };
  console.log(currentUser);
  const signup = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
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
    <Expense.Provider value={{ currentUser, signup, SignInGoogle, signOutF }}>
      {children}
    </Expense.Provider>
  );
};
export default AppContext;
