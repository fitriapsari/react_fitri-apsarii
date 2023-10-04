import React from "react"
import { useState } from "react"

const dataForm = {
  name: "",
  name2: "",
  email: "",
  message: "",
}

const ContactUs = () => {
  const [data, setData] = useState(dataForm)

  const handleChange = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`
          Name: ${data.name} ${data.name2}
          Email: ${data.email}
          Message: ${data.message}

          Submitted!
          `)
    setData(dataForm)
  }

  return (
    <>
      <div
        className="d-flex align-items-center bg-dark text-light contact-section"
        id="contact-us"
      >
        <div className="row g-5 mx-5">
          <div className="col-md-5 col-lg-4 ms-5">
            <h2>Contact Us</h2>
            <p className="lead my-3 fs-6">
              Need to get in touch with us? Either fill out the form with your
              inquiry or find the <a href="#">department email</a> you'd like to
              contact below.
            </p>
          </div>
          <div className="col-md-7 col-lg-8 w-50 mx-5">
            <form id="contactForm" name="contactForm" onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <label htmlFor="text" className="form-label">
                    First name
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.name}
                    type="text"
                    name="name"
                    className="form-control"
                    id="nama"
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="text" className="form-label">
                    Last name
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.name2}
                    type="text"
                    name="name2"
                    className="form-control"
                    id="nama2"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    value={data.email}
                    type="email"
                    name="email"
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    What can we help you with?
                  </label>
                  <textarea
                    onChange={handleChange}
                    value={data.message}
                    name="message"
                    className="form-control text-area-section"
                    id="message"
                  ></textarea>
                </div>
                <button type="submit" className="w-100 btn btn-primary btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
