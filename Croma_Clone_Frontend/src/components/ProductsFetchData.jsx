import React from "react";
import axios from "axios";

async function productsFetchData(value){
    console.log(value)
    const response = await axios.get(`https://croma-clone-backend-19i6.onrender.com/products/${value}`)
    console.log(response.data)
    return response.data
}

export default productsFetchData