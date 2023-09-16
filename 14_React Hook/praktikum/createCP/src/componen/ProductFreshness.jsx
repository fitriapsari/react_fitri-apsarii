function ProductFreshness() {
  return (
    <div className="mb-3">
      <label className="form-label">Product Freshness :</label>
      <br />
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="brand"
          name="productFreshness"
          defaultValue="brand"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="brand">
          Brand New
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="secondHand"
          name="productFreshness"
          defaultValue="second"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="secondHand">
          Second Hand
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          id="refurbished"
          name="productFreshness"
          defaultValue="refurbished"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="refurbished">
          Refurbished
        </label>
      </div>
    </div>
  )
}
export default ProductFreshness
