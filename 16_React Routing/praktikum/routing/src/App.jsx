import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateProduct from "./page/CreateProduct/CreateProduct"
import LandingPage from "./page/LandingPage/LandingPage"
import ProductDetail from "./page/ProductDetail/ProductDetail"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/create-product" element={<CreateProduct />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
