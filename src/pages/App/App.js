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
  const [data, setData] = useState({});

  const navigate = useNavigate();

  function handleSignupOrLogin() {
    // we want to call this function after we signup or login
    // always be in the handleSubmit of the form
    setUser(userService.getUser());
  }

  return (
    <>
      <Navbar setUser={setUser} setData={setData} />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route
          path="/login"
          element={<LoginPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route path="/search" element={<SearchPage data={data} />} />
      </Routes>
    </>
  );
}

export default App;
