import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcHome, FcSettings, FcBinoculars } from "react-icons/fc";
const PhoneNav = () => {
  const location = useLocation();

  useEffect(() => {
    const [...data] = document.getElementById("phone-nav").children;
    data.forEach((el) => {
      el.classList.remove("bg-slate-100");
      if (el.href.slice(21) === location.pathname)
        el.classList.add("bg-slate-100");
    });
  }, [location]);

  const activateButton = (e) => {
    if (e.target === e.currentTarget) return;
    e.currentTarget.querySelectorAll("a").forEach((el) => {
      el.classList.remove("bg-slate-100");
    });
    e.target.closest("a").classList.add("bg-slate-100");
  };
  return (
    <div class="btm-nav" onClick={activateButton} id="phone-nav">
      <Link to="/" class="text-error group ">
        <FcHome size={30} className="group-active:scale-95" />
      </Link>
      <Link to="/expenses" class="text-error group ">
        <FcBinoculars size={30} className="group-active:scale-95" />
      </Link>
      <Link to="/settings" class="text-error  group">
        <FcSettings size={30} className="group-active:scale-95" />
      </Link>
    </div>
  );
};

export default PhoneNav;
