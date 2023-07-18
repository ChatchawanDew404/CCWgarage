import React from 'react'
import "./css/Register.css"

// import link
import {Link} from 'react-router-dom'
// import icons

// Import all layouts and components
import FooterLayout from '../components/FooterLayout'


function Register() {
  return (
   <>
   {/* register banner */}
   <header className="contactBanner">
      <div className="content">
        <h1>Register</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/register" className='link'><span>Register</span></Link></p>
      </div>
    </header>

    {/* login_container */}
    <div className="register_container">
      <div className="container">

        <div className="heading">
          <h2>Register</h2>
          <h2>Your Account</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Sit aliquid, Non distinctio vel iste.</p>
        </div>

        <from className="registerFrom">
          <input type="text" placeholder='First Name'/>
          <input type="text" placeholder='Last Name'/>
          <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Password'/>
          <input type="text" placeholder='Confirm Password'/>

          <div className="inputCheckBx">
            <input type="checkbox" className='checkBx'/>
            <p>I consent to ccwgarrage processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.</p>
          </div>
          <div className="inputCheckBx">
            <input type="checkbox" className='checkBx'/>
            <p>By clicking "create account", I consent to the privacy policy.</p>
          </div>
           
          <button>Create Account</button>
          <p className='already_have_acc_tx'>Already have an account? <Link to="/login" className='link'>Login</Link></p>
        </from>
      </div>
    </div>
   
   {/* Footer */}
   <FooterLayout/>
   </>
  )
}

export default Register