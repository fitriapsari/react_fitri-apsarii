import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.style.css"

const LoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate()

  const dummyUser = { username: "fitri", password: "fitri123" }

  const handleLogin = (event) => {
    event.preventDefault()

    const user = JSON.parse(localStorage.getItem("user"))

    if (user && user.username === username && user.password === password) {
      localStorage.setItem("isLoggedIn", true)
      navigate("/landing-page")
    } else if (
      username === dummyUser.username &&
      password === dummyUser.password
    ) {
      localStorage.setItem("user", JSON.stringify(dummyUser))
      localStorage.setItem("isLoggedIn", true)
      navigate("/landing-page")
    } else {
      setErrorMessage("Invalid username or password")
    }
  }

  return (
    <form>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit" className="btn-login" onClick={handleLogin}>
        Login
      </button>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </form>
  )
}

export default LoginForm
