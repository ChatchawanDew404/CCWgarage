import React from 'react'
import "./css/Blog.css"
import {Link} from "react-router-dom"
// import icons
import {FaComments,FaUser} from 'react-icons/fa'

// import layouts and components
import RightBlogLayout from '../components/RightBlogLayout'
import FooterLayout from '../components/FooterLayout'

function Blog() {
  return (
    <>
   {/* blog banner */}
   <header className="blogBanner">
      <div className="content">
        <h1>Blog</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/blog" className='link'><span>Blog</span></Link></p>
      </div>
    </header>



    {/* blog container */}
    <div className="blogContainer">
      <div className="container">
        
        {/* left layout */}
        <div className="blog-left-layout">
          <div className="blogRow">

          <div className="blogBx">
              <div className="blogImg">
                <img src="/public/images/banner1.jpg" alt="" />
                <div className="blogPostDate">19 May 2023</div>
                </div>
                <div className="BlogContent">
                  <h2 className="blogTitle">This is blog title</h2>
                  <div className="blogData">
                    <span className="creatorName"><FaUser className='bx-icon'/> By Admin</span> /
                    <span className="comment"><FaComments className='bx-icon'/> 20 comments</span>
                  </div>

                  <p className="description">There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                  <Link to="/blog/readBlog" className="readMoreBtn">Read More </Link>
                </div>
            </div>
          <div className="blogBx">
              <div className="blogImg">
                <img src="/public/images/banner1.jpg" alt="" />
                <div className="blogPostDate">19 May 2023</div>
                </div>
                <div className="BlogContent">
                  <h2 className="blogTitle">This is blog title</h2>
                  <div className="blogData">
                    <span className="creatorName"><FaUser className='bx-icon'/> By Admin</span> /
                    <span className="comment"><FaComments className='bx-icon'/> 20 comments</span>
                  </div>

                  <p className="description">There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                  <Link to="/blog/readBlog" className="readMoreBtn">Read More </Link>
                </div>
            </div>
          <div className="blogBx">
              <div className="blogImg">
                <img src="/public/images/banner1.jpg" alt="" />
                <div className="blogPostDate">19 May 2023</div>
                </div>
                <div className="BlogContent">
                  <h2 className="blogTitle">This is blog title</h2>
                  <div className="blogData">
                    <span className="creatorName"><FaUser className='bx-icon'/> By Admin</span> /
                    <span className="comment"><FaComments className='bx-icon'/> 20 comments</span>
                  </div>

                  <p className="description">There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                  <Link to="/blog/readBlog" className="readMoreBtn">Read More </Link>
                </div>
            </div>
          <div className="blogBx">
              <div className="blogImg">
                <img src="/public/images/banner1.jpg" alt="" />
                <div className="blogPostDate">19 May 2023</div>
                </div>
                <div className="BlogContent">
                  <h2 className="blogTitle">This is blog title</h2>
                  <div className="blogData">
                    <span className="creatorName"><FaUser className='bx-icon'/> By Admin</span> /
                    <span className="comment"><FaComments className='bx-icon'/> 20 comments</span>
                  </div>

                  <p className="description">There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                  <Link to="/blog/readBlog" className="readMoreBtn">Read More </Link>
                </div>
            </div>
          <div className="blogBx">
              <div className="blogImg">
                <img src="/public/images/banner1.jpg" alt="" />
                <div className="blogPostDate">19 May 2023</div>
                </div>
                <div className="BlogContent">
                  <h2 className="blogTitle">This is blog title</h2>
                  <div className="blogData">
                    <span className="creatorName"><FaUser className='bx-icon'/> By Admin</span> /
                    <span className="comment"><FaComments className='bx-icon'/> 20 comments</span>
                  </div>

                  <p className="description">There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                  <Link to="/blog/readBlog" className="readMoreBtn">Read More </Link>
                </div>
            </div>
          <div className="blogBx">
              <div className="blogImg">
                <img src="/public/images/banner1.jpg" alt="" />
                <div className="blogPostDate">19 May 2023</div>
                </div>
                <div className="BlogContent">
                  <h2 className="blogTitle">This is blog title</h2>
                  <div className="blogData">
                    <span className="creatorName"><FaUser className='bx-icon'/> By Admin</span> /
                    <span className="comment"><FaComments className='bx-icon'/> 20 comments</span>
                  </div>

                  <p className="description">There are many variations of passages of Lorem Ipsum typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

                  <Link to="/blog/readBlog" className="readMoreBtn">Read More </Link>
                </div>
            </div>
       

          

          </div>
        </div>

        {/* right layout */}
        <RightBlogLayout/>
      


      </div>
    </div>
    {/* Footer */}
    <FooterLayout/>
    </>
  )
}

export default Blog