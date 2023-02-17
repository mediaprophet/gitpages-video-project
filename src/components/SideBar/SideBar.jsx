import React from "react";
import "./side-bar.css";
import { NavLink } from "react-router-dom";

export const SideBar = () => {
  const isActiveClass = ({ isActive }) =>
    `side-bar-items ${isActive && "active"}`;

  return (
    <aside className="side-bar-container">
      <NavLink className={isActiveClass} to="/">
        <i className="bx bx-home"></i>
        <span className="nav-title">Home</span>
      </NavLink>
      <NavLink className={isActiveClass} to="/explore" end>
        <i className="bx bx-compass"></i>
        <span className="nav-title">Explore</span>
      </NavLink>
    </aside>
  );
};
