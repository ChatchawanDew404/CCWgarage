import React from 'react'
import './css/AllOurServiceLayout.css'

// import icons
import {AiFillCar} from 'react-icons/ai'
import {RiServiceFill,RiOilFill} from 'react-icons/ri'
import {MdMiscellaneousServices} from 'react-icons/md'
import {GiAutoRepair,GiCarWheel} from 'react-icons/gi'


function AllOurServiceLayout() {
  return (
    <>
     <section className="testimonial">
        <div className="container">
          <div className="heading">
           <h4 className='title-tag'>Our service</h4>
           <h2>Explore Our Services</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ab totam necessitatibus, aut sunt molestiae.</p>
          </div>


          <div className="testimonial_Container">
          <div className="testimonialBx">
            <div className="bx-icon-content"></div>
            <MdMiscellaneousServices className='bx-icon'/>
            <h5>ENGINE DIAGNOSTICS</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ut quia cumque, sapiente voluptas et!</p>
          </div>
          <div className="testimonialBx">
            <AiFillCar className="bx-icon"/>
            <h5>BRAKE REPAIR</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ut quia cumque, sapiente voluptas et!</p>
          </div>
          <div className="testimonialBx">
            <RiOilFill className="bx-icon"/>
            <h5>LUBE, OIL AND FILTERS</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ut quia cumque, sapiente voluptas et!</p>
          </div>
          <div className="testimonialBx">
            <RiServiceFill className="bx-icon"/>
            <h5>BELTS AND HOSES</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ut quia cumque, sapiente voluptas et!</p>
          </div>
          <div className="testimonialBx">
            <GiAutoRepair className="bx-icon"/>
            <h5>AIR CONDITIONING</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ut quia cumque, sapiente voluptas et!</p>
          </div>
          <div className="testimonialBx">
            <GiCarWheel className="bx-icon"/>
            <h5>TIRE AND WHEEL SERVICES</h5>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate ut quia cumque, sapiente voluptas et!</p>
          </div>

          </div>
        

        </div>
      </section>
    </>
  )
}

export default AllOurServiceLayout