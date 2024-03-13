import { Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Error from '../error.png';

const ErrorPage = () => {
  return (
    <section>
      <div>
        <Typography 
          variant='h2' 
          sx={{
            textAlign: 'center', 
            paddingTop:'5rem', 
            display: 'block', 
            width: '100%', 
            fontFamily: 'Roboto Mono'}}
        >
          Page Not Found
        </Typography>
        <br />
        <Link to="/">
          <img
            className='container' 
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '25%',
              overflow: 'hidden',
            }}
            src={Error} 
            alt="Go home" />
        </Link>
      </div>
    </section>
  )
}

export default ErrorPage