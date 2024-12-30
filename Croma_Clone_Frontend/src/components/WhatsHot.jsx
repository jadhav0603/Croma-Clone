import React from "react";
import img1 from "../assets/images/Home/exclusive_hot_offers/img1.webp"
import img2 from "../assets/images/Home/exclusive_hot_offers/img2.webp"
import img3 from "../assets/images/Home/exclusive_hot_offers/img3.webp"
import img4 from "../assets/images/Home/exclusive_hot_offers/img4.webp"
import { useNavigate } from "react-router-dom";
import productsData from "../components/ProductsFetchData"



function WhatsHot(){
    const Navigate = useNavigate()

    const fetchData = async(value) =>{
        // console.log(value)
        let data = await productsData(value)
        // console.log("fetechedResult - ", data)
        // fetchedResults(data)
        Navigate('/FetchedResults', {state:{data,value}})
    }

    const h2="What's Hot"
    return(
        <div>
             <h2 style={{margin:'5% 12%', color:'white'}}>
                {h2} </h2>
            <div className="whatsHot homePageCommonCss" style={{width:'97vw', margin:'0'}} >
                <img src={img1} onClick={()=>fetchData("TV")} alt="exclusive offers image" />
                <img src={img2} onClick={()=>fetchData("laptops")} alt="exclusive offers image" />
                <img src={img3} onClick={()=>fetchData("cameras")} alt="exclusive offers image" />
                <img src={img4} onClick={()=>fetchData("chargers")} alt="exclusive offers image" />
            </div>
        </div>
    )
}

export default WhatsHot