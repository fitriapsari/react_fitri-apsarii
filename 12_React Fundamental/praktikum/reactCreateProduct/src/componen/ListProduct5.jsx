function ListProduct5() {
  return (
    <div className="row mt-5">
      <div className="col-3" />
      <div className="col-6 mx-left">
        <form action="" method="GET" className="container">
          <h4>
            <b>Detail Product</b>
          </h4>
          <div className="mb-3 mx-left">
            <label
              htmlFor="validationTextarea"
              className="form-label mx-left"
              id="productName"
            >
              Product Name :
            </label>
            <input
              type="text"
              className="form-control is-invalid"
              id="validationTextarea"
              name="product-name"
              style={{ width: "50%" }}
              minLength={6}
              maxLength={50}
              // onkeyup="checkInput()"
              required=""
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-category" className="form-label">
              Product Category :
            </label>
            <br />
            <select
              className="form-select"
              id="product-category"
              name="product-category"
              style={{ width: "30%" }}
              required=""
            >
              <option value="Blank">Choose...</option>
              <option value="Baju">Baju</option>
              <option value="Celana">Celana</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="product-image" className="form-label">
              Image of Product :
            </label>
            <input
              type="file"
              className="form-control"
              id="customFile"
              name="product-image"
              style={{ width: "40%" }}
              accept="image/*"
              required=""
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Product Freshness :</label>
            <br />
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="brand-new"
                name="product-freshness"
              />
              <label className="form-check-label" htmlFor="brand-new">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="second-hand"
                name="product-freshness"
              />
              <label className="form-check-label" htmlFor="second-hand">
                Second Hand
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="refurbished"
                name="product-freshness"
              />
              <label className="form-check-label" htmlFor="refurbished">
                Refurbished
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="additional-description" className="form-label">
              Additional Description:
            </label>
            <textarea
              className="form-control"
              id="additional-description"
              name="additional-description"
              cols={40}
              rows={8}
              defaultValue={""}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="product-price" className="form-label">
              Product Price :
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                id="product-price"
                name="product-price"
                required=""
                pattern="[0-9]+(\.[0-9]{2})?"
                placeholder={100}
              />
            </div>
          </div>
          <br />
          <br />
        </form>
      </div>
    </div>
  )
}
export default ListProduct5
