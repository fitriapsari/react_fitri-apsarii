import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginForm from "./page/Login/Login"
import LandingPage from "./page/LandingPage/LandingPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/landing-page" element={<LandingPage />} />
      </Routes>
    </Router>
  )
}

export default App
