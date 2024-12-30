// eslint-disable-next-line no-unused-vars
import React from "react";
import Slider from "../components/Slider"
import BankOffer from "../components/BankOffers";
import WhatsHot from "../components/WhatsHot";
import LimitedTimeDeals from "../components/LimitedTimeDeals";
import Brands from "../components/Brands";
import Footer from '../components/Footer'



function Home(){

    return(
        
        <div>
            <Slider />
            <BankOffer/>
            <WhatsHot/>
            <LimitedTimeDeals/>
            <Brands/>
            <Footer />
        </div>
    )
}

export default Home;