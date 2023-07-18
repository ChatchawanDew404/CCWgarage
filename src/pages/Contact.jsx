import React from 'react'
import './css/Contact.css'
// import link
import {Link} from 'react-router-dom'
// import all components and layouts
import FooterLayout from '../components/FooterLayout'
// import icons
import {AiOutlineMail,AiOutlineGooglePlus} from 'react-icons/ai'
import {BsTelephone} from 'react-icons/bs'
import {GrFacebookOption,GrLinkedinOption,GrTwitter} from 'react-icons/gr'
import {IoLogoInstagram} from 'react-icons/io'
import {BiMapAlt} from 'react-icons/bi'




function Contact() {
  return (
    <>
    {/* Contact Banner */}
    <header className="contactBanner">
      <div className="content">
        <h1>Contact</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/contact" className='link'><span>Contact</span></Link></p>
      </div>
    </header>




    {/* Contact container */}
    <section className="contact-container">
     <div className="container">

     <div className="contact-container-left">
        <h2>Send Message Us</h2>
        <form action="">
          <div className="input-Bx">
            <input type="text" placeholder='Your Name...'/>
            <input type="text" placeholder='Your Email...'/>
          </div>
          <div className="input-Bx">
            <input type="text" placeholder='Phone...'/>
            <input type="text" placeholder='Subject...'/>
          </div>
          <textarea placeholder='Your Message...'/>
          <button>Submit</button>
        </form>
      </div>


      <div className="contact-container-right">
        <h2>Quick Contact</h2>
        <p className='description'>If you have any questions simply use the following contact details.</p>

        <div className="contact-bx">
          <div className="bx-icon"><BiMapAlt className="icon"/></div>
          <div className="content">
            <h4>ADDRESS :</h4>
            <p className='description-bx'>123 West Street, Melbourne Victoria 3000 Australia</p>
          </div>
        </div>

        <div className="contact-bx">
          <div className="bx-icon"><AiOutlineMail className="icon"/></div>
          <div className="content">
            <h4>EMAIL :</h4>
            <p className='description-bx'>info@company.com</p>
          </div>
        </div>

        <div className="contact-bx">
          <div className="bx-icon"><BsTelephone className="icon"/></div>
          <div className="content">
            <h4>PHONE</h4>
            <p className='description-bx'>+91 123 456 7890</p>
          </div>
        </div>

       <div className="social-container">
       <GrFacebookOption className='bx-icon'/>
          <IoLogoInstagram className='bx-icon'/>
          <GrLinkedinOption className='bx-icon'/>
          <GrTwitter className='bx-icon'/>
          <AiOutlineGooglePlus className='bx-icon'/>
       </div>


      </div>
     </div>
    </section>


<div className="map">
<div className="container">
  <h2>Our Location</h2>
<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3787.6620210759834!2d99.3986862!3d18.3170581!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1688658231779!5m2!1sth!2sth"  ></iframe>
</div>
</div>

    
    {/* footer */}
    <FooterLayout/>
    </>
  )
}

export default Contact