import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/cards.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";



function Cards({ response }) {
    console.log("card data = ", response)

    const Navigate = useNavigate()

    function handleCard(ele){
        // console.log("selected product =",ele)
        Navigate("/SelectedProduct", {state:ele})
    }

    return (
        <div className="cardsContainer">
            {response && response.map((ele, i) => (
                <div key={i} className="cardDiv">
                    <div className="imgDiv" onClick={()=>handleCard(ele)}>
                        <img src={ele.image_url} alt={ele.product_name}/>
                    </div>
                    <b onClick={()=>handleCard(ele)}>{ele.product_name}</b>
                    <b className="discount">{ele.discount}</b>
                    <h3>{ele.price}</h3>
                    <h6>{ele.original_price}</h6>
                    <p className="shipping"><FontAwesomeIcon icon={faTruck} /> {ele.delivery} </p>
                    <p className="warranty"> 1 Year Warranty</p>
                </div>
            ))}
        </div>
    );
}


export default Cards;