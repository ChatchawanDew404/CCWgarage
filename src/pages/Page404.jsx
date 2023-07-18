import React from 'react'
import "./css/Page404.css"

// import Link
import {Link} from "react-router-dom"
// import components and layouts
import FooterLayout from '../components/FooterLayout'

function Page404() {
  return (
    <>
    <header className="page404Banner">
      <div className="content">
        <h1>404 Page</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/" className='link'><span>.....</span></Link></p>
      </div>
    </header>
    

    <div className="page404">
      <div className="container">
        <div className="image"><img src="/public/images/car.png" alt="" /></div>
        <h1>404</h1>
        <h2>Opps! Page not found</h2>
        <p>Sorry, the page you're looking for doesn't exist. If you think something is broken, report a problem</p>
      
         <div className="button-container">
          <Link to="/" className='btn'>Return Home</Link>
          <Link to="/contact" className='btn'>Report Problem</Link>
         </div>
      </div>
    </div>

    {/* Footer */}
    <FooterLayout/>
    </>
  )
}

export default Page404