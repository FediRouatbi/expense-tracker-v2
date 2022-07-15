import "./App.css";
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
function App() {
  return (
    <BrowserRouter>
      <div className="  py-16 md:pb-0  h-screen">
        <Header />
        <div className="mx-auto  w-11/12  md:w-full overflow-auto h-full  md:pr-3 md:flex gap-2">
          <SideBar />
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/signin" element={<SingIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </Routes>
        </div>
        <PhoneNav />
      </div>
    </BrowserRouter>
  );
}

export default App;
