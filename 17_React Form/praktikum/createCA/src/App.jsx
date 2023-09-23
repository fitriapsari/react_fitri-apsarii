import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// import Register from "./Register"
import Login from "./componen/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>{/* <Route path="/login" component={Login} /> */}</Routes>
    </BrowserRouter>
  )
}

export default App
