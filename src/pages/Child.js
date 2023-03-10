import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Child = () => {
    const [isAuth,setIsAuth] = useState ()
    const navigate = useNavigate()

    useEffect(()=>{
       const kalici = localStorage.getItem("token")
       const gecici =  sessionStorage.getItem("token")
        
        if(!kalici && !gecici){
            navigate("/register")
         }
    },[])

    const [prod3, setProd3] = useState(null)
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/3")
            .then((response) => {
                console.log(response.data.product)
                setProd3(response.data.product)
            })
            .catch(() => { })

    }, [])

    if (prod3 === null) {
        return null
    }

    return (



        <div>
            <Header />

            <Link to={"/home"}><h1 className="font-bold text-lg pl-5 pt-12"><i className="fa-solid fa-chevron-left fa-xl"></i>Children</h1></Link>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">


                {prod3.map((book) => (
                    <Link to={`/child-details/${book.id}`}>
                        <div className="flex flex-col  border-2 w-78 h-auto py-5 px-6 mx-12 mb-16 overflow-auto bg-violet-50 cursor-pointer hover:bg-violet-100">
                            <img className="w-56 h-64" src={`/images/${book.cover}`} />
                            <div className="flex flex-row justify-between">
                                <div className="mt-4">
                                    <h1 className="font-bold text-lg">{book.name}</h1>
                                    <p className="font-light ">{book.author}</p>
                                </div>
                                <h1 className="mt-12 font-semibold text-xl text-violet-500">{book.price}$</h1>
                            </div>
                        </div>
                    </Link>
                ))}


            </div>
        </div>
    )
}


export default Child