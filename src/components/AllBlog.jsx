import React from 'react'
import "./css/AllBlog.css"
// import blog data
import ALlBlog from "../data/allBlog"
import {Link} from 'react-router-dom'
// Import swiper.css
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css'
// import icons
import {FaUserEdit} from 'react-icons/fa'
import {BsCalendar3} from 'react-icons/bs'
import allBlog from '../data/allBlog';

function AllBlog() {
  return (
    <>
    <section className="blog">
        <div className="container">
          <div className="heading">
          <h4 className="title-tag">Our Blogs</h4>
            <h2> Latest Blog & Articles</h2>
          </div>

        <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}

        breakpoints={{
          480: {
            spaceBetween:10,
            slidesPerView: 1
          },
          678: {
            spaceBetween:15,
            slidesPerView: 2
          },
          991: {
            spaceBetween:15,
            slidesPerView: 3
          },
        }}
        
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >

{allBlog.map((blogData)=>{
  return  <SwiperSlide className='blog-bx' key={blogData.id}>
  <div className="image"><img src={blogData.image} alt=""/></div>
  <div className="content">
   <div className="title">{blogData.title}</div>
   <div className="creator">
     <span className='name'><FaUserEdit className="bx-icon"/>{blogData.creator}</span> /
     <span className='date'><BsCalendar3 className="bx-icon"/>{blogData.date}</span>
   </div>
   <div className="text">{blogData.description}</div>
 <Link to="/blog/readBlog" className='btn-blog'>View Details</Link>
  </div>
 </SwiperSlide>
})}
      
       
    

      </Swiper>
        </div>
        </section>
    </>
  )
}

export default AllBlog