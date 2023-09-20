import "./Footer.module.css"

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>
                <b>ARSHA</b>
              </h4>
              <ul>
                <li>
                  <a> A108 Adam Street </a>
                </li>
                <li>
                  <a> New York, NY 535022</a>
                </li>
                <li>
                  <a> united States</a>
                </li>
                <br />
                <li>
                  <a>
                    <b>Phone:</b> +1 558955488 55
                  </a>
                </li>
                <li>
                  <a>
                    <b>Email:</b> info@example.com
                  </a>
                  <br />
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Sevice</a>
                </li>
                <li>
                  <a href="#">Term of sevice</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Service</h4>
              <ul>
                <li>
                  <a href="#">Web Design</a>
                </li>
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Product Management</a>
                </li>
                <li>
                  <a href="#">Marketing</a>
                </li>
                <li>
                  <a href="#">Graphic Design</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Our Social Networks</h4>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra videa magna
                derita valies
              </p>
              <div className="social-media">
                <a href="#">
                  <i className="fab fa-facebook" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed-footer">
        <div className="container footer-copy">
          <p className="teks">
            © Copyright <b>Arsha.</b> All Rights Reserved
          </p>
          <p className="teks-kanan">Designed by BootstrapMade</p>
        </div>
      </div>
    </>
  )
}
export default Footer
