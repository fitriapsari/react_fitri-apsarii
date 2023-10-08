import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import CreateProduct from "./components/CreateProduct.jsx"
import ListProduct from "./components/ListProduct2.jsx"
import Navbar from "./components/Navbar.jsx"
import Logo from "./components/logo.jsx"
import TextCenter from "./components/textCenter.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <Logo />
    <TextCenter />
    <CreateProduct />
    <ListProduct />
  </React.StrictMode>
)
