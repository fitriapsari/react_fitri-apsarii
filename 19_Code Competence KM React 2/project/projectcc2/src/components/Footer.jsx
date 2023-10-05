import "../module.css/Footer.css"

function Footer() {
  return (
    <footer>
      <section className="footer-container">
        <div className="footer-contents">
          <div className="content">
            <h1 className="footer-title">realCinema</h1>
            <p className="isiRealCinema">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet
              eaque harum cum ea blanditiis ex molestias officiis
            </p>
            <div className="mediaSosial">
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-youtube" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
            </div>
          </div>
          <div className="content">
            <h1 className="footer-title">AboutUs</h1>
            <p className="isiAboutUs">
              We're all about bringing you great entertainment. No matter where
              you are or what you love, we've got a wide range of awesome TV
              shows, documentaries, movies, and mobile games just for you.
              You're in charge of what you want to watch, whenever you want,
              with one simple subscription. We're available in over 30 languages
              and 190 countries because amazing stories can come from anywhere
              and be loved by everyone. We're big fans of entertainment, and
              we're always here to help you discover your next favorite story.
            </p>
          </div>
          <div className="content">
            <h6 className="footer-title">Contact</h6>
            <p className="text-light">4043 N</p>
            <p className="text-light">Ravenswood Ave</p>
            <p className="text-light">Suite 316</p>
            <p className="text-light">Chicago, IL, 60613</p>
            <p>
              <a href="" className="text-primary">
                {" "}
                (773) 348-4581
              </a>
            </p>
          </div>
        </div>
        <hr className="footer-line" />
        <div className="d-flex flex-row justify-content-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Privacy</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Terms</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Support</a>
            </li>
          </ul>
          <p className="footerCinema">©2023 realCinema</p>
        </div>
      </section>
    </footer>
  )
}
export default Footer
