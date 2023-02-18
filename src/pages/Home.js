import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import { useNavigate } from "react-router-dom";



const Home = () => {
 
    return (

        <div className="bg-gray-50">
            <Header />
            <Slider />
            <Categories />
         



        </div>

    )

}

export default Home