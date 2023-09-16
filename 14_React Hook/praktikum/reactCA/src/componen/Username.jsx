function Username() {
  return (
    <>
      <div>
        <h6>Username</h6>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          @
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          id="username"
        />
      </div>
    </>
  )
}
export default Username
