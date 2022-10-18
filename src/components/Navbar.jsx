import React from "react";

const Navbar = () => {
  return (
    <div id="navbar">
        <h2>Stranger's Things</h2>
        <div className = "navigation">
          <button className = "navBtn">Home</button>
          <button className = "navBtn">Profile</button>
          <button className = "navBtn">Posts</button>
          <button className = "navBtn">Login</button>
          <button className = "navBtn">Logout</button>
        </div>
    </div>
  );
};

export default Navbar;