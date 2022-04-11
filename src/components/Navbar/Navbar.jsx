import React from "react";
import "./Navbar.css";
import { MdOutlineNightlightRound } from "react-icons/md";
export const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-heading">pomodoro</h1>

      <div className="navbar-modes"><MdOutlineNightlightRound/></div>
    </div>
  );
};
