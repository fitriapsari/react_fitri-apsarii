function Nasionally() {
  return (
    <div className="mb-3">
      <label htmlFor="nasionallity" className="form-label">
        Nationaly :
      </label>
      <br />
      <select
        className="form-select"
        id="nasionallity"
        name="nasionallity"
        style={{ width: "50%" }}
        required=""
      >
        <option value="Blank">Choose...</option>
        <option value="Indonesia">Indonesia</option>
        <option value="Malaysia">Malaysia</option>
      </select>
    </div>
  )
}
export default Nasionally
