import React from 'react'
import "./css/RightBlogLayout.css"

// import icons
import {FaComments,FaChevronRight} from 'react-icons/fa'
import {HiOutlineSearch} from 'react-icons/hi'


function RightBlogLayout() {
  return (
   <>
     <div className="blog-right-layout">

<div className="searchBx">
  <h2 className="blogTitle">Search</h2>
  <div className="inputBx">
    <input type="text" placeholder='search here...'/>
    <button><HiOutlineSearch/></button>
  </div>
</div>

<div className="recentPostBx">
<h2 className="blogTitle">Recent Posts</h2>

<div className="mini-blog-bx">
  <div className="image"><img src="/public/images/banner1.jpg" alt="" /></div>
  <div className="content">
    <h3 className='mini-blog-title'>This is blog title</h3>
     <p><span className='creator'>By Admin</span> / <span className='comment'><FaComments className='bx-icon'/> 28 </span></p>
  </div>
</div>
<div className="mini-blog-bx">
  <div className="image"><img src="/public/images/banner1.jpg" alt="" /></div>
  <div className="content">
    <h3 className='mini-blog-title'>This is blog title</h3>
     <p><span className='creator'>By Admin</span> / <span className='comment'><FaComments className='bx-icon'/> 28 </span></p>
  </div>
</div>
<div className="mini-blog-bx">
  <div className="image"><img src="/public/images/banner1.jpg" alt="" /></div>
  <div className="content">
    <h3 className='mini-blog-title'>This is blog title</h3>
     <p><span className='creator'>By Admin</span> / <span className='comment'><FaComments className='bx-icon'/> 28 </span></p>
  </div>
</div>

</div>

<div className="categoryListBx">
<h2 className="blogTitle">Categories List</h2>

<ul>
<li><span className="catrgoryName"><FaChevronRight className="bx-icon"/>Category name</span> <span className="category-sum">(1)</span></li>
<li><span className="catrgoryName"><FaChevronRight className="bx-icon"/>Category name</span> <span className="category-sum">(1)</span></li>
<li><span className="catrgoryName"><FaChevronRight className="bx-icon"/>Category name</span> <span className="category-sum">(1)</span></li>
<li><span className="catrgoryName"><FaChevronRight className="bx-icon"/>Category name</span> <span className="category-sum">(1)</span></li>
<li><span className="catrgoryName"><FaChevronRight className="bx-icon"/>Category name</span> <span className="category-sum">(1)</span></li>
<li><span className="catrgoryName"><FaChevronRight className="bx-icon"/>Category name</span> <span className="category-sum">(1)</span></li>
</ul>
</div>


<div className="serviceBx">
<h2 className="blogTitle">Our Service</h2>

<div className="showImg">
  <img src="/public/images/banner1.jpg" alt="" />
  <img src="/public/images/banner1.jpg" alt="" />
  <img src="/public/images/banner1.jpg" alt="" />
  <img src="/public/images/banner1.jpg" alt="" />
  <img src="/public/images/banner1.jpg" alt="" />
  <img src="/public/images/banner1.jpg" alt="" />
</div>
</div>


<div className="tagBx">
<h2 className="blogTitle">Tags</h2>

      <div className="allTags">
        <div className="tagName">Desigh</div>
        <div className="tagName">User Interface</div>
        <div className="tagName">SEO</div>
        <div className="tagName">WprdPress</div>
        <div className="tagName">Development</div>
        <div className="tagName">Joomla</div>
        <div className="tagName">Desigh</div>
        <div className="tagName">User Interface</div>
        <div className="tagName">SEO</div>
        <div className="tagName">WprdPress</div>
        <div className="tagName">Development</div>
        <div className="tagName">Joomla</div>
        <div className="tagName">Desigh</div>
        <div className="tagName">User Interface</div>
        <div className="tagName">SEO</div>
        <div className="tagName">WprdPress</div>
        <div className="tagName">Development</div>
        <div className="tagName">Joomla</div>
      </div>
</div>

</div>
   </>
  )
}

export default RightBlogLayout