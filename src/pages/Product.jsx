import React from 'react'
import "./css/Product.css"

// import link
import {Link} from 'react-router-dom'
// import icon
import {BsCartPlus,BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"
import {FaRegEye,FaAngleDoubleLeft,FaAngleDoubleRight} from "react-icons/fa"
import {HiOutlineSearch} from 'react-icons/hi'

// import components and layouts
import FooterLayout from '../components/FooterLayout'

function Product() {

  return (
   <>
   {/* product banner */}
<header className="productBanner">
      <div className="content">
        <h1>Product</h1>
        <p><Link to="/" className='link'><span>Home</span></Link> <span>/</span> <Link to="/product" className='link'><span>Product</span></Link></p>
      </div>
    </header>

    {/* product shop */}
    <div className="product-container">
     <div className="container">

     <div className="product-left-layout">

        <div className="search-bx">
         <h4 className="title">Search</h4>
         <div className="inputBx">
          <input type="text" placeholder='Search here...'/>
          <button className='search-product'><HiOutlineSearch className='bx-icon'/></button>
         </div>
        </div>

        <div className="filter-bx">
        <h4 className="title">Filter By Price</h4>
          <input type="range" name="" id="" />
          <p className="price">Price: $1 — $1000</p>
          <button>Filter</button>
        </div>

        <div className="category-bx">
          <h4 className="title">Category</h4>
        <ul>
            <li>Accessories</li>
            <li>Engine parts</li>
            <li>Gadgets</li>
            <li>Glasses Change</li>
            <li>Battery</li>
            <li>Electronics</li>
          </ul>
        </div>
        </div>

        <div className="product-right-layout">
            <div className="allProducts">

              <div className="product-bx">
                <div className="image">
                  <p>image</p>
                  <div className="view-buy-product-bx">
                   <Link to="/product/ViewProduct"><FaRegEye className="bx-icons"/></Link>
                   <Link to="/product/productCartPage"><BsCartPlus className="bx-icons"/></Link>
                  </div>
                  </div>
                <div className="rate">
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarHalf className='bx-icon star-Half'/>
                      <BsStar className='bx-icon star'/>
                </div>
                <div className="product-name">Product Name</div>
                <div className="product-price">$00.00</div>
              </div>
              <div className="product-bx">
                <div className="image">
                  <p>image</p>
                  <div className="view-buy-product-bx">
                   <Link to="/product/ViewProduct"><FaRegEye className="bx-icons"/></Link>
                   <Link to="/product/productCartPage"><BsCartPlus className="bx-icons"/></Link>
                  </div>
                  </div>
                <div className="rate">
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarHalf className='bx-icon star-Half'/>
                      <BsStar className='bx-icon star'/>
                </div>
                <div className="product-name">Product Name</div>
                <div className="product-price">$00.00</div>
              </div>
              <div className="product-bx">
                <div className="image">
                  <p>image</p>
                  <div className="view-buy-product-bx">
                   <Link to="/product/ViewProduct"><FaRegEye className="bx-icons"/></Link>
                   <Link to="/product/productCartPage"><BsCartPlus className="bx-icons"/></Link>
                  </div>
                  </div>
                <div className="rate">
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarHalf className='bx-icon star-Half'/>
                      <BsStar className='bx-icon star'/>
                </div>
                <div className="product-name">Product Name</div>
                <div className="product-price">$00.00</div>
              </div>
              <div className="product-bx">
                <div className="image">
                  <p>image</p>
                  <div className="view-buy-product-bx">
                   <Link to="/product/ViewProduct"><FaRegEye className="bx-icons"/></Link>
                   <Link to="/product/productCartPage"><BsCartPlus className="bx-icons"/></Link>
                  </div>
                  </div>
                <div className="rate">
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarHalf className='bx-icon star-Half'/>
                      <BsStar className='bx-icon star'/>
                </div>
                <div className="product-name">Product Name</div>
                <div className="product-price">$00.00</div>
              </div>
              <div className="product-bx">
                <div className="image">
                  <p>image</p>
                  <div className="view-buy-product-bx">
                   <Link to="/product/ViewProduct"><FaRegEye className="bx-icons"/></Link>
                   <Link to="/product/productCartPage"><BsCartPlus className="bx-icons"/></Link>
                  </div>
                  </div>
                <div className="rate">
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarHalf className='bx-icon star-Half'/>
                      <BsStar className='bx-icon star'/>
                </div>
                <div className="product-name">Product Name</div>
                <div className="product-price">$00.00</div>
              </div>
              <div className="product-bx">
                <div className="image">
                  <p>image</p>
                  <div className="view-buy-product-bx">
                   <Link to="/product/ViewProduct"><FaRegEye className="bx-icons"/></Link>
                   <Link to="/product/productCartPage"><BsCartPlus className="bx-icons"/></Link>
                  </div>
                  </div>
                <div className="rate">
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarFill className='bx-icon star-fill'/>
                      <BsStarHalf className='bx-icon star-Half'/>
                      <BsStar className='bx-icon star'/>
                </div>
                <div className="product-name">Product Name</div>
                <div className="product-price">$00.00</div>
              </div>
  
            </div>

            <div className="pagination_product">
          <ul>
            <li><FaAngleDoubleLeft className='bx-icon'/></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li><FaAngleDoubleRight className='bx-icon'/></li>
          </ul>
         </div>
        </div>


      

     </div>
    </div>

   {/* Footer */}
   <FooterLayout/>
   </>
  )
}

export default Product