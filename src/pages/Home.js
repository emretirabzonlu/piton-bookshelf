import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import { useNavigate } from "react-router-dom";



const Home = () => {
    const [isAuth,setIsAuth] = useState ()
    const navigate = useNavigate()

    useEffect(()=>{
       const kalici = localStorage.getItem("token")
       const gecici =  sessionStorage.getItem("token")
        
        if(!kalici && !gecici){
            navigate("/register")
         }
    },[])

    
   

    return (

        <div className="bg-gray-50">
            <Header />
            <Slider />
            <Categories />
         



        </div>

    )

}

export default Home