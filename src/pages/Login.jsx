import React, { useState, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Divider } from '@mui/material'
import axios from 'axios';
import {UserContext} from '../context/userContext.js'

const Login = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const {setCurrentUser} = useContext(UserContext)

  const changeInputHandler = e => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const loginUser = async e => {
    e.preventDefault()
    setError('')

    try {
      const resp = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/login`, userData)
      const user = await resp.data;

      setCurrentUser(user)

      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message)
    }
  }

  return (
    <section className="login">
      <div className="container">
        <h2 className='center'>Login</h2>
        <form className="form login-form" onSubmit={loginUser}>
          { error && <Alert severity='error'>{error}</Alert> }
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <Divider variant="middle" />
          <button type='submit' className='btn-login'>Login</button>
        </form>
        <small>Don't have an account?<Link to="/register"> Register</Link></small>
      </div>
    </section>
  )
}

export default Login