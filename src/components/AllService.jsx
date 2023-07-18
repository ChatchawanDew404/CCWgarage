import React, { useState } from 'react'
import "./css/AllService.css"
// import Link
import {Link} from 'react-router-dom'
// import data
import allService from '../data/allService.js'
// import framer
import {motion,AnimatePresence} from "framer-motion"

function AllService() {
  // get all category in data
  const allCategoryBtn = ['all',... new Set(allService.map((data)=>data.category))]
  const [allServiceData,setAllServiceData] = useState(allService)

   function filterItem(getText){
    if(getText == "all"){
        setAllServiceData(allService)
    }else{
       const filterServiceData = allService.filter((checkData)=>{
          return checkData.category == getText
       })
       setAllServiceData(filterServiceData)
    }
   }

  return (
    <>
      <section className="all-service-container">
        <div className="container">
          <div className="heading">
            <h4 className="title-tag">All Service</h4>
            <h2>All our services</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque culpa aliquam!</p>
          </div>


            <div className="control-category">
            {allCategoryBtn.map((btnText,index)=>{
            return   <button className='control-service-btn'   key={index} onClick={()=>{filterItem(btnText)}}>{btnText}</button>
          })}
            </div>
          

          <motion.div
              animate={{opacity:1,scale:1}} 
              initial = {{opacity:0,scale:0}}
              exit={{opacity:0,scale:0}}
             layout 
             className="all-service-row">
         <AnimatePresence>
         {allServiceData.map((data)=>{
              return   <motion.div 
              animate={{opacity:1,scale:1}} 
              initial = {{opacity:0,scale:0}}
              // exit = {{opacity:0,scale:0}}
              
              className="all-service-bx" key={data.id}>
                <div className="image">
                   <img src={data.image} alt="" />
                   </div>
                <h2>{data.title}</h2>
                <p>{data.description}</p>
                 <Link to="/service/ViewService" className='view-service-btn'>Read more</Link>
              </motion.div>
            })}
         </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </>
  )
}

export default AllService