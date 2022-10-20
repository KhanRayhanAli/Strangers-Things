import React from "react";
import { useParams, Link  } from "react-router-dom";
import Register from "./Register";

const Navbar = () => {
  return (
    <div id="navbar">
        <h2 id="siteName">Stranger's Things</h2>
        <div className = "navigation">
          <button className = "navBtn">Home</button>
          <button className = "navBtn">Profile</button>
          <button className = "navBtn">Posts</button>
          <button className = "navBtn">Login</button>
        </div>
    </div>
  );
};

export default Navbar;