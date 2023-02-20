import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BestSeller = () => {
    const [isAuth,setIsAuth] = useState ()
    const navigate = useNavigate()

    useEffect(()=>{
       const kalici = localStorage.getItem("token")
       const gecici =  sessionStorage.getItem("token")
        
        if(!kalici && !gecici){
            navigate("/register")
         }
    },[])

    const [prod1, setProd1] = useState(null)
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/1")
            .then((response) => {
                setProd1(response.data.product)
                console.log(response.data.product)
            })
            .catch(() => { })

    }, [])



    if (prod1 === null) {
        return null
    }
   
    return (

        <div>
            <Header />

            <Link to={"/home"}><h1 className="font-bold text-lg pl-5 pt-12"><i className="fa-solid fa-chevron-left fa-xl"></i> Best Seller</h1></Link>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                {prod1.map((user, userIndex) => (
                    <Link  key={userIndex} to={`/bestseller-details/${user.id}`}>
                        <div className="flex flex-col  border-2 w-82 h-96 py-5 px-6 mx-12 mb-16 overflow-hidden bg-violet-50 cursor-pointer hover:bg-violet-100">
                            <img className="w-56 h-64 justify-center items-center" src={`/images/${user.cover}` } />
                            <div className="flex flex-row justify-between">
                                <div className="mt-4">
                                    <h1 className="font-bold text-lg capitalize">{user.name}</h1>
                                    <p className="font-light ">{user.author}</p>
                                </div>
                                <h1 className="mt-12 font-semibold text-xl text-violet-500">{user.price}$</h1>
                            </div>
                        </div>
                    </Link>
                ))}

            </div>
        </div>
    )
}


export default BestSeller