import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { useFormik } from 'formik'
import * as Yup from 'yup'

function App() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().max(5, "Name must be less than 20 charaters").required("Name is require"),
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(3,"Too short")
    }), 
    onSubmit: (values) => {
      console.log(values)
    }
  })
  console.log(formik.errors)
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <p>{formik.errors.name}</p>
        <p>{formik.errors.email}</p>
        <p>{formik.errors.password}</p>
        <input 
          type='text'
          name="name"
          placeholder='Enter your name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <input 
          type='email'
          name="email"
          placeholder='Enter your email'
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <input 
          type='text'
          name="password"
          placeholder='Enter your password'
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
