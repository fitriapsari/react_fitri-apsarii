function Additional() {
  return (
    <div className="mb-3">
      <label htmlFor="additionalDescription" className="form-label">
        Additional Description:
      </label>
      <textarea
        className="form-control"
        id="additionalDescription"
        name="additionalDescription"
        cols={40}
        rows={8}
        // oninput="validateAdditional()"
        defaultValue={""}
      />
      <div className="invalid-feedback" id="additionalValidation">
        Please enter additional information.
      </div>
    </div>
  )
}
export default Additional
