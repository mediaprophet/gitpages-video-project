import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";
import "./header.css";
import { useDocumentTitle } from "../../hooks";
import logo from "../../assets/icon.png";

export const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("magnetLibraryUser")) || null;
  const { dataDispatch } = useData();
  useDocumentTitle();

  return (
    <header className="header-container">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" className="brand-logo" />
        <span className="brand-name ">Video Library </span>
      </Link>

      <div className="header-links mx-auto">
        <ul className="list-style-none inline-list">
          <li className="secondary-text-color mr-64">
            <Link
              to="/"
              className={location.pathname === "/" ? "active-link" : ""}
            >
              Home
            </Link>
          </li>
          <li className="secondary-text-color mr-64">
            <Link
              to="/explore"
              className={location.pathname === "/explore" ? "active-link" : ""}
            >
              Explore
            </Link>
          </li>
        </ul>
      </div>

      <div className="search-input mx-auto">
        <i
          className="fas fa-search search-icon"
          onClick={() => navigate("/explore")}
        ></i>
        <label htmlFor="searchbar"></label>
        <input
          className="input-round input-sm"
          type="text"
          name="searchbar"
          id="searchbar"
          placeholder="Search videos..."
          onChange={(e) =>
            dataDispatch({ type: "SEARCH", payload: e.target.value })
          }
        />
      </div>

      <div>
    
      </div>
    </header>
  );
};
