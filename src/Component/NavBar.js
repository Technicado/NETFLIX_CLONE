import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styling/NavBar.css";

const NavBar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <img
        onClick={() => navigate("/")}
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NetFlix Logo"
        className="nav__logo"
      />

      <img
        onClick={() => navigate("/profile")}
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Profile pic"
        className="nav__avatar"
      />
    </div>
  );
};

export default NavBar;
