import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { loginUser } from "../api-adapter";

const Login = (props) => {
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [user, setUser] = useState()

  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const registeredUser = await loginUser(username, password);
    const token = registeredUser.token;
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
  }
  return (
    <div className="usePassBox">
      <form onSubmit={handleSubmit}>
        <div id="userBox">
          <input id="username" type="text" placeholder="Username" required />
          {/* // onChange={({target}) => setUsername(target.value)} */}
        </div>
        <div id="passBox">
          <input
            id="password"
            type="password"
            placeholder="Password"
            required
          />
          {/* onChange={({target}) => setPassword(target.value)} */}
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
