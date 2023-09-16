function ProductImage() {
  return (
    <div className="mb-3">
      <label htmlFor="productImage" className="form-label">
        Image of Product :
      </label>
      <input
        type="file"
        className="form-control"
        id="productImage"
        name="productImage"
        style={{ width: "40%" }}
        accept="image/*"
        // oninput="validateImageProduct()"
        required=""
      />
      <div className="invalid-feedback" id="imageValidation">
        Please select an image.
      </div>
    </div>
  )
}
export default ProductImage
