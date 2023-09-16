function FirstName() {
  return (
    <div className="row mt-5">
      <div className="col-4" />
      <div className="col-6">
        <form action="" method="post" className="container">
          <h4>Detail Account</h4>
          <div className="col-md-6">
            <div className="form-group first">
              <label htmlFor="fname">First Name</label>
              <input type="text" className="form-control" id="fname" />
            </div>
            <div className="col-md-6">
              <div className="form-group first">
                <label htmlFor="lname">Last Name</label>
                <input type="text" className="form-control" id="lname" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default FirstName
