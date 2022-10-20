import React from 'react'
import {loginUser} from "../api-adapter";

const Login = (props) => {
async function handleSubmit(event) {
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const registeredUser = await loginUser(username, password)
    const token = registeredUser.token
    localStorage.removeItem('token')
    localStorage.setItem('token', token)
}
return (
    <div className="usePassBox">
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input id="username" type="text" required />
            <label htmlFor="password">Password: </label>
            <input id="password" type="password" />
            <button type="submit">Login</button>
        </form>
    </div>
)
}











export default Login; 