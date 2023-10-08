import React from "react"
import imgAbout from "../assets/code.jpg"

function AboutUs() {
  return (
    <div>
      <div className="position-relative overflow-hidden bg-dark p-3 p-md-5 text-center">
        <div className="col-md-7 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal text-light fw-bold">About Us</h1>
          <img src={imgAbout} alt="imgAbout" className="w-100 my-5" />
          <p
            className="lead fw-normal text-light"
            style={{ textAlign: "justify" }}
          >
            We're all about bringing you great entertainment. No matter where
            you are or what you love, we've got a wide range of awesome TV
            shows, documentaries, movies, and mobile games just for you. You're
            in charge of what you want to watch, whenever you want, with one
            simple subscription. We're available in over 30 languages and 190
            countries because amazing stories can come from anywhere and be
            loved by everyone. We're big fans of entertainment, and we're always
            here to help you discover your next favorite story.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
