import React from "react";
import {Link} from "react-router-dom"
import Register from "./Register";

const Navbar = () => {
  return (
    <div id="navbar">
        <h2>Stranger's Things</h2>
        <div className = "navigation">
          <button className = "navBtn">Home</button>
          <button className = "navBtn">Profile</button>
          <button className = "navBtn">Posts</button>
          <Link to={'/Register'}><button className = "navBtn">Login</button></Link>
          <button className = "navBtn">Logout</button>
        </div>
    </div>
  );
};

export default Navbar;