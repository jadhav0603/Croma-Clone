// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import '../css/slider.css';
import img1 from "/Home/home_page_slider_img/img1.webp"
import img2 from "/Home/home_page_slider_img/img2.webp"
import img3 from "/Home/home_page_slider_img/img3.webp"
import img4 from "/Home/home_page_slider_img/img4.webp"
// import img5 from "/Home/home_page_slider_img/img5.webp"
import img6 from "/Home/home_page_slider_img/img6.webp"
import img7 from "/Home/home_page_slider_img/img7.webp"
import img9 from "/Home/home_page_slider_img/img9.webp"
import fetchData from "../components/ProductsFetchData"
import { useNavigate } from "react-router-dom";


function Slider() {

  const Navigate = useNavigate()

  const imgArray = [
    // '../images/Home/home_page_slider_img/img1.webp',
    // '../images/Home/home_page_slider_img/img2.jpeg',
    // '../images/Home/home_page_slider_img/img3.jpeg',
    // '../images/Home/home_page_slider_img/img4.jpeg',
    // '../images/Home/home_page_slider_img/img5.jpeg',
    // '../images/Home/home_page_slider_img/img6.jpeg',
    // '../images/Home/home_page_slider_img/img7.jpeg'
    img1,img2,img3,img4,img6,img7,img9
  ];

  const imgFetchData = [
    "TV",
    "mobiles",
    "washingMachines", 
    "homeAppliances",
    "laptops",
    "homeAppliances",
    "cameras",]


  const [index, setIndex] = useState(0); 

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % imgArray.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, [imgArray.length]);

  const currentSlide = (n) => {
    setIndex(n);
  };

  const fetchImgData = async (n) =>{
    const data = await fetchData(imgFetchData[n])
    console.log("image fetch : ",data)
    Navigate('/FetchedResults', {state:{data}})
  }

  return (
    <div id="slider">
      <div className="slider">
        <img 
          src={imgArray[index]} 
          alt={`Slide ${index + 1}`}
          onClick={()=> fetchImgData(index)}
        />
      </div>

      <div className="dots">
        {imgArray.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? 'active' : ''}`}
            onClick={() => currentSlide(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
