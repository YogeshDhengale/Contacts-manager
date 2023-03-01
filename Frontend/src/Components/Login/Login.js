import React from 'react'
import './Login.css'
import Elipse from '../../assets/Ellipse31.png'
import dots from '../../assets/Group 695.png'
import Elipse2 from '../../assets/Ellipse 32.png'

const Login = () => {
  return (
    <>
    <div className="login">
      <div className="Elipse31"><img src={Elipse} alt="" /></div>
      <div className="Elipse32"><img src={Elipse2} alt="" /></div>
      <div className="logincard">
      </div>
      <div className="groupOfDots">
        <img src={dots} alt="" />
      </div>
      <div className="groupOfDots2">
        <img src={dots} alt="" />
      </div>
      <div className="logo">LOGO</div>
      <p className='para'>Enter your credentials to access your accout</p>
        <form action="" className="login-form">
          <div className="inputs">
            <input type="text" name="" id="" className="username" placeholder='Mail ID'/><br />
            <input type="password" name="" id="" className="password" placeholder='Password'/>
          </div>
          <button className='signup-btn'>Sign In</button>
          <a href="/signup" className='signupLink'>Sign Up</a>
        </form>
    </div>
    </>
  )
}

export default Login