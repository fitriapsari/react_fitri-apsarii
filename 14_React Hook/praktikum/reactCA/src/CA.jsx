import React, { useState, useEffect } from "react"

function CreateAccount() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    gender: "female",
    address1: "",
    address2: "",
    nationality: "Indonesia",
    languages: ["English"],
  })

  const [accounts, setAccounts] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleCheckboxChange = (e) => {
    const { value } = e.target
    const updatedLanguages = [...formData.languages]
    const index = updatedLanguages.indexOf(value)

    if (index > -1) {
      updatedLanguages.splice(index, 1)
    } else {
      updatedLanguages.push(value)
    }

    setFormData({ ...formData, languages: updatedLanguages })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setAccounts([...accounts, formData])
    setFormData({
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      gender: "female",
      address1: "",
      address2: "",
      nationality: "Indonesia",
      languages: ["English"],
    })
  }

  useEffect(() => {
    alert("Welcome")
  }, [])

  return (
    <div>
      <div className="row">
        <div className="col-12 text-center">
          <img src="logo.png" alt="" width="60px" height="50px" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <h2 className="text-center">Create Account</h2>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-2"></div>
        <div className="col-8 text-center">
          <span>
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </span>
        </div>
        <div className="col-2"></div>
      </div>
      <div className="row mt-5">
        <div className="col-4"></div>
        <div className="col-6">
          <form onSubmit={handleSubmit} className="container">
            <h4>Detail Account</h4>
            <div className="col-md-6">{/* ...Elemen formulir */}</div>
            <hr className="ml-12" />
            <div>
              <h6> Language Spoken</h6>
            </div>
            {/* ...Elemen formulir */}
            <br />
            <br />
            <div className="mt-5 mb-3">
              <button
                type="submit"
                id="create-account-button"
                className="btn btn-primary"
                style={{
                  textDecoration: "none",
                  color: "white",
                  width: "100%",
                }}
              >
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col-7 row mt-2">
        <h4> List Account </h4>
      </div>
      <table className="table table-striped col-8">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            {/* ...Kolom lainnya */}
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index}>
              <td>{account.firstName}</td>
              <td>{account.lastName}</td>
              {/* ...Kolom lainnya */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CreateAccount
