import React, { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "./App.css"
import Welcome from "./componen/Welcome/Welcome"
import CreateProduct from "./componen/createProduct"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Welcome />} />
        <Route path="/create" element={<CreateProduct />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
