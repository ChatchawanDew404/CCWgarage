import React from 'react'
import "./css/ServiceTotalCountUp.css"
import { useState } from 'react'
// import icons
import {RiTeamFill} from 'react-icons/ri'
import {GiAutoRepair} from 'react-icons/gi'
import {FaUsers} from 'react-icons/fa'
import {BsCarFrontFill} from 'react-icons/bs'
import CountUp from 'react-countup'
import ScrollTrigger from "react-scroll-trigger"

function ServiceTotalCountUp() {
  const [counterOn,setCounterOn] = useState(false)
  return (
    <>
    <div className="service_total">
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>{setCounterOn(false)}}>
        <div className="container">
          <div className="service_total_bx">
          <GiAutoRepair className="bx-icon"/>
            <div className="sum">{counterOn && <CountUp start={0} end={1024} duration={2} delay={0}/>}</div>
            <h3 className='title-tag'>Years Experience</h3>
          </div>
          <div className="service_total_bx">
           <RiTeamFill className='bx-icon'/>
            <div className="sum">{counterOn && <CountUp start={0} end={991} duration={2} delay={0}/>}</div>
            <h3 className='title-tag'>Expert Technicians</h3>
          </div>
          <div className="service_total_bx">
            <FaUsers className='bx-icon'/>
            <div className="sum">{counterOn && <CountUp start={0} end={768} duration={2} delay={0}/>}</div>
            <h3 className='title-tag'>Satisfied Clients</h3>
          </div>
          <div className="service_total_bx">
            <BsCarFrontFill className='bx-icon'/>
            <div className="sum">{counterOn && <CountUp start={0} end={678} duration={2} delay={0}/>}</div>
            <h3 className='title-tag'>Compleate Projects</h3>
          </div>
        </div>
        </ScrollTrigger>
      </div>
    </>
  )
}

export default ServiceTotalCountUp

