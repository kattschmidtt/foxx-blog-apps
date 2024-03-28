import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Divider } from '@mui/material'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandler = e => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUser = async (e) => {

  }

  return (
    <section className="login">
      <div className="container">
        <h2 className='center'>Login</h2>
        <form className="form login-form">
          { error && <Alert severity='error'>This is an error message</Alert> }
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