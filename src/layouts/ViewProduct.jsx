import React from "react";
import "./css/ViewProduct.css";
import { Link } from "react-router-dom";

import { useState } from "react";
// import icons
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaShoppingBag,
  FaComments,
  FaRegNewspaper,
} from "react-icons/fa";
import {
  BsStarFill,
  BsStarHalf,
  BsStar,
  BsCartPlus,
  BsTable,
  BsFillCheckCircleFill,
  BsClock,
} from "react-icons/bs";

// import data
// import layout and components
import ProductSlide from "../components/ProductSlide";
import FooterLayout from "../components/FooterLayout";

function ViewProduct() {
  const [countQty, setCountQty] = useState(1);
  const [showDescription, setShowDescription] = useState(true);
  const [showInformation, setShowInformation] = useState(false);
  const [showReview, setShowReview] = useState(false);

  console.log(countQty);

  function minusQty() {
    if (countQty <= 1) {
      setCountQty(1);
    } else {
      setCountQty(countQty - 1);
    }
  }
  function plusQty() {
    setCountQty(countQty + 1);
  }

  return (
    <>
      <header className="viewProductBanner">
        <div className="content">
          <h1>Product</h1>
          <p>
            <Link to="/" className="link">
              <span>Home</span>
            </Link>{" "}
            <span> / </span>{" "}
            <Link to="/product" className="link">
              <span>Service</span>
            </Link>{" "}
            /{" "}
            <Link to="/product/viewProduct" className="link">
              <span>View Product</span>
            </Link>
          </p>
        </div>
      </header>

      {/* view product container */}
      <div className="viewProduct">
        <div className="container">
          <div className="viewProductLeft-layout">
            <div className="image">
              <p>img</p>
              <div className="prevImg ">
                <FaAngleDoubleLeft className="bx-icon" />
              </div>
              <div className="nextImg ">
                <FaAngleDoubleRight className="bx-icon" />
              </div>
            </div>
            <div className="miniImg">
              <div className="img">
                <p>img</p>
              </div>
              <div className="img">
                <p>img</p>
              </div>
              <div className="img">
                <p>img</p>
              </div>
              <div className="img">
                <p>img</p>
              </div>
            </div>
          </div>
          <div className="viewProductRight-layout">
            <div className="product-title">
              <h2>Product Title</h2>
            </div>
            <div className="product-details">
              <p>
                There are many variations of passages of Lorem Ipsum typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic.
              </p>
            </div>

            <div className="product-content">
              <div className="product-content-left">
                <div className="product-price">$00.00</div>
                <div className="product-tag">
                  Tags : <span>car parts</span>
                </div>
              </div>
              <div className="product-content-right">
                <div className="product-rate-star">
                  <BsStarFill className="bx-icon star-fill" />
                  <BsStarFill className="bx-icon star-fill" />
                  <BsStarFill className="bx-icon star-fill" />
                  <BsStarHalf className="bx-icon star-Half" />
                  <BsStar className="bx-icon star" />
                </div>
                <div className="product-rating">4.5 Rating</div>
              </div>
            </div>

            <div className="select-quantity">
              <p>Select quantity</p>
              <div className="inputBx">
                <span
                  onClick={() => {
                    minusQty();
                  }}
                >
                  -
                </span>
                <input type="text" value={countQty} />
                <span
                  onClick={() => {
                    plusQty();
                  }}
                >
                  +
                </span>
              </div>
            </div>

            <div className="button-content">
              <Link to="/product/checkoutPage" className="btn-buyNow">
                <FaShoppingBag className="bx-icon" />
                Buy Now
              </Link>
              <Link to="/product/productCartPage" className="btn-addCart">
                <BsCartPlus className="bx-icon" /> Add To Cart
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* all-product-detail */}
      <div className="all-product-detail">
        <div className="container">
          <div className="control-show-detail">
            <ul>
              <li
                className={showDescription ? "" : "active"}
                onClick={() => {
                  setShowDescription(true),
                    setShowInformation(),
                    setShowReview();
                }}
              >
                <FaRegNewspaper className="bx-icon" />
                Description
              </li>
              <li
                className={showInformation ? "" : "active"}
                onClick={() => {
                  setShowDescription(),
                    setShowInformation(true),
                    setShowReview();
                }}
              >
                <BsTable className="bx-icon" />
                Additional Information
              </li>
              <li
                className={showReview ? "" : "active"}
                onClick={() => {
                  setShowDescription(),
                    setShowInformation(),
                    setShowReview(true);
                }}
              >
                <FaComments className="bx-icon" />
                Product Review
              </li>
            </ul>
          </div>

          {/* description */}
          <div className="detail-container">
            <div
              className={
                showDescription ? "description active" : "description "
              }
            >
              <p>
                Suspendisse et justo. Praesent mattis commyolk augue Aliquam
                ornare hendrerit augue Cras tellus In pulvinar lectus a est
                Curabitur eget orci Cras laoreet. Lorem ipsum dolor sit amet,
                consectetuer adipiscing elit. Suspendisse et justo. Praesent
                mattis commyolk augue aliquam ornare augue.
              </p>
              <p>
                "But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth, the master-builder
                of human happiness. No one rejects, dislikes, or avoids pleasure
                itself, because it is pleasure, but because those who do not
                know how to pursue pleasure rationally encounter consequences
              </p>

              <ul>
                <li>
                  <BsFillCheckCircleFill className="bx-icon" />
                  <p>
                    But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and
                  </p>
                </li>
                <li>
                  <BsFillCheckCircleFill className="bx-icon" />
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </li>
              </ul>
            </div>
            {/* information */}
            <div
              className={
                showInformation ? "information active" : "information "
              }
            >
              <tr>
                <td>Size</td>
                <td>Small, Medium & Large</td>
              </tr>

              <tr>
                <td>Color</td>
                <td>Pink & White</td>
              </tr>
              <tr>
                <td>Rating</td>
                <td>
                  {" "}
                  <BsStarFill className="bx-icon star-fill" />
                  <BsStarFill className="bx-icon star-fill" />
                  <BsStarFill className="bx-icon star-fill" />
                  <BsStarHalf className="bx-icon star-Half" />
                  <BsStar className="bx-icon star" />
                </td>
              </tr>
              <tr>
                <td>Waist</td>
                <td>26 cm</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>40 cm</td>
              </tr>
              <tr>
                <td>Chest</td>
                <td>33 inches</td>
              </tr>
              <tr>
                <td>Fabric</td>
                <td>Cotton, Silk & Synthetic</td>
              </tr>
              <tr>
                <td>Warranty</td>
                <td>3 Months</td>
              </tr>
              <tr>
                <td>Chest</td>
                <td>33 inches</td>
              </tr>
            </div>

            {/* review */}
            <div className={showReview ? "review active" : "review"}>
              <div className="comment">
                <div className="image">
                  <img src="/public/images/clientImage/client1.jpg" alt="" />
                </div>

                <div className="content">
                  <div className="detail-user">
                    <div className="name-and-date">
                      <p className="username">Firstname Lastname</p>
                      <p className="time">
                        <BsClock className="bx-icon" /> March 7, 2013
                      </p>
                    </div>
                    <div className="rating">
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarHalf className="bx-icon star-Half" />
                      <BsStar className="bx-icon star" />
                    </div>
                  </div>

                  <p className="comment-text">
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="comment">
                <div className="image">
                  <img src="/public/images/clientImage/client1.jpg" alt="" />
                </div>

                <div className="content">
                  <div className="detail-user">
                    <div className="name-and-date">
                      <p className="username">Firstname Lastname</p>
                      <p className="time">
                        <BsClock className="bx-icon" /> March 7, 2013
                      </p>
                    </div>
                    <div className="rating">
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarHalf className="bx-icon star-Half" />
                      <BsStar className="bx-icon star" />
                    </div>
                  </div>

                  <p className="comment-text">
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>
              <div className="comment">
                <div className="image">
                  <img src="/public/images/clientImage/client1.jpg" alt="" />
                </div>

                <div className="content">
                  <div className="detail-user">
                    <div className="name-and-date">
                      <p className="username">Firstname Lastname</p>
                      <p className="time">
                        <BsClock className="bx-icon" /> March 7, 2013
                      </p>
                    </div>
                    <div className="rating">
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarFill className="bx-icon star-fill" />
                      <BsStarHalf className="bx-icon star-Half" />
                      <BsStar className="bx-icon star" />
                    </div>
                  </div>

                  <p className="comment-text">
                    There are many variations of passages of Lorem Ipsum
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                </div>
              </div>

              <div className="your-comment">
                <h2>Add A Review</h2>
                <p>Your email address will not be published. Required fields are marked *</p>
                <div className="your-rating">
                <BsStar className="bx-icon star" />
                <BsStar className="bx-icon star" />
                <BsStar className="bx-icon star" />
                <BsStar className="bx-icon star" />
                <BsStar className="bx-icon star" />
                </div>

                <form action="">
                  <textarea name="" placeholder="Your review *" ></textarea>

                  <div className="inputBx">
                    <input type="text" placeholder="Name *"/>
                    <input type="text" placeholder="Email *"/>
                  </div>

                  <input type="checkbox" className="checkToSave"/>
                  <span>Save my name, email, and website in this browser for the next time I comment.</span>

                  <button className="submit">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product slide */}
      <div className="productSlide">
        <div className="container">
          <h2>Related Products</h2>
          <ProductSlide />
        </div>
      </div>

      {/* Footer */}
      <FooterLayout />
    </>
  );
}

export default ViewProduct;
