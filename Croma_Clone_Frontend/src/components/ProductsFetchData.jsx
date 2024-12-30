import React from "react";
import axios from "axios";

async function productsFetchData(value){
    console.log(value)
    const response = await axios.get(`http://localhost:5001/products/${value}`)
    console.log(response.data)
    return response.data
}

export default productsFetchData