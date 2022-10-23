import React from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../api-adapter";

const Register = (props) => {
  const history = useNavigate();
  async function handleSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const password = event.target[1].value;
    const registeredUser = await registerUser(username, password);
    const token = registeredUser.token;
    console.log(token);
    localStorage.removeItem("token");
    localStorage.setItem("token", token);
    history('/Posts')
  } 

  return (
    <div className="usePassBox">
      <form onSubmit={handleSubmit}>
        <div id="userBox">
          <input id="username" type="text" placeholder="Username" required />
        </div>
        <div id="passBox">
          <input id="password" type="password" placeholder="Password" required />
        </div>
        <div id="btnBox">
          <button type="submit" id="loginBtn">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
