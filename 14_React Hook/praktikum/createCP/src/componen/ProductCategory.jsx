function ProductCategory() {
  return (
    <div className="mb-3">
      <label htmlFor="productCategory" className="form-label">
        Product Category:
      </label>
      <select
        className="form-select"
        id="productCategory"
        name="productCategory"
        style={{ width: "30%" }}
        value={productCategory}
        onChange={(e) => setProductCategory(e.target.value)}
        required
      >
        <option value="">Choose...</option>
        <option value="Baju">Baju</option>
        <option value="Celana">Celana</option>
      </select>
    </div>
  )
}
export default ProductCategory
