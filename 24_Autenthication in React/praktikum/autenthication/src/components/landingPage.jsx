import "../module.css/landingPage.css"

function landingPage() {
  return (
    <>
      <main className="utama">
        <section className="awal">
          <div className="text-container">
            <h1>Better Solutions For Your</h1>
            <h1>Business</h1>
            <br />
            <p className="we-are">
              We are a team of talented designers creating websites with
              Bootstrap.
            </p>
            <br />
            <div className="sip">
              <a href="#">
                <button className="rounded-button active">Get Started</button>
              </a>
              <a href="#">
                <button className="rounded-button watch">Watch Video</button>
              </a>
            </div>
          </div>
          <img src="hero-img.png.png" alt="Hero Image" id="hero-img" />
        </section>
        <section id="join">
          <h2>Join Our Newsletter</h2>
          <label htmlFor="lorem-ipsum">
            Tamen quem nulla quae legam multos aute sint culpa legam nostermagna
          </label>
          <br />
          <div className="masuk">
            <div className="content">
              <form className="subscription">
                <input className="add-email" type="email" />
                <button className="submit-email" type="button">
                  <span className="before-submit">Subscribe</span>
                  <span className="after-submit">
                    Thank you for subscribing!
                  </span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
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
export default landingPage
