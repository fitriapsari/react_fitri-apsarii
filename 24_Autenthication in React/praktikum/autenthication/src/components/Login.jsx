import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../module.css/Login.module.css"

const Login = ({ setLoggedIn }) => {
  const [formData, setFormData] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = () => {
    // Logika autentikasi
    if (
      formData.email === "fitri@gmail.com" &&
      formData.password === "fitri123"
    ) {
      setLoggedIn(true)
      navigate("/landing-page")
    } else {
      alert("Email atau password salah")
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
      <p>
        Belum memiliki akun? <Link to="/register">Daftar di sini</Link>
      </p>
    </div>
  )
}

export default Login
