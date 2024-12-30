import React from "react";
import img1 from "../assets/images//Home/limited_times_offers/img1.webp"
import img2 from "../assets/images//Home/limited_times_offers/img2.webp"
import img3 from "../assets/images//Home/limited_times_offers/img3.webp"
import productsData from "../components/ProductsFetchData"
import { useNavigate } from "react-router-dom";

function LimitedTimeDeals() {
    const Navigate = useNavigate()

    const fetchData = async(value) =>{
        let data = await productsData(value)
        Navigate('/FetchedResults', {state:{data,value}})
    }

    return(
        <div>
            <h2 style={{margin:'5% 12%', color:'white'}}>Limited Time Deals</h2>
            <div className="limitedOffers homePageCommonCss" style={{width:'97vw', margin:'0'}}>
                <img src={img1} onClick={()=>fetchData("TV")} alt="limited offer image" style={{width: "37vw"}} />
                <img src={img2} onClick={()=>fetchData("homeAppliances")} alt="limited offer image" style={{width: "37vw"}} />
                <img src={img3} onClick={()=>fetchData("washingMachines")} alt="limited offer image" style={{width: "75vw"}} />
            </div>
        </div>
    )
}


export default LimitedTimeDeals