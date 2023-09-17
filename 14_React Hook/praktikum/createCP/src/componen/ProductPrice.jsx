function ProductPrice() {
  return (
    <div className="mb-3" onChange={(e) => setProductPrice(e.target.value)}>
      <label htmlFor="productPrice" className="form-label">
        Product Price :
      </label>
      <div className="input-group">
        <span className="input-group-text">$</span>
        <input
          type="number"
          className="form-control is-invalid"
          id="productPrice"
          name="productPrice"
          placeholder={100}
          // oninput="validateProductPrice()"
        />
        <div className="invalid-feedback" id="productPriceValidation">
          Please enter the product price.
        </div>
      </div>
    </div>
  )
}
export default ProductPrice
