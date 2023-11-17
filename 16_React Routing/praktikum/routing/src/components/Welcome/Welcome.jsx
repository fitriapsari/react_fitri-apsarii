import React from "react"
import { Link } from "react-router-dom"
import styles from "./Welcome.module.css"
import heroImage from "../../assets/heroImg.png"

function Welcome() {
  return (
    <section className={styles.awal}>
      <div className={styles.textContainer}>
        <div>
          <h1>Better Solutions For Your</h1>
          <h1>Business</h1>
          <br />
          <p className={styles.weAre}>
            We are a team of talented designers creating websites with
            Bootstrap.
          </p>
          <br />
          <div className={styles.sip}>
            <Link
              className={`${styles.roundedButton} ${styles.active}`}
              to="/create-product"
            >
              Get Started
            </Link>
            {/* <button className={`${styles.roundedButton} ${styles.active}`}>
              Get Started
            </button> */}
            <a href="#">
              <button className={`${styles.roundedButton} ${styles.watch}`}>
                Watch Video
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={heroImage} alt="Hero" className={styles.Img} />
      </div>
    </section>
  )
}

export default Welcome
