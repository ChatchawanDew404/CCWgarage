import React from 'react'
import './css/About.css'
import {Link} from 'react-router-dom'
// import icons
import {GiTimeTrap,GiAutoRepair,GiPriceTag} from 'react-icons/gi'
// import layout and component
import AboutLayout from '../components/AboutLayout_1'
import AllTeam from '../components/AllTeam'
import AllOurServiceLayout from '../components/AllOurServiceLayout'
import VideoWorkShop from '../components/VideoWorkShopLayout';
import FooterLayout from "../components/FooterLayout"

function About() {
  return (
   <>
    {/* about page */}
    <header className="aboutBanner">
      <div className="content">
        <h1>About Us</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/about" className='link'><span>About</span></Link></p>
      </div>
    </header>

    {/*about container Bx 1  */}
    <AboutLayout/>

    {/* about container Bx 2 */}
    <section className="about2">
      <div className="container">
        <div className="about2-left">
          <h2>We are highly skilled mechanics
for your car repair</h2>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
          <p>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution. User generated content in real-time will have multiple touchpoints for offshoring.</p>
        </div>
        <div className="about2-right">
          <div className="box-1"></div>
          <div className="box-2"></div>
          <img src="/public/images/about1.jpg" alt="" />
        </div>
      </div>
    </section>

    {/* about container Bx 3 */}
    <section className="about3">
        <div className="about3-left">
        <div className="text-container">
        <h2>Why Choose Us ___</h2>
          <div className="about-content">
          <GiAutoRepair className="bx-icon"/>
           <div className="content">
            <h3>Smart Technology</h3>
            <p>Leverage agile frameworks to provide a robust synopsis for
high level overviews. Iterative approaches to corporate strategy
foster collaborative thinking to further.</p>
           </div>
          </div>

          <div className="about-content">
           <GiPriceTag className='bx-icon'/>
           <div className="content">
            <h3>
Best & Reasonable Prices</h3>
            <p>Leverage agile frameworks to provide a robust synopsis for
high level overviews. Iterative approaches to corporate strategy
foster collaborative thinking to further.</p>
           </div>
        </div>
        <div className="about-content">
          <GiTimeTrap className='bx-icon'/>
            <div className="content">
              <h3>Timely Delivery</h3>
              <p>Leverage agile frameworks to provide a robust synopsis for
high level overviews. Iterative approaches to corporate strategy
foster collaborative thinking to further.</p></div>           
          </div>

          </div>
        
        </div>
        <div className="about3-right">
          <img src="/public/images/banner1.jpg" alt="" />
        </div>
    </section>

    {/* Testimonial section */}
<AllOurServiceLayout/>
    {/* Video section */}
<VideoWorkShop/>
    {/* Team section */}
   <AllTeam/>

   {/* Footer */}
   <FooterLayout/>
   </>
  )
}

export default About