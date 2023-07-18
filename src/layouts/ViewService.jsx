import React from 'react'
import './css/ViewService.css'

// import Link
import {Link} from 'react-router-dom'
// import icons
import {FaFilePdf,FaFileWord} from 'react-icons/fa'
// import components and Layouts
import FooterLayout from '../components/FooterLayout'


function ViewService() {
  return (
    <>
      <header className="viewServiceBanner">
      <div className="content">
        <h1>Service</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span> / </span> <Link to="/service" className='link'><span>Service</span></Link> / <Link to="/service/viewService" className='link'><span>Service Detail</span></Link></p>
      </div>
    </header>


    {/* view service container */}
    <div className="viewServiceContainer">
      <div className="container">

        <div className="viewService-left-layout">
          <div className="image"><img src="/public/images/workshop.jpg" alt="" /></div>

          <h2 className="title">SERVICES DETAILS</h2>
          <p className='detail-tx'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore suscipit, inventore aliquid incidunt, quasi error! Natus esse rem eaque asperiores eligendi dicta quidem iure, excepturi doloremque eius neque autem sint error qui tenetur, modi provident aut, maiores laudantium reiciendis expedita. Eligendi Lorem, ipsum dolor.</p>

<p className='detail-tx'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptatem officiis quod animi possimus a, iure nam sunt quas aperiam non recusandae reprehenderit, nesciunt cumque pariatur totam repellendus delectus? Maxime quasi earum nobis, dicta, aliquam facere reiciendis, delectus voluptas, ea assumenda blanditiis placeat dignissimos quas iusto repellat cumque.</p>
<p className='detail-tx'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore voluptatem officiis quod animi possimus a, iure nam sunt quas aperiam non recusandae reprehenderit, nesciunt cumque pariatur totam repellendus delectus? Maxime quasi earum nobis, dicta, aliquam facere reiciendis, delectus voluptas, ea assumenda blanditiis placeat dignissimos quas iusto repellat cumque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque laborum ratione at exercitationem ad.</p>

          <h2 className="title">PRICE IDEA</h2>

          <ul className='plan-choice'>
            <li className='plan-choice-active'>Feature Plan 1</li>
            <li>Feature Plan 2</li>
            <li>Feature Plan 3</li>
          </ul>

          <div className="plan-detail-box">
            <h3 className="plan-price">Price : $350</h3>
            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh</p>

          </div>
        </div>


        <div className="viewService-right-layout">
          {/* service choice detail */}
              <ul className="service-choice">
              <li className='service-choice-active'>General Service & Washing</li>
                <li>Break Repair & Service</li>
                <li>Engine Service & Repair</li>
                <li>Transmission Services</li>
                <li>Performance Upgrade</li>
                <li>Denting & Painting</li>
                <li>Power & Energy</li>
                <li>Tyre & Wheels</li>      
              </ul>

            {/* Download service detail */}
            <div className="download-service-detail">
              <h2 className='title'>Download Brochures</h2>
              <div className="download-doc-bx">
                <p><FaFileWord className='bx-icon'/> Download Doc</p>
              </div>
              <div className="download-pdf-bx">
                <p><FaFilePdf className='bx-icon'/> Download Pdf</p>
              </div>
            </div>

            {/* quict contact */}
            <div className="quick-contact">
              <h2 className='title'>Quick Contact</h2>
              <form action="">
                <input type="text" placeholder='Enter Email...'/>
                <textarea placeholder='Enter Message...'></textarea>
                <button>Send Message</button>
              </form>
            </div>
        </div>
      </div>
    </div>







    {/* Footer section */}
    <FooterLayout/>
    </>
  )
}

export default ViewService