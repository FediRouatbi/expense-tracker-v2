import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcHome, FcSettings, FcBinoculars } from "react-icons/fc";
import { GetData } from "../appContext/AppContext";

const PhoneNav = () => {
  const location = useLocation();
  const { currentUser } = GetData();

  useEffect(() => {
    if (!currentUser) return;
    const [...data] = document.getElementById("phone-nav").children;
    data.forEach((el) => {
      el.classList.remove("bg-zinc-500/50");
      if (el.href.slice(21) === location.pathname)
        el.classList.add("bg-zinc-500/50");
    });
  }, [location]);

  const activateButton = (e) => {
    if (e.target === e.currentTarget) return;
    e.currentTarget.querySelectorAll("a").forEach((el) => {
      el.classList.remove("bg-zinc-500/50");
    });
    e.target.closest("a").classList.add("bg-zinc-500/50");
  };
  return (
    currentUser && (
      <div
        className="btm-nav md:hidden"
        onClick={activateButton}
        id="phone-nav"
      >
        <Link to="/" className="text-error group  bg-zinc-500/50">
          <FcHome size={30} className="group-active:scale-95" />
        </Link>
        <Link to="/expenses" className="text-error group ">
          <FcBinoculars size={30} className="group-active:scale-95" />
        </Link>
        <Link to="/settings" className="text-error  group">
          <FcSettings size={30} className="group-active:scale-95" />
        </Link>
      </div>
    )
  );
};

export default PhoneNav;
