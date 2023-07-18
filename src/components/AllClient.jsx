import React from 'react'
import "./css/AllClient.css"
// Import client data
import allClientData from "../data/allClient"
// Import swiper.css
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css'
// import icons
import {FaQuoteRight} from 'react-icons/fa'
function OurClient() {
  return (
   <>
     <section className="client">
        <div className="container">
        <div className="heading">
          <h4 className="title-tag">Happy client</h4>
            <h2>client reviews</h2>
          </div>

          <Swiper
        slidesPerView={1}
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          640: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 3
          },
          991: {
            slidesPerView: 3
          },
        }}
        
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >

       {allClientData.map((clientData) =>{
    return <SwiperSlide className='client-bx' key={clientData.id}>
    <div className="quote"><FaQuoteRight/></div>
    <div className="image">
      <img src={clientData.image} alt="" />
    </div>
    <div className="content">
      <p className="title">{clientData.comment}</p>
      <h4 className='userName'>{clientData.username}</h4>
    </div>
  </SwiperSlide> 
   })}
        
       
      </Swiper>
      
        </div>
    </section>

   </>
  )
}

export default OurClient