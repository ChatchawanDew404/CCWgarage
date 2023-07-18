import React from 'react'
import "./css/ProductSlide.css"
// Import swiper.css
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import 'swiper/css'
// import link
import {Link} from "react-router-dom"
// import icons
import {FaRegEye} from 'react-icons/fa'
import {BsStarFill,BsStarHalf,BsStar,BsCart4,BsCartPlus} from 'react-icons/bs'

function ProductSlide() {
  return (
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

    <SwiperSlide className='product-col'>
            <div className="image">
              <p>image</p>
              <div className="view-buy-product-bx">
              <Link to="/product/ViewProduct"> <FaRegEye className="bx-icons"/></Link>
               <Link to="/product/productCartPage"> <BsCartPlus className="bx-icons"/></Link>
              </div>
              </div>
            <div className="rate">
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarHalf className='bx-icon star-Half'/>
                  <BsStar className='bx-icon star'/>
            </div>
            <div className="product-name">Product Name</div>
            <div className="product-price">$00.00</div>
    </SwiperSlide>
    <SwiperSlide className='product-col'>
            <div className="image">
              <p>image</p>
              <div className="view-buy-product-bx">
              <Link to="/product/ViewProduct"> <FaRegEye className="bx-icons"/></Link>
               <Link to="/product/productCartPage"> <BsCartPlus className="bx-icons"/></Link>
              </div>
              </div>
            <div className="rate">
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarHalf className='bx-icon star-Half'/>
                  <BsStar className='bx-icon star'/>
            </div>
            <div className="product-name">Product Name</div>
            <div className="product-price">$00.00</div>
    </SwiperSlide>
    <SwiperSlide className='product-col'>
            <div className="image">
              <p>image</p>
              <div className="view-buy-product-bx">
              <Link to="/product/ViewProduct"> <FaRegEye className="bx-icons"/></Link>
               <Link to="/product/productCartPage"> <BsCartPlus className="bx-icons"/></Link>
              </div>
              </div>
            <div className="rate">
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarHalf className='bx-icon star-Half'/>
                  <BsStar className='bx-icon star'/>
            </div>
            <div className="product-name">Product Name</div>
            <div className="product-price">$00.00</div>
    </SwiperSlide>
    <SwiperSlide className='product-col'>
            <div className="image">
              <p>image</p>
              <div className="view-buy-product-bx">
              <Link to="/product/ViewProduct"> <FaRegEye className="bx-icons"/></Link>
               <Link to="/product/productCartPage"> <BsCartPlus className="bx-icons"/></Link>
              </div>
              </div>
            <div className="rate">
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarHalf className='bx-icon star-Half'/>
                  <BsStar className='bx-icon star'/>
            </div>
            <div className="product-name">Product Name</div>
            <div className="product-price">$00.00</div>
    </SwiperSlide>
    <SwiperSlide className='product-col'>
            <div className="image">
              <p>image</p>
              <div className="view-buy-product-bx">
              <Link to="/product/ViewProduct"> <FaRegEye className="bx-icons"/></Link>
               <Link to="/product/productCartPage"> <BsCartPlus className="bx-icons"/></Link>
              </div>
              </div>
            <div className="rate">
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarFill className='bx-icon star-fill'/>
                  <BsStarHalf className='bx-icon star-Half'/>
                  <BsStar className='bx-icon star'/>
            </div>
            <div className="product-name">Product Name</div>
            <div className="product-price">$00.00</div>
    </SwiperSlide>
   


  </Swiper>
  )
}

export default ProductSlide