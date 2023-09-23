import logo from "../assets/logo.png"

function Logo() {
  return (
    <>
      <div className="row">
        <div className="col-12 text-center">
          <img src={logo} alt="Logo" width="60px" height="50px" />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12">
          <h2 className="text-center">Create Product</h2>
        </div>
      </div>
    </>
  )
}
export default Logo
