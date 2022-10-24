import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../api-adapter";

const Login = (props) => {
  const history = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const registeredUser = await loginUser(username, password);
    const token = registeredUser.token;
    console.log(token);

    localStorage.setItem("token", token);
    history("/Posts");
  }

  return (
    <div className="usePassBox">
      <form onSubmit={handleSubmit}>
        <div id="userBox">
          <input id="username" type="text" placeholder="Username" required />
        </div>
        <div id="passBox">
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div id="btnBox">
          <button type="submit" id="loginBtn">
            Login
          </button>
        </div>
      </form>
      <div>
        <Link to="/Register" className="linkDecor">
          <p id="signUp">Sign Up</p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
