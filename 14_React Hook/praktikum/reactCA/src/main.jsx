import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import CreateAccount from "./CreateAccount.jsx"
// import CreateAccount from "./CA.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CreateAccount />
    {/* <CreateAccount /> */}
  </React.StrictMode>
)
