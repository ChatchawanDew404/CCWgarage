import React from 'react'
import './css/ReadBlog.css'

// import Link
import {Link} from 'react-router-dom'
// import icons
import {CiShare1,CiSaveDown2} from 'react-icons/ci'
import {AiOutlineLike} from 'react-icons/ai'
// import Layouts and components
import RightBlogLayout from '../components/RightBlogLayout'
import FooterLayout from '../components/FooterLayout'

function ReadBlog() {
  return (
    <>
    {/* readBlog Banner */}
      <header className="readBlogBanner">
      <div className="content">
        <h1>Blog</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span> / </span> <Link to="/blog" className='link'><span>Blog</span></Link> / <Link to="/blog/readBlog" className='link'><span>Blog Details</span></Link></p>
      </div>
    </header>


    {/* Blog Details */}
   <div className="blogDetail">
    <div className="container">
      {/* left layout */}
        <div className="blog-detail-left-layout">


          <div className="header-blogDetail">
          <div className="creatorBlog-Bx">
            <div className="image"><img src="/public/images/teamImage/mechanic5.jpg" alt="" /></div>
            <div className="content">
              <div className="username">By Admin CCWGarage</div>
              <div className="date">19 May 2023</div>
            </div>
          </div>

            <div className="like-share-blog-Bx">
              <span><AiOutlineLike/></span>
              <span><CiSaveDown2/></span>
              <span><CiShare1/></span>
            </div>
          </div>

          <div className="image"><img src="/public/images/banner1.jpg" alt="" /></div>
          <h1 className="title-blog-detail">This is just a dummy page. when pressed to read</h1>

           <p className='tx'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi quaerat ipsum consectetur in dicta ratione! Provident autem eum veniam distinctio nihil laborum asperiores! Dolorum dolores odio distinctio tenetur magni harum nihil nemo itaque sapiente! Ad rem, culpa iure labore explicabo atque, architecto earum tempore commodi odit nam, totam nisi aliquam ea veniam nostrum illum quaerat doloribus. Magnam beatae consequuntur error cum, corporis veritatis odit magni natus quasi quam. Impedit, blanditiis maiores temporibus reprehenderit deleniti repellendus enim eum, illo, totam similique perferendis consectetur qui sed consequuntur soluta dolorem voluptatem incidunt eos. Nemo molestiae corrupti atque velit eveniet eligendi, dicta libero.</p>

           <p className='tx'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore commodi quaerat ipsum consectetur in dicta ratione! Provident autem eum veniam distinctio nihil laborum asperiores! Dolorum dolores odio distinctio tenetur magni harum nihil nemo itaque sapiente! Ad rem, culpa iure labore explicabo atque, architecto earum tempore commodi odit nam, totam nisi aliquam ea veniam nostrum illum quaerat doloribus. Magnam beatae consequuntur error cum, corporis veritatis odit magni natus quasi quam. Impedit, blanditiis maiores temporibus reprehenderit deleniti repellendus enim eum, illo, totam similique perferendis consectetur qui sed consequuntur soluta dolorem voluptatem incidunt eos. Nemo molestiae corrupti atque velit eveniet eligendi, dicta libero.</p>

           <p className='tx'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae officiis possimus mollitia reprehenderit dignissimos nihil qui, tempore, ut fugiat quibusdam odit dolore sint doloremque a placeat rem suscipit quia eum aut eos quae porro corporis! Iure omnis culpa quaerat commodi ex asperiores distinctio est tempore earum aspernatur dolor iste doloribus, cupiditate quos sapiente neque error dolores vitae soluta quis? Voluptatem.</p>

           <p className='tx'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente deleniti eaque commodi enim porro magni repellat doloribus placeat facilis tempora ea perspiciatis nobis facere itaque earum voluptas autem, quaerat animi? Blanditiis quis molestiae omnis! Quisquam dolor illum accusamus veniam officia, reprehenderit tempora laborum quos a totam autem temporibus. Possimus, nisi debitis. Odit distinctio, nihil debitis mollitia fugit minus laborum similique ea atque voluptas. Quibusdam quae a suscipit molestiae nam!</p>
          {/* all comment */}



          <div className="comment-container">
            
               <div className="create-user-comment">
                <h2 className='opinion_title'>Express your opinion here.</h2>
                   <div className="inputBx">
                    <input type="text" placeholder='Your name ...'/>
                    <input type="text" placeholder='Email address ...'/>
                   </div>
                   <textarea placeholder='Comments....'></textarea>
                   <button className='create-post-btn'>Post Comment</button>
               </div>

               <h2 className="number-of-comment">Comment 3</h2>

               <div className="display-all-comments">

                     <div className="user-comment">
                      <div className="image"><img src="/public/images/clientImage/client4.jpg" alt=""/></div>
                      <div className="content">
                        <h3>Michale John</h3>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum quo autem nam neque illo.</p>
                        <p className="data">21 May 2023</p>
                      </div>
                     </div>
                     <div className="user-comment">
                      <div className="image"><img src="/public/images/clientImage/client1.jpg" alt=""/></div>
                      <div className="content">
                        <h3>Michale John</h3>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum quo autem nam neque illo Lorem ipsum dolor sit.. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellendus, voluptates earum quas facilis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni, quia.</p>
                        <p className="data">21 May 2023</p>
                      </div>
                     </div>
                     <div className="user-comment">
                      <div className="image"><img src="/public/images/clientImage/client2.jpg" alt=""/></div>
                      <div className="content">
                        <h3>Michale John</h3>
                        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta illum quo autem nam neque illo Lorem ipsum dolor sit.. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam adipisci repellendus, voluptates earum quas facilis!</p>
                        <p className="data">21 May 2023</p>
                      </div>
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

export default ReadBlog