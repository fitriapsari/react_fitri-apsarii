import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import Greeting from "./componen/greeting.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Greeting name="Nando si ketua kelas" />
  </React.StrictMode>
)
