// import styles from "./Newsletter.module.css"

function Newsletter() {
  return (
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
              <span className="after-submit">Thank you for subscribing!</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
