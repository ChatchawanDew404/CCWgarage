import React from 'react'
import "./css/Service.css"
// import swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
// import icons
import {RiServiceFill,RiOilFill} from 'react-icons/ri'
import {MdMiscellaneousServices} from 'react-icons/md'
import {GiAutoRepair,GiCarWheel} from 'react-icons/gi'
import { FaTimes,FaCheck } from 'react-icons/fa';
// import link 
import {Link} from 'react-router-dom'
// import layouts and components
import AllService from '../components/AllService';
import ServiceTotalCountUp from '../components/ServiceTotalCountUp';
import VideoWorkShop from '../components/VideoWorkShopLayout';
import AllGallery from '../components/AllGallery';
import AllClient from "../components/AllClient"
import AllBlog from '../components/AllBlog';
import FooterLayout from '../components/FooterLayout'


function Service() {
  return (
    <>

    {/* service banner */}
    <header className="serviceBanner">
      <div className="content">
        <h1>Service</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/service" className='link'><span>Service</span></Link></p>
      </div>
    </header>

    {/* All service section */}
    <AllService/>

    {/* pricing table */}
    <section className="priceTable">
      <div className="container">
      <Swiper
        slidesPerView={1}
        // spaceBetween={0}
        loop={true}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 7500,
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
            slidesPerView: 3,
            spaceBetween:1
          }
        }}
        
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >

  <SwiperSlide className='priceTable-bx'>
    <h3>Basic</h3>
    <div className="detail">
      <h2 className='price'>39 $</h2>
      <p>Per Month</p>
      <ul>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaTimes className='bx-icon false'/>Plan Feature</li>
      <li><FaTimes className='bx-icon false'/>Plan Feature</li>
      <li><FaTimes className='bx-icon false'/>Plan Feature</li>
      </ul>
      <button className='btn-view-detail'>View Detail</button>
    </div>
  </SwiperSlide>

  <SwiperSlide className='priceTable-bx'>
    <h3>Spaciel</h3>
    <div className="detail">
      <h2 className='price'>69 $</h2>
      <p>Per Month</p>
      <ul>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaTimes className='bx-icon false'/>Plan Feature</li>
      <li><FaTimes className='bx-icon false'/>Plan Feature</li>
      </ul>
      <button className='btn-view-detail'>View Detail</button>
    </div>
  </SwiperSlide> 


  <SwiperSlide className='priceTable-bx'>
    <h3>Standard</h3>
    <div className="detail">
      <h2 className='price'>99 $</h2>
      <p>Per Month</p>
      <ul>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaTimes className='bx-icon false'/>Plan Feature</li>
      </ul>
      <button className='btn-view-detail'>View Detail</button>
    </div>
  </SwiperSlide>

  <SwiperSlide className='priceTable-bx'>
    <h3>Premium</h3>
    <div className="detail">
      <h2 className='price'>139 $</h2>
      <p>Per Month</p>
      <ul>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaTimes className='bx-icon false'/>Plan Feature</li>
      </ul>
      <button className='btn-view-detail'>View Detail</button>
    </div>
  </SwiperSlide>

  <SwiperSlide className='priceTable-bx'>
    <h3>Professional</h3>
    <div className="detail">
      <h2 className='price'>259 $</h2>
      <p>Per Month</p>
      <ul>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      <li><FaCheck className='bx-icon true'/>Plan Feature</li>
      </ul>
      <button className='btn-view-detail'>View Detail</button>
    </div>
  </SwiperSlide> 

            
      </Swiper>
      
      </div>
     </section>

    {/* video workshop */}
       <VideoWorkShop/>
          {/* service total countUp */}
          <ServiceTotalCountUp/>

    {/* detail service section */}
    <section className="serviceDetail">
      <div className="container">

        
      <img src="/public/images/car.png" alt="" className="carImg"/>


        <div className="showDetailService">       
        <div className="detail-bx detail-1">
        <RiOilFill className='bx-icon'/>
          <h3> CAR INSPECTION</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam velit tempora soluta dolore debitis.</p>
        </div>
        <div className="detail-bx detail-2">
        <MdMiscellaneousServices className='bx-icon'/>
          <h3> ENGINE UPGRADE</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam velit tempora soluta dolore debitis.</p>
        </div>
        <div className="detail-bx detail-3">
        <RiServiceFill className='bx-icon'/>
          <h3> BATTERY RESTORE</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam velit tempora soluta dolore debitis.</p>
        </div>
        <div className="detail-bx detail-4">
        <GiAutoRepair className='bx-icon'/>
          <h3>BREAK CHECKUP</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, veniam velit tempora soluta dolore debitis.</p>
        </div>
        </div>
      </div>
    </section>

{/* Gallery section */}
<AllGallery/>

    {/* client section */}
    <AllClient/>
    {/* blog section */}
    <AllBlog/>
    {/* contact section */}

    {/* Footer */}
    <FooterLayout/>
    </>
  )
}

export default Service