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
import { doc, setDoc, getDoc } from "firebase/firestore";
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
  const [transactions, setTransaction] = useState(
    JSON.parse(sessionStorage.getItem("transactions")) || []
  );

  const storage = getStorage();

  const storageRef = ref(storage, `Images/${currentUser?.uid}`);
  console.log(currentUser, transactions);
  const addTransaction = (id, category, ammount, date, note) => {
    const newTransaction = {
      id,
      category,
      ammount,
      date,
      note,
    };
    const data = [newTransaction, ...transactions];
    updateTransactions(data);
  };

  const updateTransactions = async (newData) => {
    const docRef = doc(db, "usersTransactions", currentUser?.uid);
    await setDoc(docRef, { ...newData });
    sessionStorage.setItem("transactions", JSON.stringify(newData));
    setTransaction(newData);
  };
  const deleteTransaction = (e) => {
    const data = transactions.filter((el) => el.id !== e.target.dataset.id);
    updateTransactions(data);
  };
  const editData = (id, category, ammount, date, note) => {
    const data = transactions.map((el) => {
      if (el.id === id) return { id, category, ammount, date, note };
      else return el;
    });
    updateTransactions(data);
  };
  const updateProfileImage = async (image) => {
    try {
      await uploadBytes(storageRef, image);
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
    setTransaction([]);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("transactions");
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
    onAuthStateChanged(auth, async () => {
      setCurrentUser(auth.currentUser);
      sessionStorage.setItem("user", JSON.stringify(auth.currentUser));
      if (auth.currentUser) {
        const docRef = doc(db, "usersTransactions", auth.currentUser?.uid);
        const docSnap = await getDoc(docRef);
        const data = Object.values(docSnap.data());
        setTransaction(data);
        sessionStorage.setItem("transactions", JSON.stringify(data));
      }
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
    } catch (err) {
      console.log(err);
    }
  };
  addData();
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
        addTransaction,
        transactions,
        deleteTransaction,
        editData,
      }}
    >
      {children}
    </Expense.Provider>
  );
};
export default AppContext;
