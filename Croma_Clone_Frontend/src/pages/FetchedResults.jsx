import React from "react";
import Cards from "../components/Cards";
import { useLocation } from "react-router-dom";
import "../css/fetchedResult.css"
import Footer from '../components/Footer'



function FetchedResults(){
    const location = useLocation()
    const {data,value} = location.state || {}

    console.log("feteched Result : ", data)
    console.log("feteched Result : ", value)

    return(
        <>
        <div className="resultDiv">
            <div className="heading">
                <p>Campaign &gt; {value} </p>
                <h1>Exclusive Offers &gt; {value} </h1>
            </div>

            {/* <FilterPanel /> */}

            <div>
                <Cards response={data}/>
            </div>

        </div>

            <Footer />
        </>
    )

}

export default FetchedResults