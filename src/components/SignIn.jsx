import React from 'react'
import {Link} from 'react-router-dom'
import '../assest/global.css'

function SignIn() {
  return (
    <div className='SignIn-container'>
        <div className='heading-container'>
        <h1>
            Welcome !!!!! You are the valid User.......
        </h1>
        <Link to='/'><button className='signIn_btn'>Logout</button></Link>
        </div>
    </div>
  )
}

export default SignIn