function Address() {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="address1"
          placeholder="1234 Main St"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Address 2 (Optional){" "}
        </label>
        <input
          type="text"
          className="form-control"
          id="address2"
          placeholder="Apartement of Suite"
        />
      </div>
    </>
  )
}
export default Address
