import React from 'react'

const Signup = () => {
  return (
    <div>
       <div className="logincard">
        <form action="" className="login-form">
          <div className="image"><img src={Logo} alt="" /></div>
          <div className="inputs">
            <input type="text" name="" id="" className="username" placeholder='Mail ID'/>
            <input type="password" name="" id="" className="password" placeholder='Password'/>
            <input type="password" name="" id="" className="confirm-password" placeholder='Confirm Password'/>
          </div>
          <button className='signup-btn'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup