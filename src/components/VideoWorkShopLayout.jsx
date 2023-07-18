import React from 'react'
import "./css/VideoWorkShop.css"         
import {Link} from 'react-router-dom'
import { useState } from 'react'
import video from "/public/video/carRepairVideo.mp4"
// import icons
import {BsFillCameraVideoFill} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'

function VideoWorkShop() {
  const [clickShowVideoPopup,setClickShowVideoPopup] = useState(false)
  return (
    <>
    <div className="workshop">
        <div className="container">
          <div className="work-row-bx">
            <div className="work-col-left">
             <div className="image">
             <img src="/public/images/workshop.jpg" alt="" />
              <div className="playVideo-btn" onClick={()=>{setClickShowVideoPopup(true)}}><BsFillCameraVideoFill className='bx-icon'/></div>
             </div>
            </div>
            <div className="work-col-right">
              <h3 className='title-tag'>Want to Join With Us?</h3>
              <h2>WATCH LIVE WORKSHOP</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis totam, laudantium officia praesentium expedita omnis unde tempora beatae, modi, sequi quis. Est quas corporis, nobis aperiam cumque minima libero rem, itaque quo vitae odit praesentium expedita?</p>
              <Link to="/about" className='view-more-work-btn'>View More</Link>
            </div>
          </div>
        </div>
        </div>



        <div className={clickShowVideoPopup?"showVideoPopup active" :"showVideoPopup"}>
        <div className="closePopup" onClick={()=>{setClickShowVideoPopup(false)}}><AiOutlineClose className='bx-icon'/></div>
          <div className="videoBx">
            <video autoplay muted controls>
              <source src={video} type="video/mp4"></source>
            </video>
          </div>
        </div>
    </>
  )
}

export default VideoWorkShop