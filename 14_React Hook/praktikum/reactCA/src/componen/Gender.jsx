function Gender() {
  return (
    <>
      <div>
        {" "}
        <h6>Gender</h6>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="gender"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Male
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="gender"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Female
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="gender"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Other
        </label>
      </div>
    </>
  )
}
export default Gender
