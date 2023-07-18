import React from 'react'
import "./css/AboutLayout_1.css"
import {Link} from 'react-router-dom'

// import icons
import {BiChevronsRight} from 'react-icons/bi'
import {RiServiceFill,RiCustomerService2Fill} from 'react-icons/ri'
import {GiAutoRepair} from 'react-icons/gi'
import {FaAward} from 'react-icons/fa'


function AboutLayout_1() {
  return (
    <>
    <section className="about">
        <div className="container">

        <div className="about-row">

        <div className="about-left-bx">
            <div className="image">
              <img src="/public/images/service-1.jpg" alt="" />
              <div className="mini-content">
                <p><span className="number">20</span> years</p>
                <p>Experience</p>
              </div>
            </div>
          </div>

          <div className="about-right-bx">

            <div className="heading">
              <h4 className='title-tag'>About Us</h4>
              <h2><span>CCWGARAGE</span> is one of the best places to take care of your car.</h2>
              <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, ab.</p>

            </div>

            <div className="detail_content">
<div className="detailBx">
  <div className="bx-icon-content"><GiAutoRepair className="bx-icon"/></div>

  <div className="content">
    <h4>Professional & Expert</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur illum necessitatibus.</p>
  </div>
</div>
<div className="detailBx">
  <div className="bx-icon-content"> <RiCustomerService2Fill className='bx-icon'/></div>

  <div className="content">
    <h4>Quality Servicing Center</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur illum necessitatibus.</p>
  </div>
</div>
<div className="detailBx">
  <div className="bx-icon-content"><FaAward className='bx-icon'/></div>
  
  <div className="content">
    <h4>Awards Winning Workers</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur illum necessitatibus.</p>
  </div>
</div>
<div className="detailBx">
  <div className="bx-icon-content">   <RiServiceFill className="bx-icon"/></div>

  <div className="content">
    <h4>Friendly service</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur illum necessitatibus.</p>
  </div>
</div>
            </div>

         <Link className="btn_about_Bx" to="/about">Read More <BiChevronsRight className='bx-icon'/></Link>
          </div>
        </div>
        </div>
      </section>

    </>
  )
}

export default AboutLayout_1
