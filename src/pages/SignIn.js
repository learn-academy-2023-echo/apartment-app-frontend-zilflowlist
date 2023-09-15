import React, { useRef } from 'react'
import {useNavigate} from "react-router-dom"
import './SignIn.css'

const SignIn = ({ login }) => {
  const formRef = useRef()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)
      const userInfo = {
        "user":{ email: data.email, password: data.password }
      }
      login(userInfo)
      navigate("/")
      e.target.reset()
  }
  return (
    <div className='signup-body'>
    <h2 className='sign-header'>Login</h2>
    <form className='signup-form' ref={formRef} onSubmit={handleSubmit}>
    Email: <input type="email" name="email" placeholder="email" className='signup-input'/>
    <br />
    Password: <input type="password" name="password" placeholder="password" className='signup-input'/>
    <br />
    <input className="submit-form" type='submit' value="Submit" />
    <div className="bottom-link">Not registered?  
          <a href="/signup">  <u>Register</u></a> 
        </div>
    </form>
  </div>
  )
}

export default SignIn