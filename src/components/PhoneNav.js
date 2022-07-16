import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FcHome, FcSettings, FcBinoculars } from "react-icons/fc";
const PhoneNav = () => {
  const location = useLocation();

  useEffect(() => {
    const [...data] = document.getElementById("phone-nav").children;
    data.forEach((el) => {
      el.classList.remove("bg-sky-100");
      if (el.href.slice(21) === location.pathname)
        el.classList.add("bg-sky-100");
    });
  }, [location]);

  const activateButton = (e) => {
    if (e.target === e.currentTarget) return;
    e.currentTarget.querySelectorAll("a").forEach((el) => {
      el.classList.remove("bg-sky-100");
    });
    e.target.closest("a").classList.add("bg-sky-100");
  };
  return (
    <div className="btm-nav md:hidden" onClick={activateButton} id="phone-nav">
      <Link to="/" className="text-error group ">
        <FcHome size={30} className="group-active:scale-95" />
      </Link>
      <Link to="/expenses" className="text-error group ">
        <FcBinoculars size={30} className="group-active:scale-95" />
      </Link>
      <Link to="/settings" className="text-error  group">
        <FcSettings size={30} className="group-active:scale-95" />
      </Link>
    </div>
  );
};

export default PhoneNav;
