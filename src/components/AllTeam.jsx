import React from 'react'
import allTeamData from '../data/allTeamData'
import "./css/AllTeam.css"

// Import swiper.css
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css'
// import icons
import {GrFacebookOption,GrLinkedinOption,GrTwitter} from 'react-icons/gr'
import {IoLogoInstagram} from 'react-icons/io'


function AllTeam() {
  return (
    <>
    <section className="team">
        <div className="container">
          <div className="heading">
          <h4 className="title-tag">Our Team</h4>
            <h2>HOW CAN WE HELP YOU</h2>
          </div>

          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 2
          },
          768: {
            slidesPerView: 3
          },
          991: {
            slidesPerView: 4
          },
        }}
        
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >

        {allTeamData.map((teamData) =>{
            return  <SwiperSlide className='team-col' key={teamData.id}>
            <div className="image">
             <img src={teamData.image} alt="" />
            </div>
            <div className="content">
             <h2 className="username">{teamData.username}</h2>
             <p className='JobPosition'>{teamData.jobPosition}</p>
             <ul className="social-contact">
             <li><GrFacebookOption className='box-icon'/></li>
                 <li><IoLogoInstagram className='box-icon'/></li>
                 <li><GrLinkedinOption className='box-icon'/></li>
                 <li><GrTwitter className='box-icon'/></li>
             </ul>
            </div>
             </SwiperSlide>
        })}

       
       
    
      </Swiper>

        </div>
        </section>
        </>
  )
}

export default AllTeam