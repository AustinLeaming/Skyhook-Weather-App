import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Navbar from "../../components/Navbar/Navbar";
import userService from "../../utils/userService";
import Home from "../Home/Home";

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
      <Navbar handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
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
