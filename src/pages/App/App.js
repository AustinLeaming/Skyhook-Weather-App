import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import userService from "../../utils/userService";
import Feed from "../Feed/Feed";
import "weather-icons/css/weather-icons.css";
import SearchPage from "../SearchPage/SearchPage";
import Navbar from "../../components/Navbar/Navbar";

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
      <Navbar />
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
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </>
  );
}

export default App;
