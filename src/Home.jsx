import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
const Home = () => {
    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="container">
                <div className="columns-3">
                    <img src="assets/1.png" alt="" />
                    <img src="assets/1.png" alt="" />
                    <img src="assets/1.png" alt="" />
                </div>

            </div>
            {/* <Slider /> */}

        </div>
    )
}

export default Home