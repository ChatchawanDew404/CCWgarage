import React from 'react'
import "./css/AllGallery.css"
import { useState } from 'react'
// import icons
import {ImEye} from 'react-icons/im'
import {AiOutlineClose} from 'react-icons/ai'
// import data
import { allGallery } from '../data/allGallery'
import {FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa"


function AllGallery() {
  const [showPopup,setShowPopup] = useState(false)
  const [getClickImage,setGetClickImage] = useState()

  function getImageFunction(getImg){
    setShowPopup(true)
    setGetClickImage(getImg.image)
  }

  function clickToPrevImage(){
    let indexOfImage = allGallery.findIndex((checkImg)=>{
      return checkImg.image == getClickImage
    })
    if(indexOfImage == 0){
      setGetClickImage(allGallery[allGallery.length - 1].image)
    }else{
      setGetClickImage(allGallery[indexOfImage - 1].image)
    }
  }

  function clickToNextImage(){
    let indexOfImage = allGallery.findIndex((checkImg)=>{
      return checkImg.image == getClickImage
    })
    if(indexOfImage == allGallery.length -1){
      setGetClickImage(allGallery[0].image)
    }else{
      setGetClickImage(allGallery[indexOfImage + 1].image)
    }
  }

  return (
    <>
     <section className="gallery">
        <div className="container">
          <div className="heading">
          <h4 className="title-tag">All Gallery</h4>
            <h2>All our Gallery</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, facere nihil? At quae provident doloribus?</p>
          </div>

        <div className="gallery-row">

          {allGallery?.map((gallery)=>{
            return   <div className="galleryBx" key={gallery.id}>
            <div className="show-popup-gallery" onClick={()=>{getImageFunction(gallery)}}><ImEye className='bx-icon'/></div>
              <img src={gallery.image} alt=""/>
            </div>
          })}

        </div>
        </div>
        </section>



      <div className={showPopup?"galleryPopup active" :"galleryPopup"}>
        <div className="closePopup" onClick={()=>{setShowPopup(false),setGetClickImage()}}><AiOutlineClose className='bx-icon'/></div>
        <div className="image">
          <img src={getClickImage} alt="" />
        <div className="nextImage" onClick={clickToNextImage}><FaAngleDoubleRight className='bx-icon'/></div>
        <div className="prevImage" onClick={clickToPrevImage}><FaAngleDoubleLeft className='bx-icon'/></div>
        </div>
      </div>



    </>
  )
}   

export default AllGallery