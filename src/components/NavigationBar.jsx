import React, { useState } from 'react'
import "./css/NavigationBar.css"
import { Link ,NavLink} from 'react-router-dom'
// Import Icons
import {GrFacebookOption,GrLinkedinOption,GrTwitter} from 'react-icons/gr'
import {BsTelephoneFill,BsSearch,BsCart} from 'react-icons/bs'
import {IoMdTime,IoLogoInstagram} from 'react-icons/io'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {FiMenu} from 'react-icons/fi'
import {HiOutlineUser} from 'react-icons/hi'


function NavigationBar() {
    // Sticky Navigation 
    const [fix,setFix] = useState(false)
    const [navbarActive,setNavbarActive] = useState(false)
    const [navbarSearch,setNavbarSearch] = useState(false)
    const [navbarUser,setNavbarUser] = useState(false)

// make sticky if window screen > 350
    window.addEventListener('scroll',()=>{
        if(window.scrollY >=350){setFix(true)}
                else{setFix(false)
                 console.log(fix)}
    })

  return (
    <>
    <div className="navbar-top">
      <div className="container">
      <div className="navbar-top-left">
            <span><FaMapMarkerAlt className='boxIcons'/>123 Street, New York, USA</span>
            <span><IoMdTime className='boxIcons'/> Mon - Fri : 09.00 AM - 09.00 PM</span>
        </div>
        <div className="navbar-top-right">
            <span><BsTelephoneFill className='boxIcons'/>+012 345 6789
</span>
          <ul className="social-box">
           <li><GrFacebookOption className='boxIcons'/></li>
            <li><IoLogoInstagram className='boxIcons'/></li>
            <li><GrLinkedinOption className='boxIcons'/></li>
            <li><GrTwitter className='boxIcons'/></li>
          </ul>
        </div>
      </div>
    </div>
    

    <nav className={fix ? 'navigation sticky' :'navigation'}>
        <div className="container">
      <Link className="logo" to="/"><img src="/public/images/logoDeleteBg2.png" alt="" /></Link>

<div className="left-navbar-bx">
{/* {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />} */}
<ul className={navbarActive ? "navbar active" :"navbar"}>
     <li><NavLink to="/" className='navLink' onClick={()=>{setNavbarActive(false)}}>Home</NavLink> </li>
     <li><NavLink to="/about" className='navLink' onClick={()=>{setNavbarActive(false)}}>About</NavLink></li>
     <li><NavLink to="/service" className='navLink' onClick={()=>{setNavbarActive(false)}}>Service</NavLink></li>
     <li><NavLink to="/product" className='navLink' onClick={()=>{setNavbarActive(false)}}>Product</NavLink></li>
     <li><NavLink to="/blog" className='navLink' onClick={()=>{setNavbarActive(false)}}>Blog</NavLink></li>
     <li><NavLink to="/contact" className='navLink' onClick={()=>{setNavbarActive(false)}}>Contact</NavLink></li>
 </ul>

  <span className="menu-bar" onClick={()=>{setNavbarActive(!navbarActive),setNavbarUser(false), setNavbarSearch(false)}}><FiMenu className='menu-icon'/></span>

 <div className="other_btn_Bx">

  <div className="search_btn_Bx">
  <div className='btn_search'  onClick={()=>{setNavbarSearch(!navbarSearch),setNavbarUser(false),setNavbarActive(false)}}><BsSearch className='bx-icon'/></div>

  <div className={navbarSearch ? "searchInputBx active":"searchInputBx"}>
    <input type="text" placeholder='Search here...'/>
    <BsSearch className='bx-icon'/>
  </div>
  </div>

  <div className="account_btn_bx">
  <div className='btn_account' onClick={()=>{setNavbarUser(!navbarUser),setNavbarSearch(false),setNavbarActive(false)}}><HiOutlineUser className='bx-icon'/></div>

  <div className={navbarUser ? "manageAccountBx active" :"manageAccountBx" }>
  <Link to="/register" className='link' onClick={()=>{setNavbarUser(false), setNavbarSearch(false)}}>Register</Link>
  <Link to="/login" className='link' onClick={()=>{setNavbarUser(false), setNavbarSearch(false)}}>Login</Link>
  </div>
  </div>
   
     <Link to="/product/productCartPage" className='btn_cart'><BsCart className='bx-icon'/></Link>
 </div>
</div>
        </div>
    </nav>
    </>
  )
}

export default NavigationBar