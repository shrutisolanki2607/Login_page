import React from 'react'
import {Link} from 'react-router-dom'
import '../assest/global.css'

function SignUp() {
  return (
    <div className='SignUp-container'>
        <div className='heading-container'>
        <h1>You are our ......New User </h1>
        <Link to='/'><button className='signIn_btn'>Logout</button></Link>
        </div>
    </div>
  )
}

export default SignUp