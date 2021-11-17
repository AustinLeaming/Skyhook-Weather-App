import React, { useState, useEffect } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";

export default function Navbar({ handleLogout, setData }) {
  // this declares my state default as false, I don't want the user to see the menu opened at first, only when clicked
  const [sidebar, setSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // toggles the value when sidebar is clicked
  const showSidebar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        searchInput +
        "&units=imperial&APPID=" +
        process.env.REACT_APP_API_KEY
    )
      .then((res) => res.json())
      .then((result) => setData(result));
    navigate("/search");
  };

  return (
    <>
      <IconContext.Provider value={{ color: "white" }} />
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div class="ui loading search">
          <div id="searchBar" class="ui icon input">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e) => [setSearchInput(e.target.value)]}
                class="prompt"
                type="text"
                placeholder="Search..."
              />
            </form>
            <i class="search icon"></i>
          </div>
          <div class="results"></div>
        </div>
      </div>

      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {/* links are defined in SidebarData.js */}

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
          <li className="nav-text" onClick={handleLogout}>
            <span>Logout</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
