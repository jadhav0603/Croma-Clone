import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import "../css/cart(basket).css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPercent,
    faGreaterThan,
    faIndianRupeeSign,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { loginContext } from "../components/LoginContext";


function Carts() {
    const [cartData, setCartData] = useState([]);
    const {isLogin} = useContext(loginContext)

    const Navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("http://localhost:5001/basket/carts");
                console.log("fetched carts data : ", response.data);
                setCartData(response.data);
            } catch (error) {
                console.log("carts Error = ", error);
            }
        }

        fetchData();
    }, []);

    const handleDelete = async(ele)=>{
        try {
            const response = await axios.delete(`http://localhost:5001/basket/delete/${ele._id}`);
            console.log("item deleted successfully :", response.data)
            setCartData((prev) => prev.filter((item) => item._id !== ele._id))
        } catch (error) {
            console.log("delete error : ",error)
        }
    }

    const handleCheckOut= async()=>{
        console.log(isLogin)
        if(isLogin){
            Navigate('/payment')
            try {
                const response = await axios.delete(`http://localhost:5001/basket/deleteAll`);
                // console.log("item deleted successfully :", response.data)
                setCartData(response.data)
            } catch (error) {
                console.log("delete error : ",error)
            }
        }
        else{
            alert("Go and Login First")
            // Navigate('/loginModal', true)
        }
    }

    return (
        <div>
        <div className="cartContainer">
            <div className="leftContainer">
                <h3>YOUR CART</h3>

                <div className="couponDiv">
                    <div className="couponLeftDiv">
                        <FontAwesomeIcon className="icon" icon={faPercent} />
                        Apply Coupon
                    </div>
                    <div className="couponRightDiv">
                        <FontAwesomeIcon className="icon" icon={faGreaterThan} />
                    </div>
                </div>

                {cartData?.length > 0 ? (
                    cartData.map((ele, i) => (
                        <div key={i} className="cartCard">
                            <img src={ele.image_url} alt={`Cart item ${i + 1}`} />
                            <div className="cartInfo">
                                <h4>{ele.product_name}</h4>
                                <div className="starIcon">
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                    <FontAwesomeIcon icon={faStar} />
                                </div>
                                <p>{ele.delivery}</p>
                                <button className="removeBtn" onClick={()=>handleDelete(ele)}>Remove</button>
                            </div>

                            <div className="priceDiv">
                                <strong className="cartPrice">{ele.price}</strong> <br />
                                <span className="cartOriginalPrice"> MRP {ele.original_price}</span>{" "}
                                <br />
                                <span className="emi">
                                    <b>1412/mo*</b><br/>
                                    <span style={{fontSize:"0.8vw", color:"green"}}> <u> EMI Options </u> </span>
                                </span>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty</p>
                )}
            </div>

            <div className="rightContainer">
                <h2>Order Summary ({cartData?.length || 0} Items) </h2>
                <div>
                    <p>Original Price</p>
                    <p>
                        <FontAwesomeIcon icon={faIndianRupeeSign} /> 0.00
                    </p>
                </div>
                <div>
                    <p>Total</p>
                    <p>
                        <FontAwesomeIcon icon={faIndianRupeeSign} /> 0.00
                    </p>
                </div>
                <button className="checkOut" onClick={()=>handleCheckOut()}> Checkout</button>
            </div>
        </div>
        </div>
    );
}

export default Carts;
