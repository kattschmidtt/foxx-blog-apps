import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Alert, Divider } from '@mui/material'
import axios from 'axios'

const Register = () => {

  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
    confirmedPassword: ''
  })

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeInputHandler = e => {
    setUserData(prevState => {
      return {...prevState, [e.target.name]: e.target.value}
    })
  }

  const registerUser = async (e) => {
    e.preventDefault()
    setError('')
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/register`, userData)
      //console.log(response);
      const newUser = response.data;
      //console.log(newUser)

      if(!newUser) {
        setError("Couldn't register user. Please try again.")
      } else {
        navigate('/login')
      }
    } catch (err) {
      setError(err.response?.data?.message)
    }
  }

  return (
    <section className="register">
      <div className="container">
        <h2 className='center'>Signup</h2>
        <form className="form register-form" onSubmit={registerUser}>
          { error && <Alert severity='error'>{error}</Alert> }
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler} autoFocus/>
          <input type="text" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <input type="password" placeholder='Confirm Password' name='confirmedPassword' value={userData.confirmedPassword} onChange={changeInputHandler}/>
          <Divider variant="middle" />
          <button type='submit' className='btn-register'>Register</button>
        </form>
        <small>Already have an account?<Link to="/login"> Sign In</Link></small>
      </div>
    </section>
  )
}

export default Register