import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaNewspaper,
  FaPlus,
  FaUserPlus,
  FaSignInAlt,
  FaSignOutAlt,
} from "react-icons/fa";
import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <h2>News App</h2>
      <nav>
        <ul>
          <li>
            <Link to="/home">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/posted-news">
              <FaNewspaper /> Posted News
            </Link>
          </li>
          <li>
            <Link to="/add-news">
              <FaPlus /> Add News
            </Link>
          </li>
          <li>
            <Link to="/register">
              <FaUserPlus /> Register
            </Link>
          </li>
          <li>
            <Link to="/login">
              <FaSignInAlt /> Login
            </Link>
          </li>
          <li>
            <Link to="/logout">
              <FaSignOutAlt /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
