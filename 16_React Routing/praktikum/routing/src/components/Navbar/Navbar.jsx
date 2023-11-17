import "./Navbar.module.css"

function Navbar() {
  return (
    <header className="nav-menu">
      <h6>Simple Header</h6>
      <ul className="nav-menu">
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/fetures" className="nav-menu">
            Features
          </a>
        </li>
        <li>
          <a href="/pricing" className="nav-menu">
            Pricing
          </a>
        </li>
        <li>
          <a href="/FAQs" className="nav-menu">
            FAQs
          </a>
        </li>
        <li>
          <a href="/about" className="nav-menu">
            About
          </a>
        </li>
      </ul>
      <hr />
    </header>
  )
}
export default Navbar
