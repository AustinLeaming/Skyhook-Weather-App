import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import userService from "../../utils/userService";
import * as weatherService from "../../utils/weatherService";
import { Input } from "semantic-ui-react";

export default function Navbar({ setData, setUser }) {
  // this declares my state default as false, I don't want the user to see the menu opened at first, only when clicked
  const [sidebar, setSidebar] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  // opens and closes the sidebar
  const showSidebar = () => setSidebar(!sidebar);

  async function handleWeatherQuerySubmit(e) {
    e.preventDefault();
    try {
      const apiWeatherData = await weatherService.getWeatherData(searchInput);
      setData(apiWeatherData);
      console.log(apiWeatherData, "return from open weather api");
      navigate("/search");
    } catch (err) {
      console.log(err);
    }
  }

  function handleLogout() {
    setUser(userService.logout());
    navigate("/login");
  }

  return (
    <>
      <IconContext.Provider value={{ color: "white" }} />
      <div className="navbar">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
        <div class="ui loading search">
          <div id="searchBar" class="ui icon input">
            <form onSubmit={handleWeatherQuerySubmit}>
              <Input
                size="large"
                onChange={(e) => [setSearchInput(e.target.value)]}
                class="prompt"
                type="text"
                placeholder="Enter City"
              />
            </form>
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
            <a>Logout</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
