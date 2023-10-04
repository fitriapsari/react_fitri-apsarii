import React from "react"
import imgAbout from "../assets/code.jpg"

const AboutUs = () => {
  return (
    <div>
      <div className="position-relative overflow-hidden bg-dark p-3 p-md-5 text-center">
        <div className="col-md-7 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal text-light fw-bold">About Us</h1>
          <img src={imgAbout} alt="imgAbout" className="w-100 my-5" />
          <p className="lead fw-normal text-light">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi illo
            qui, sunt delectus optio amet ex corrupti necessitatibus magni quia,
            ipsa neque saepe quas, architecto iure nostrum. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Quidem repudiandae suscipit
            aspernatur illum expedita quo dolores sit tempora, dignissimos vel
            ullam distinctio dicta labore, magni culpa animi hic deleniti neque.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
