import React from "react";
import img1 from '../assets/Images/Home/bank_offers/img1.webp';
import img2 from "../assets/Images/Home/bank_offers/img2.webp";
import img3 from "../assets/Images/Home/bank_offers/img3.webp";
import img4 from "../assets/Images/Home/bank_offers/img4.webp";
import '../css/bankOffer.css'
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react'



function BankOffer() {
    const Navigate = useNavigate()

    useEffect(()=>{
        window.scrollTo(0,0)
      },[])

    function handleBankOffers(){
        console.log("navigate bank offers page")
        Navigate("/BankOffersPage")
    }

    return(
        <div className="bankContainer">
            <h2 style={{ width: '75vw', textAlign: 'left', color: 'white' }}>Exciting Bank Offers For You</h2>
            <div className="bankOffers homePageCommonCss">
                <img src={img1} onClick={handleBankOffers} alt="bank offer image" />
                <img src={img2} onClick={handleBankOffers} alt="bank offer image" />
                <img src={img3} onClick={handleBankOffers} alt="bank offer image" />
                <img src={img4} onClick={handleBankOffers} alt="bank offer image" />
            </div>
        </div>
    )
}

export default BankOffer;