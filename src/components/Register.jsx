import React from "react";
import {registerUser} from "../api-adapter"

const Register = (props) => {
    async function handleSubmit(event) {
        event.preventDefault()
        const username = event.target[0].value
        const password = event.target[1].value 
        const registeredUser = await registerUser(username, password) 
        const token = registeredUser.token
        console.log(token)
        localStorage.removeItem('token')
        localStorage.setItem('token', token)
        
} 

    return (
        <div className="usePassBox">
            <form onSubmit={handleSubmit}>
            <div id="userBox">
                <label htmlFor="username">Username: </label>
                <input id="username" type="text" required />
            </div>
            <div id="passBox">
                <label htmlFor="password">Password: </label>
                <input id="password" type="password" />
            </div>
            <div id="btnBox">
                <button type="submit" id="loginBtn">Login</button>
            </div>
            </form>
        </div>
    )
}

export default Register