import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import CreateAccount from "./createAccount.jsx"
import Logo from "./componen/Logo.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateAccount />
  </React.StrictMode>
)
