import React, { useState } from "react"
import { useLocation, Link } from "react-router-dom"

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const location = useLocation()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleLogin = () => {
    // autentikasi
    if (
      formData.email === "user@example.com" &&
      formData.password === "password"
    ) {
      // Autentikasi berhasil
      const { from } = location.state || { from: { pathname: "/landing-page" } }
      window.localStorage.setItem("isLoggedIn", "true") // Simpan status login
      window.location.pathname = from.pathname // Alihkan ke halaman yang diminta
    } else {
      // Autentikasi gagal
      alert("Periksa kembali email dan password Anda.")
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
