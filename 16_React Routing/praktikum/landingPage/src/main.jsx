import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "./componen/Welcome/Welcome.jsx"
import Welcome from "./componen/Welcome/Welcome.jsx"
import Newsletter from "./componen/Newwsletter/Newsletter.jsx"
import Footer from "./componen/Footer/Footer.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Welcome />
    <Newsletter />
    <Footer />
  </React.StrictMode>
)
