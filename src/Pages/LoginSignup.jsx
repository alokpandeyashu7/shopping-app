import React from 'react'
import './css/LoginSignup.css'
const LoginSignup = () => {
  return (
    <div className='loginSignup'>
       <div className="loginSignup-container">
        <h1>Sign-Up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='your Name'/>
          <input type="email" placeholder='your email'/>
          <input type="password" placeholder='your password'/>
        </div>
        <button>Continue</button>
        <p className="loginSignup-login">
            Already have an account  ? <span>Login here </span>
        </p>
        <div className="loginSignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing you are agreeing with our terms and policy</p>
        </div>
       </div>
    </div>
  )
}

export default LoginSignup
