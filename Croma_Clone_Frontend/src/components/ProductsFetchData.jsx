import React from "react";
import axios from "axios";

async function productsFetchData(value){
    console.log(value)
    const response = await axios.get(`https://croma-clone-backend-d0pfyh5zg-vijays-projects-f2f3793e.vercel.app/products/${value}`)
    console.log(response.data)
    return response.data
}

export default productsFetchData