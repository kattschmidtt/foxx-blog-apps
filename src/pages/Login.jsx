import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Alert, Divider } from '@mui/material'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const changeInputHandler = e => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  return (
    <section className="login">
      <div className="container">
        <h2 className='center'>Login</h2>
        <form className="form login-form">
          <Alert severity='error'>This is an error message</Alert>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <Divider variant="middle" />
          <button type='submit' className='btn-login'>Register</button>
        </form>
        <small>Don't have an account?<Link to="/register"> Register</Link></small>
      </div>
    </section>
  )
}

export default Login