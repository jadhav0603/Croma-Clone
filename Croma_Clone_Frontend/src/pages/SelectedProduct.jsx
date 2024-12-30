import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "../css/selectedProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function SelectedProduct() {
  const location = useLocation();
  let data = [location.state];

  console.log("selected product : ", data);

  const [selectVal, setSelectVal] = useState(0);

  const Navigate = useNavigate();

  const handleCheckbox = (val) => {
    setSelectVal(val);
  };

  let containerRef = useRef(null);
  let cartRef = useRef(null);
  let overviewRef = useRef(null);

  function closePopUp() {
    if (cartRef.current && containerRef.current && overviewRef.current) {
      cartRef.current.style.display = "none";
      containerRef.current.style.filter = "none";
      overviewRef.current.style.filter = "none";
    }
  }

  const showPopUp = async (productData) => {
    if (cartRef.current && containerRef.current && overviewRef.current) {
      cartRef.current.style.display = "flex";
      cartRef.current.style.position = "sticky";
      cartRef.current.style.zIndex = "2000";
      containerRef.current.style.filter = "blur(5px)";
      overviewRef.current.style.filter = "blur(5px)";

      await postData(productData)
    }
  };

  async function postData(productData){
    if (productData && Object.keys(productData).length > 0) {
      try {
        const response = await axios.post(
          "http://localhost:5001/products/cart",
          productData
        );

        if (response) {
          console.log("response = ", response);
        } else {
          console.log("response not ok", response);
        }
      } catch (error) {
        console.error("Error posting data to cart:", error);
      }
    }
  }

  const handleBuy = async(ele)=>{
    await postData(ele)
    Navigate('/Carts')
  }


  function handleCartPage(){
    console.log("run handle cart page")
    Navigate('/Carts')
  }

  return (
    <div>
      {data.map((ele, i) => (
        <div className="main" key={i}>
          <p>Products &gt; {ele.keyFeatures.Display}</p>

          <div className="container" ref={containerRef}>
            <div className="small_img">
              <img className="smallImg" src={ele.image_url} alt={ele.product_name} />
            </div>
            <div className="leftDiv">
              <img src={ele.image_url} alt={ele.product_name} />
              <div>
                <div>
                  <input className="checkBox" type="checkbox" /> Compare
                </div>
                <div style={{ justifyContent: "end" }}>
                  <FontAwesomeIcon icon={faStore} /> Connect to Store
                </div>
              </div>
            </div>

            <div className="rightDiv">
              <h3>{ele.product_name}</h3>
              <div className="offers">
                <span>Extra 1000 Bank Discount</span>
                <span>Limited Time Offer</span>
                <span>no cost EMI</span>
              </div>
              <p className="discount">{ele.discount}</p>
              <h1 className="price">
                <span>{ele.price}</span>
              </h1>
              <p className="originalPrice">{ele.original_price}</p>

              <div className="exchangeContainer">
                <div>
                  <input
                    type="radio"
                    value={4000}
                    checked={selectVal === 4000}
                    onChange={() => handleCheckbox(4000)}
                  />
                  With Exchange{ele.exchange_benefit} (additional RS.500 exchange bonus available.)
                </div>
                <button className="chooseBtn">Choose TV for Exchange</button>
                <p>How does exchange work?</p>

                <div>
                  <input
                    type="radio"
                    value={0}
                    checked={selectVal === 0}
                    onChange={() => handleCheckbox(0)}
                  />
                  Without Exchange
                </div>
              </div>

              <div className="keyFeatures">
                <b>Product Dimensions</b>
                <ul>
                  {Object.entries(ele.productDimensions).map(([key, value], i) => (
                    <li key={i}>
                      <strong>{key}</strong>: {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="keyFeatures">
                <b>Key Features</b>
                <ul>
                  {Object.entries(ele.keyFeatures).map(([key, value], i) => (
                    <li key={i}>
                      <strong>{key}</strong>: {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="keyFeatures">
                <b>Specification</b>
                <ul>
                  {Object.entries(ele.specification).map(([key, value], i) => (
                    <li key={i}>
                      <strong>{key}</strong>: {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="keyFeatures">
                <b>Manufacturer Details</b>
                <ul>
                  {Object.entries(ele.manufacturerDetails).map(([key, value], i) => (
                    <li key={i}>
                      <strong>{key}</strong>: {value}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="keyFeatures">
                <b>Product Details</b>
                <ul>
                  {Object.entries(ele.productDetails).map(([key, value], i) => (
                    <li key={i}>
                      <strong>{key}</strong>: {value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overview" ref={overviewRef}>
            <h3>Overview</h3>
            <p>{ele.keyFeatures.Display || "Not Available"}</p>
            <p>{ele.overview || "Not Available"}</p>
            <p>{ele.overview || "Not Available"}</p>
            <p>{ele.overview || "Not Available"}</p>
            <p>
              functional {ele.keyFeatures.OperatingSystem || "Not Available"}
            </p>
            <p>
            <p>{ele.overview || "Not Available"}</p>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              soluta tempore placeat harum reiciendis vitae!
              <p>{ele.overview || "Not Available"}</p>
            </p>
          </div>

          <div className="buyNowContainer">
            <div className="buyInfo">
              <img src={ele.image_url} alt="product" />
              <div>
                <p>{ele.product_name}</p>
                <p>{ele.price}</p>
              </div>
            </div>

            <div>
              <button className="chooseBtn" onClick={()=>handleBuy(ele)}>Buy Now</button>
              <button
                className="chooseBtn"
                onClick={() => {
                  showPopUp(ele);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>

          <div className="addCart" ref={cartRef}>
            <div className="cardAdded">
              <div>
                <FontAwesomeIcon className="checkIcon" icon={faCheck} />
                <strong>Add Items In Cart</strong>
              </div>
              <FontAwesomeIcon
                className="crossIcon"
                icon={faCircleXmark}
                onClick={closePopUp}
              />
            </div>

            <div className="buyInfos">
              <img className="productImg" src={ele.image_url} alt="product" />
              <p>{ele.product_name}</p>
              <strong>{ele.price}</strong>
              <p className="originalPrice">{ele.original_price}</p>
            </div>

            <div className="proceedBtn">
              <button className="chooseBtn" onClick={()=>handleCartPage()}>Proceed to Cart</button>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

export default SelectedProduct;
