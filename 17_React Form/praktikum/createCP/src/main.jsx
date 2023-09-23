import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import Navbar from "./componen/Navbar.jsx"
import Logo from "./componen/logo.jsx"
import TextCenter from "./componen/textCenter.jsx"
import Input from "./componen/Input.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Logo />
    <TextCenter />
    <Input />
  </React.StrictMode>
)
