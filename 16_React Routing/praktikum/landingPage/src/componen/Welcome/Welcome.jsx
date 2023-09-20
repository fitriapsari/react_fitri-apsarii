import React from "react"
import "./Welcome.module.css"
// import Logo from "../assets/hero-img.png.png" // Adjust the path as needed

function Welcome() {
  return (
    <section className="awal">
      <div className="text-container">
        <h1>Better Solutions For Your</h1>
        <h1>Business</h1>
        <br />
        <p className="we-are">
          We are a team of talented designers creating websites with Bootstrap.
        </p>
        <br />
        <div className="sip">
          <a href="#">
            <button className="rounded-button active">Get Started</button>
          </a>
          <a href="#">
            <button className="rounded-button watch">Watch Video</button>
          </a>
        </div>
      </div>
      {/* <img src={Logo} alt="Hero Image" id="hero-img" /> */}
    </section>
  )
}

export default Welcome
