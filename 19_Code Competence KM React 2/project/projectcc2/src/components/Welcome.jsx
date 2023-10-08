import React from "react"

function Welcome() {
  return (
    <div
      style={{
        backgroundImage: `url("https://i.imgur.com/AdqtlBd.png")`,
      }}
    >
      <div className="position-relative overflow-hidden home p-3 p-md-5 text-center">
        <div className="col-md-7 p-lg-5 mx-auto my-5">
          <h1 className="display-4 fw-normal text-light fw-bold">
            Watch anytime, anywhere. <br /> Your pace, your time.
          </h1>
          <p className="lead fw-normal text-light">
            Enjoy the big screen experience on your smart TV, or watch on the go
            on your smartphones
          </p>
          <button className="btn btn-light">Join Now</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
