import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Navbar from "../Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <div>
                <Navbar />
                <Banner />

            </div>
            <div>
                <Category />
            </div>


        </div>
    )
}

export default Home;