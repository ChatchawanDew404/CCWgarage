import React from 'react'
import './css/Home.css'
import {Link} from 'react-router-dom'

// Import swiper.css
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css'
// import icons
import {BiChevronsRight} from 'react-icons/bi'
import {RiTeamFill} from 'react-icons/ri'
import {GiAutoRepair} from 'react-icons/gi'
import {FaUsers,FaRegEye} from 'react-icons/fa'
import {BsCarFrontFill,BsStarFill,BsStarHalf,BsStar,BsCart4,BsCartPlus} from 'react-icons/bs'
import {ImEye} from 'react-icons/im'

// Import all layouts and components
import AboutLayout from "../components/AboutLayout_1"
import AllOurServiceLayout from '../components/AllOurServiceLayout';
import ServiceTotalCountUp from '../components/ServiceTotalCountUp';
import AllService from '../components/AllService';
import AllGallery from '../components/AllGallery';
import ProductSlide from '../components/ProductSlide';
import AllTeam from '../components/AllTeam';
import VideoWorkShop from '../components/VideoWorkShopLayout';
import AllClient from "../components/AllClient"
import AllBlog from '../components/AllBlog';
import FooterLayout from '../components/FooterLayout'

function Home() {
  return (
    <>
    {/* Banner Section */}
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >

        <SwiperSlide className='bannerBx bannerBx_1'>
         <div className="container">
         <div className="content">
          <span className='banner_name'>CCWGARAGE</span>
            <h1>Qualified Car Repair Service Center</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa ullam labore nesciunt odit hic possimus? Voluptatem quas magnam ducimus ipsa dolore ullam porro excepturi.</p>
            <Link className='btn-banner'>Get started <BiChevronsRight className='bx-icon'/></Link>
          </div>
         </div>
        </SwiperSlide>

        <SwiperSlide className='bannerBx bannerBx_2'>
         <div className="container">
         <div className="content">
          <span className='banner_name'>CCWGARAGE</span>
            <h1>Qualified Car Repair Service Center</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa ullam labore nesciunt odit hic possimus? Voluptatem quas magnam ducimus ipsa dolore ullam porro excepturi.</p>
            <Link className='btn-banner'>Get started <BiChevronsRight className='bx-icon'/></Link>
          </div>
         </div>
        </SwiperSlide>
    
      </Swiper>

      {/* About Section */}
      <AboutLayout/>

       {/* Testimonial section */}
      <AllOurServiceLayout/>

      {/* service total service */}
      <ServiceTotalCountUp/>
    
      {/* All service */}
      <AllService/>
    
      {/* gallery container*/}
      <AllGallery/>

 {/* product container*/}
      <section className="product">
        <div className="container">

          <div className="heading">
          <h4 className="title-tag">Our Product</h4>
            <h2>BEST QUALITY PRODUCTS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque culpa aliquam!</p>
          </div> 

        {/* product slide */}
      <ProductSlide/>

      <Link className='product-btn' to="/product">View More</Link>
        </div>
        </section>

   {/* team container*/}
        <AllTeam/>
   {/* workshop */}
        <VideoWorkShop/>
   {/* client container*/}
        <AllClient/>  
   {/* blog container*/}
        <AllBlog/>
     


{/* footer */}
      <FooterLayout/>
    </>
    
  )
}

export default Home