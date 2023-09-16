function ProductCategory() {
  return (
    <div className="mb-3">
      <label htmlFor="productCategory" className="form-label">
        Product Category :
      </label>
      <br />
      <select
        className="form-select"
        id="productCategory"
        name="productCategory"
        style={{ width: "30%" }}
        // oninput="validateProductCategory()"
        required=""
      >
        <option value="">Choose...</option>
        <option value="Baju">Baju</option>
        <option value="Celana">Celana</option>
      </select>
      <div className="invalid-feedback" id="productCategoryValidation">
        Please select a category.
      </div>
    </div>
  )
}
export default ProductCategory
