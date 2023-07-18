import React from 'react'
import "./css/Footer.css"
import { Link} from 'react-router-dom'
import {GrFacebookOption,GrLinkedinOption,GrTwitter} from 'react-icons/gr'
import {BiChevronRight} from 'react-icons/bi'
import {IoMdTime,IoLogoInstagram} from 'react-icons/io'
import {FaMapMarkerAlt} from 'react-icons/fa'

function FooterLayout() {
  return (
    <footer>
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
               <div className="showLogo"><img src="/public/images/logoDeleteBg2.png"/></div>
               <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla incidunt soluta aut sint ducimus voluptatem, consequuntur repudiandae mollitia asperiores doloremque, dolorem corrupti</p>

               <div className="social-container">
                <span><GrFacebookOption className='bx-icon'/></span>
            <span><IoLogoInstagram className='bx-icon'/></span>
            <span><GrLinkedinOption className='bx-icon'/></span>
            <span><GrTwitter className='bx-icon'/></span>
               </div>
            </div>
            <div className="footer-col">
               <h3 className='title'>Usefull Links</h3>
               <ul>
                <li><BiChevronRight className='bx-icon'/><Link to="/" className='footer-link'>Home</Link></li>
                <li><BiChevronRight className='bx-icon'/><Link to="/about" className='footer-link'>About</Link></li>
                <li><BiChevronRight className='bx-icon'/><Link to="/service" className='footer-link'>service</Link></li>
                <li><BiChevronRight className='bx-icon'/><Link to="/product" className='footer-link'>Product</Link></li>
                <li><BiChevronRight className='bx-icon'/><Link to="/blog" className='footer-link'>Blog</Link></li>
                <li><BiChevronRight className='bx-icon'/><Link to="/contact" className='footer-link'>Contact</Link></li>
               </ul>
            </div>
            <div className="footer-col">
              <h3 className="title">Our Services</h3>
                 <ul>
                  <li><BiChevronRight className='bx-icon'/>Engine Diagnostics</li>
                  <li><BiChevronRight className='bx-icon'/>Lube, Oil and Filters</li>
                  <li><BiChevronRight className='bx-icon'/>Belts and Hoses</li>
                  <li><BiChevronRight className='bx-icon'/>Air Conditioning</li>
                  <li><BiChevronRight className='bx-icon'/>Brake Repair</li>
                  <li><BiChevronRight className='bx-icon'/>Tire And Wheel</li>
                 </ul>
            </div>
            <div className="footer-col">
<h3>Quick Contact</h3>
<form action="" className='send-message-form'>
<div className="inputBx"><input type="text" placeholder='Enter your email...'/></div>
<textarea className='textarea' placeholder='message ...'/>
<button className='send-form-btn'>Send Message</button>
</form>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default FooterLayout