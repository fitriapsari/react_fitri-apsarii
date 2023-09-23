import React from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import styles from "./Regist.module.css"
// import { Link } from "react-router-dom"

const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "First name must be at least 3 characters")
        .required("Please fill in all required fields."),
      lastName: Yup.string()
        .min(3, "Last name must be at least 3 characters")
        .required("Please fill in all required fields."),
      email: Yup.string()
        .email("Invalid email address")
        .required("Please fill in all required fields."),
      username: Yup.string().required("Please fill in all required fields."),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Please fill in all required fields."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Please fill in all required fields."),
    }),
    onSubmit: (values) => {
      console.log(values)
    },
  })

  return (
    <div className={styles.formContainer}>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <h2>Registration</h2>
          <label htmlFor="firstName">First Name</label>
          <input
            className={styles.input}
            type="text"
            id="firstName"
            name="firstName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div className={styles.errorText}>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div className={styles.errorText}>{formik.errors.lastName}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className={styles.errorText}>{formik.errors.email}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className={styles.input}
            type="text"
            id="username"
            name="username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
          />
          {formik.touched.username && formik.errors.username ? (
            <div className={styles.errorText}>{formik.errors.username}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className={styles.errorText}>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            className={styles.input}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
            <div className={styles.errorText}>
              {formik.errors.confirmPassword}
            </div>
          ) : null}
        </div>
        <button
          type="submit"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Submit
        </button>
        {/* <Link
          to="/Login"
          type="submit"
          style={{ backgroundColor: "blue", color: "white" }}
        >
          Submit
        </Link> */}
      </form>
    </div>
  )
}

export default RegistrationForm
