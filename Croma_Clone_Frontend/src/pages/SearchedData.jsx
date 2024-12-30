import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import "../css/searchedDataPage.css"

function SearchedData(){
    const location = useLocation();
    const {data} = location.state || {}

    console.log("searchPage data = ", data[0].data)
    return(
        <>
        <div className="searchContainer">
            <h1>welcome to searched page</h1>
            <Cards response={data[0].data} />
        </div>
            <Footer />
        </>
    )
}

export default SearchedData