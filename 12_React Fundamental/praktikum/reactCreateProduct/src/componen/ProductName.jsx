import "../css/productname.css"

function ProductName() {
  return (
    <div className="mb-6">
      <label htmlFor="validationTextarea" className="form-label">
        Product Name :
      </label>
      <input
        type="text"
        className="form-control is-invalid"
        id="validationTextarea"
        name="productName"
        style={{ width: "50%" }}
        // onInput="validateProductName()"
        required=""
      />
      <div className="invalid-feedback" id="productNameValidation">
        Please enter your product name.
      </div>
    </div>
  )
}
export default ProductName
