import React, { useState } from "react"

function ProductName() {
  const [productName, setProductName] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const value = e.target.value
    setProductName(value)

    if (value.length === 0) {
      setError("Please enter a valid product name.")
    } else if (value.length > 25) {
      setError("Product Name must not exceed 25 characters.")
    } else if (value.length > 10) {
      setError("Product Name must not exceed 10 characters.")
    } else {
      setError("")
    }
  }

  return (
    <div className="row mt-5">
      <div className="col-3" />
      <div className="mb-6 mx-left">
        <label htmlFor="validationTextarea" className="form-label">
          Product Name :
        </label>
        <input
          type="text"
          className={`form-control ${error && "is-invalid"}`}
          id="validationTextarea"
          name="productName"
          style={{ width: "50%" }}
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
        />
        <div className="invalid-feedback" id="productNameValidation">
          {error}
        </div>
      </div>
    </div>
  )
}

export default ProductName
