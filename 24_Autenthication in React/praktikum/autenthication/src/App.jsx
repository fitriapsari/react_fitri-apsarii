import React, { useState } from "react"
import {
  Routes,
  Route,
  BrowserRouter,
  useNavigate,
  Router,
} from "react-router-dom"
import Login from "../src/components/Login"
import LandingPage from "../src/components/Login"
import { Link } from "react-router-dom"

const App = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const navigate = useNavigate()

  return (
    // <LandingPage />
    <BrowserRouter>
      {/* <Routes>
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/landing-page">
          <LandingPage />
        </Route>
      </Routes> */}
      <div>
        <Link to="/login">Login</Link>
        <Link to="/landing-page">Landing Page</Link>

        {isLoggedIn ? (
          <LandingPage />
        ) : (
          <Link to="/login">Anda harus login terlebih dahulu</Link>
        )}
      </div>
    </BrowserRouter>
  )
}

export default App
