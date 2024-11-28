import React from "react";
import image1 from '../../assets/m1.png';
import image2 from '../../assets/m2.png'
import image3 from '../../assets/m3.png'
import image4 from '../../assets/m4.png'
import image5 from '../../assets/m5.png'

const Banner = () => {
    return (
        <div className="banner-image">
            <div className="heading">
                <h1 >
                   <span className="bannertext">New</span> <br />
                   <span className="textbolt"> FASHION <br />
                    COLLECTION </span>
                </h1>
            </div>
            <div>
                <button className="banner-btn"> Shop Now</button>
            </div>

            <div>
                <img src={image1} className="backimgone" />
            </div>
            <div>
                <img src={image2} className="backimgtwo" />
            </div>
            <div>
                <img src={image3} className="backimgthree" />
            </div>

            <div>
                <img src={image4} className="backimgfour" />
            </div>

            <div>
                <img src={image5} className="backimgfive" />
            </div>


        </div>
    )
}
export default Banner;