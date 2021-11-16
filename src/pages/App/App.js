import React from "react";
import {useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";

function App() {
  const [toggle, setToggle] = useState(false);

  function toggleMenu() {
    setToggle(!toggle);
  }

  return (
    <>
      <Header onToggleMenu={toggleMenu} />

      <div className="ui attached pushable" style={{ height: "100vh" }}>
        <Sidebar toggleMenu={toggle} />
      </div>
      <div className="pusher bottom">
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/signup" element={<SignupPage />} />
      </Routes>
      </div>
    </>
  );
}

export default App;
