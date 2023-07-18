import React from 'react'
import "./css/ProductCartPage.css"

// import Link
import {Link} from "react-router-dom"
// import Icons
import {RxCheckbox} from "react-icons/rx"
import {FaTruck} from "react-icons/fa"
import {BsTrash3Fill} from "react-icons/bs"
// import Components and Layouts
import FooterLayout from '../components/FooterLayout'

function ProductCartPage() {
  return (
    <>
    {/* product cart page banner */}
    <header className="productCartBanner">
      <div className="content">
        <h1>Product</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span> / </span> <Link to="/product" className='link'><span>Product</span></Link> / <Link to="/product/productCartPage" className='link'><span>Product Cart</span></Link></p>
      </div>
    </header>



{/* product cart update alert */}
<div className="container">
<div className="product-update-alert-bx">
<RxCheckbox className="bx-icon"/>
<h4>Shipping costs updated.</h4>
</div>
</div>


{/*product cart */}
<div className="product-cart">
<div className="container">

{/* Order table */}
<table className='order-table'>
  <tr className='title-table'>
    <th>Image</th>
    <th>Product Name</th>
    <th>Price</th>
    <th>Quantity</th>
    <th>Total</th>
    <th>Remove</th>
    <th></th>
  </tr>
  <tr>
    <td><div className="image"><img src="/public/images/67414.jpg" alt="" /></div></td>
    <td><div className="product-name">Product Name</div></td>
    <td><div className="price-bx">$00.00</div></td>
    <td>
        <div className="quantity-bx">
        <span>-</span>
        <input type="number" value="1"/>
        <span>+</span>
        </div>
        </td>
    <td><div className="total-bx">$00.00</div></td>
    <td><div className="remove-bx"><BsTrash3Fill className="bx-icon"/></div></td>
  </tr>
  <tr>
    <td><div className="image"><img src="/public/images/67414.jpg" alt="" /></div></td>
    <td><div className="product-name">Product Name</div></td>
    <td><div className="price-bx">$00.00</div></td>
    <td>
        <div className="quantity-bx">
        <span>-</span>
        <input type="number" value="1"/>
        <span>+</span>
        </div>
        </td>
    <td><div className="total-bx">$00.00</div></td>
    <td><div className="remove-bx"><BsTrash3Fill className="bx-icon"/></div></td>
  </tr>



</table>

{/* order table responsive */}
<table className='order-table-responsive'>
  <tr>
  <td><h3>Image</h3><div className="image"><img src="/public/images/67414.jpg" alt="" /></div></td>
    <td><h3>Product Name</h3> <p className="product-name">Product Name</p></td>
    <td><h3>Price</h3> <p className="price-bx">$00.00</p></td>
    <td><h3>Quantity</h3>
        <div className="quantity-bx">
        <span>-</span>
        <input type="number" value="1"/>
        <span>+</span>
        </div>
        </td>
    <td><h3>Total</h3> <p className="total-bx">$00.00</p></td>
    <td><h3>Remove</h3> <div className="remove-bx"><BsTrash3Fill className="bx-icon"/></div></td>
  </tr>
  <tr>
  <td><h3>Image</h3><div className="image"><img src="/public/images/67414.jpg" alt="" /></div></td>
    <td><h3>Product Name</h3> <p className="product-name">Product Name</p></td>
    <td><h3>Price</h3> <p className="price-bx">$00.00</p></td>
    <td><h3>Quantity</h3>
        <div className="quantity-bx">
        <span>-</span>
        <input type="number" value="1"/>
        <span>+</span>
        </div>
        </td>
    <td><h3>Total</h3> <p className="total-bx">$00.00</p></td>
    <td><h3>Remove</h3> <div className="remove-bx"><BsTrash3Fill className="bx-icon"/></div></td>
  </tr>
  <tr>
  <td><h3>Image</h3><div className="image"><img src="/public/images/67414.jpg" alt="" /></div></td>
    <td><h3>Product Name</h3> <p className="product-name">Product Name</p></td>
    <td><h3>Price</h3> <p className="price-bx">$00.00</p></td>
    <td><h3>Quantity</h3>
        <div className="quantity-bx">
        <span>-</span>
        <input type="number" value="1"/>
        <span>+</span>
        </div>
        </td>
    <td><h3>Total</h3> <p className="total-bx">$00.00</p></td>
    <td><h3>Remove</h3> <div className="remove-bx"><BsTrash3Fill className="bx-icon"/></div></td>
  </tr>
</table>

{/* manage product */}
<div className="manage-Product">

    <div className="coupon-bx">
        <input type="text" placeholder='Coupon Code...'/>
        <button>Apply Coupon</button>
    </div>

      <Link className='continue-btn' to="/product">Continue Shopping</Link>

</div>

{/* cart total */}
<div className="cart-total-container">
    <div className="title">Cart Totals</div>
    <div className="subTotal-bx"><span>SubTotal</span> <p className="subTotalPrice">$00.00</p></div>
    <p className='tx-1'>Shipping</p>
    <div className="flat-bx"><span>Flat rate:</span> <p className="subTotalPrice">$00.00</p></div>
    <p className='tx-2'>Shipping to CA</p>
    <p className='address-tx'>Change address <FaTruck className='bx-icon'/></p>
    <div className="total-bx"><span>Total</span> $00.00</div>
    <Link to="/product/checkoutPage" className='checkout-btn'>Process To Checkout</Link>
</div>


</div>
</div>



    {/* Footer */}
    <FooterLayout/>
    </>
  )
}

export default ProductCartPage