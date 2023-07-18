import React from 'react'
import "./css/Login.css"

// import link
import {Link} from 'react-router-dom'
// import icons
import {GrFacebookOption,GrTwitter} from 'react-icons/gr'
import {FcGoogle} from 'react-icons/fc'
// Import all layouts and components
import FooterLayout from '../components/FooterLayout'


function Login() {
  return (
    <>
    {/* login banner */}
       <header className="loginBanner">
      <div className="content">
        <h1>Login</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/login" className='link'><span>Login</span></Link></p>
      </div>
    </header>

    {/* login_container */}
    <div className="login_container">
      <div className="container">

        <div className="heading">
          <h2>Log In</h2>
          <h2>Your Account</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.
Sit aliquid, Non distinctio vel iste.</p>
        </div>

        <from className="loginFrom">
         <div className="inputBx">
         <input type="text" placeholder='Email'/>
          <input type="text" placeholder='Password'/>
         </div>

          <div className="remember_me_and_forgetPwd_Bx">

            <div className="rememberMe_bx">
              <input type="checkbox" name="" id="" />
              <span>Remember Me </span>
            </div>

            <Link className='forgotPwd_link'>Forgot Password ?</Link>
          </div>

           
          <button>Log In</button>
          <p className='are_you_new_tx'>Don't have an account ? <Link to="/register" className='link'>Register</Link></p>
           <div className="line"></div>

            <div className="social_login_bx">
                    <div className="facebook_bx">
                      <GrFacebookOption className='bx-icon'/>
                      <span className="tx">Login with Facebook</span>
                    </div>
                    <div className="twitter_bx">
                    <GrTwitter className='bx-icon'/>
                      <span className="tx">Login with Twitter</span>
                    </div>
                    <div className="google_bx">
                      <FcGoogle className='bx-icon'/>
                      <span className="tx">Login with Google</span>
                    </div>
             </div>

        </from>
      </div>
    </div>



    {/* Footer */}
    <FooterLayout/>
    </>
  )
}

export default Login