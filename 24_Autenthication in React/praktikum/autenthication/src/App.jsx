// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"
import React from "react"
import { useLocation, Link, Routes, Route, Navigate } from "react-router-dom"
import Login from "../src/components/Login"
import LandingPage from "../src/components/landingPage"

function Home() {
  return <h2>Home</h2>
}

function App() {
  const location = useLocation()
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {!isLoggedIn && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/landing-page"
          element={
            isLoggedIn ? (
              <LandingPage />
            ) : (
              <Navigate
                to={{ pathname: "/login", state: { from: location } }}
                replace
              />
            )
          }
        />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
