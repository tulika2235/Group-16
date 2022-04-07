import React, { useState } from "react"

const BasicForm = () => {
  const [values, setValues] = useState({
    fullname: "",
    email: "",
    password: "",
  });

  const handleChange = (event) =>{
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    })
  }
  const handleFormSubmit = event => {
    event.preventDefault()
  }
  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <h2 className="title">Create Account</h2>
        </div>
        <form className="form-wrapper">
          <div className="name">
            <label className="label">Full Name</label>
            <input
              className="input"
              type="text"
              name="fullname"
              value={values.fullname}
              onChange={handleChange}
            />
          </div>
          <div className="Email">
            <label className="label">Email</label>
            <input
              className="input"
              type="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div className="Password">
            <label className="label">Password</label>
            <input
              className="input"
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="submit" onClick={handleFormSubmit}>
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BasicForm