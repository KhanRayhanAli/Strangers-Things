import React from "react";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbar">
        <h2 id="siteName">Stranger's Things</h2>
        <div className="navigation">
          <Link to="Home">
            <button className="navBtn">Home</button>
          </Link>
          <Link to="Posts">
            <button className="navBtn">Posts</button>
          </Link>
          <Link to="CreatePost">
            <button className="navBtn hide">Create Post</button>
          </Link>
          <Link to="Login">
            <button className="navBtn">Login</button>
          </Link>
          <Link to="Profile">
            <button className="navBtn hide">Profile</button>
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
