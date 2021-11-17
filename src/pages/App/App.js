import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Feed from "../Feed/Feed";
import "weather-icons/css/weather-icons.css";
import Search from "../../components/Search/Search";

const api = {
  KEY: process.env.API_KEY,
  BASE_URL: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [user, setUser] = useState(userService.getUser());

  const navigate = useNavigate();

  function handleSignupOrLogin() {
    // we want to call this function after we signup or login
    // always be in the handleSubmit of the form
    setUser(userService.getUser());
  }

  function handleLogout() {
    setUser(userService.logout());
    navigate("/login");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Feed handleLogout={handleLogout} />} />
        <Route
          path="/login"
          element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
      </Routes>
    </>
  );
}

export default App;
