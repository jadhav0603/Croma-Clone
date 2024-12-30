import React from "react";
import '../css/brand.css'
import img1 from "/Home/why_croma/img1.webp"

import brand1 from "/Home/why_croma/brands/img1.webp"
import brand2 from "/Home/why_croma/brands/img2.webp"
import brand3 from "/Home/why_croma/brands/img3.webp"
import brand4 from "/Home/why_croma/brands/img4.webp"
import brand5 from "/Home/why_croma/brands/img5.webp"
import brand6 from "/Home/why_croma/brands/img6.webp"
import brand7 from "/Home/why_croma/brands/img7.webp"
import brand8 from "/Home/why_croma/brands/img8.webp"
import brand9 from "/Home/why_croma/brands/img9.webp"

function Brands() {

    return (
        <div style={{margin:'5% 12%'}}>
            <h2 style={{ width: '75vw', alignItems: 'left', color: 'white'}}>Why Croma? </h2>
            <div className="brands " style={{ display: 'flex', flexDirection: 'column',alignItems:'center' }}>
                <div className="homePageCommonCss" >
                    <img src={img1} style={{width:'75vw',padding:'0'}} alt="croma info image" />
                </div>

                <div className="brands homePageCommonCss">
                    <button className="brandsKey" >
                        <i className="fa-solid fa-less-than" style={{color:'white'}}></i>
                    </button>
                    <img src={brand1} alt="brand1 image" />
                    <img src={brand2} alt="brand2 image" />
                    <img src={brand3} alt="brand image" />
                    <img src={brand4} alt="brand image" />
                    <img src={brand5} alt="brand image" />
                    <img src={brand6} alt="brand image" />
                    <img src={brand7} alt="brand image" />
                    <img src={brand8} alt="brand image" />
                    <img src={brand9} alt="brand image" />
                    <button className="brandsKey">
                        <i className="fa-solid fa-greater-than"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Brands