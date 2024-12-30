import React from "react"
import '../css/footer.css'

function Footer(){

    return(
        <div className="bottom" style={{width:'98.5vw'}}>
            <div className="footer">
                <div className="footerDivOne" style={{display: "flex", flexWrap:"wrap"}}>
                    <h5>CONNECT WITH US</h5>
                    <input type="text" placeholder="Enter Email ID" style={{padding:'10px', borderRadius:'5px', width:"17vw"}} /><br />
                    <div className="contactIcons">
                        <i className="fa-brands fa-youtube"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-twitter"></i>
                    </div>
                    <span style={{padding: "30px 0px"}}>© Copyright 2024 Vijay Jadhav. All rights reserved</span>
                </div>

                <hr />

                <div>
                    <h5>USEFUL LINKS</h5>
                    <div style={{display: "flex", flexWrap:"wrap"}} className="footerList">
                        <ul style={{textDecoration: "none", listStyle: "none"}}>
                            <li>About Croma</li>
                            <li>Help And Support</li>
                            <li>FAQs</li>
                            <li>Buying Guide</li>
                            <li>Return Policy</li>
                            <li>B2B Orders</li>
                            <li>Store Locator</li>
                            <li>E-Waste</li>
                            <li>Franchise Opportunity</li>
                        </ul>
                        <ul style={{textDecoration: "none", listStyle: "none"}}>
                            <li>Site Map</li>
                            <li>Careers At Croma</li>
                            <li>Terms of Use</li>
                            <li>Disclaimer</li>
                            <li>Privacy Policy</li>
                            <li>Unboxed</li>
                            <li>Gift Card</li>
                            <li>Croma E-Star</li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div>
                    <h5>Products</h5>
                    <div style={{display: "flex" ,flexWrap:"wrap"}} className="footerList">
                        <ul style={{textDecoration: "none", listStyle:"none"}}>
                            <li>Televisions & Accessories</li>
                            <li>Home Appliances</li>
                            <li>Phones & Wearables</li>
                            <li>Computers & Tablets</li>
                            <li>Kitchen Appliances</li>
                            <li>Audio & Video</li>
                            <li>Health & Fitness</li>
                        </ul>
                        <ul style={{textDecoration:"none" ,listStyle:"none"}}>
                            <li>Grooming & Personal Care</li>
                            <li>Cameras & Accessories</li>
                            <li>Smart Devices</li>
                            <li>Gaming</li>
                            <li>Accessories</li>
                            <li>Top Brands</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer