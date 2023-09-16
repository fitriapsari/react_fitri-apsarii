function Language() {
  return (
    <>
      <hr className="ml-12" />
      <div>
        {" "}
        <h6> Language Spoken</h6>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue="Bahasa"
          id="language"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Bahasa
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue="English"
          id="language"
          defaultChecked=""
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          English
        </label>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          defaultValue="Indonesia"
          id="language"
        />
        <label className="form-check-label" htmlFor="flexCheckDefault">
          Indonesia
        </label>
      </div>
    </>
  )
}
export default Language 