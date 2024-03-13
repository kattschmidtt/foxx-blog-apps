import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Divider } from '@mui/material'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
  })

  const changeInputHandler = e => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <section className="register">
      <div className="container">
        <h2 className='center'>Signup</h2>
        <form className="form register-form">
          <Alert severity='error'>This is an error message</Alert>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <input type="password" placeholder='Confirm Password' name='password' value={userData.confirmedPassword} onChange={changeInputHandler}/>
          <Divider variant="middle" />
          <button type='submit' className='btn-register'>Register</button>
        </form>
        <small>Already have an account?<Link to="/login"> Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register