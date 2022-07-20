import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Profile from "./Pages/Profile";
import Expenses from "./Pages/Expenses";
import Settings from "./Pages/Settings";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PhoneNav from "./components/PhoneNav";
import SingIn from "./Pages/SingIn";
import SignUp from "./Pages/SignUp";
import ForgotPassword from "./Pages/ForgotPassword";
import AppContext from "./appContext/AppContext";
import PrivateRoute from "./Pages/PrivateRoute";
import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <AppContext>
      <BrowserRouter>
        <div
          data-theme={`${dark ? "business" : "light"}`}
          className={`  py-16 md:pb-0  h-screen  transition-all ease-in-out duration-500`}
        >
          <Header setDark={setDark} dark={dark} />
          <div className="mx-auto  w-11/12  md:w-full  h-full   md:flex gap-2">
            <SideBar dark={dark} />
            <div className="grow md:p-10 md:pb-0 overflow-auto h-full py-4">
              <Routes>
                <Route path="/" element={<PrivateRoute />}>
                  <Route path="/" element={<Profile />}></Route>
                </Route>
                <Route path="/expenses" element={<PrivateRoute />}>
                  <Route path="/expenses" element={<Expenses />}></Route>
                </Route>
                <Route path="/settings" element={<PrivateRoute />}>
                  <Route path="/settings" element={<Settings />}></Route>
                </Route>
                <Route path="/signin" element={<SingIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
              </Routes>
            </div>
          </div>
          <PhoneNav />
        </div>
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
