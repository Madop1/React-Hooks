import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./About";
import ErrorPage from "./ErrorPage";
import Home from "./Home";
import Profile from "./Profile";
import "./App.css"

function RouterDom() {
  return (
    <div className="App">
    <Router>
      <nav>
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/profile/username">Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path ="/profile/:username" element={<Profile />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
    </div>
  );
}

export default RouterDom;
