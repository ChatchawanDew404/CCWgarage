import React from 'react'
import "./css/CheckoutProduct.css"
// import link 
import {Link} from "react-router-dom"
// import icons
import {FaTruck} from "react-icons/fa"
// import components and layout
import FooterLayout from '../components/FooterLayout'


function checkoutPage() {
  return (
    <>
    <header className="productCartBanner">
<div className="content">
  <h1>Product</h1>
  <p><Link to="/" className='link'><span>Home</span></Link> <span> / </span> <Link to="/product" className='link'><span>Product</span></Link> / <Link to="/product/productCartPage" className='link'><span>Checkout</span></Link></p>
</div>
</header>


{/* checkout input form container */}
<div className="checkoutContainer">
<div className="container">

  <form action="">
   <h2>Billing Details</h2>
      
      <div className="inputBx">
        <input type="text" placeholder='Firstname'/>
        <input type="text" placeholder='Last Name'/>
      </div>
 
    <input type="text" placeholder='United Kingdom (UK)'/>
    <input type="text" placeholder='Your Company Name'/>
    <input type="text" placeholder='Street Address'/>
    <input type="text" placeholder='Apartment, suite, unit etc. (optional)'/>
    <input type="text" placeholder='Town / City'/>
    <div className="inputBx">
        <input type="text" placeholder='Country'/>
        <input type="text" placeholder='Postcode/Zip'/>
      </div>
    <input type="text" placeholder='Email Address'/>
    <input type="text" placeholder='Phone Number'/>

     <textarea name="" id="" cols="30" rows="10" placeholder='Notes about your order, e.g. special notes for delivery.'></textarea>
  </form>

  {/* Show all order container */}
<div className="show-all-detail-container">
 <div className="title">Your Order</div>
 
  {/* show all product */}
 <div className="show-product-layout">
    <div className="show-product-Bx">

      <div className="product-bx">
        <div className="bx-1">
        <div className="image">
          <img src="/public/images/car.png" alt="" />
          </div>
         <div className="content">
         <p className="product-name">product name </p>
          <p className=''>00.00 * 1</p>
         </div>
        </div>
        <div className="total-price">
          <p>$00.00</p>
        </div>
      </div>

      <div className="product-bx">
        <div className="bx-1">
        <div className="image">
          <img src="/public/images/car.png" alt="" />
          </div>
         <div className="content">
         <p className="product-name">product name</p>
          <p className=''>00.00 * 1</p>
         </div>
        </div>
        <div className="total-price">
          <p className="total-price">$00.00</p>
        </div>
      </div>
      <div className="product-bx">
        <div className="bx-1">
        <div className="image">
          <img src="/public/images/car.png" alt="" />
          </div>
         <div className="content">
         <p className="product-name">product name</p>
          <p className=''>00.00 * 1</p>
         </div>
        </div>
        <div className="total-price">
          <p className="total-price">$00.00</p>
        </div>
      </div>


    </div>
   </div>

 <div className="subTotal-bx"><span>SubTotal</span> <p className="subTotalPrice">$00.00</p></div>
 <p className='tx-1'>Shipping</p>
 <div className="flat-bx"><span>Flat rate:</span> <p className="subTotalPrice">$00.00</p></div>
 <p className='tx-2'>Shipping to CA</p>

 {/* check payments */}
 <div className="CheckPayments">
     <div className="inputBx">
     <input type="radio" name="checkPayment-radio" value="Check Payments"/>
      <label >Check Payments</label>
     </div>

      <p>Please send a check to Store Name, Store Street, Store
         Town, Store State / County, Store Postcode.</p>
       <div className="inputBx">
       <input type="radio" name="checkPayment-radio" value="Direct Bank Transfer"/>
      <label >Direct Bank Transfer</label></div>  
    
<div className="inputBx">
<input type="radio" name="checkPayment-radio" value="Cash on Delivery"/>
      <label >Cash on Delivery</label>
</div>
     
<div className="inputBx">
<input type="radio" name="checkPayment-radio" value="Paypal" id="" />
      <label >Paypal</label>
</div>
 </div>

 <div className="total-bx"><span>Total</span> $00.00</div>
<button className='checkout-btn'>Place Order</button>

</div>


</div>
</div>

{/* Footer */}
<FooterLayout/>
    
    </>
  )
}

export default checkoutPage




