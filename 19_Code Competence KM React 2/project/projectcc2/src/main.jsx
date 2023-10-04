import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap-icons/font/bootstrap-icons.css"
import AboutUs from "./components/AboutUs.jsx"
import Navbar from "./components/Navbar.jsx"
import Welcome from "./components/Welcome.jsx"
import ContactUs from "./components/ContactUs.jsx"
import Footer from "./components/Footer.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Welcome />
    <AboutUs />
    <ContactUs />
    <Footer />
  </React.StrictMode>
)
