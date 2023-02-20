import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";




const ChildDetails = () => {
    const [isAuth,setIsAuth] = useState ()
    const navigate = useNavigate()

    useEffect(()=>{
       const kalici = localStorage.getItem("token")
       const gecici =  sessionStorage.getItem("token")
        
        if(!kalici && !gecici){
            navigate("/register")
         }
    },[])


    const { booksId } = useParams()

    const [book, setBook] = useState(null)

    useEffect(() => {
        axios.get(`https://assign-api.piton.com.tr/api/rest/products/${booksId <= 8 ? "1" : booksId <= 11 ? "2" : booksId <= 14 ? "3" : "4"}`)
            .then((response) => {
                // console.log("BURASI",response.data)
                setBook(response.data.product.filter((book) => book.id == booksId))
            })
            .catch(() => { })

    }, [])

    if (book === null) {
        return null
    }
    console.log("verii", book)

    return (
        <div>
            <Header />

            <Link to={"/children"}><h1 className="font-bold text-lg pl-5 pt-12"><i className="fa-solid fa-chevron-left fa-xl"></i> Book Details</h1></Link>


            {book.map((book) => (
                <div className="flex justify-around mx-24 my-10">
                    <div style={{maxWidth:"450px"}} className=" bg-violet-50 mr-8 w-full h-full ">
                        <img className="w-full h-full px-10 py-12 overflow-auto object-contain" src={`/images/${book.cover}`} />
                    </div>

                    <div className="flex flex-col mt-1 ml-10">
                        <div className="mb-12">
                            <h1 className="font-semibold text-4xl mb-3 capitalize">{book.name}</h1>
                            <h1 className="text-slate-500 font-semibold text-3xl mb-5 ">{book.author}</h1>
                        </div>

                        <div>
                            <h1 className="font-semibold mb-3 text-2xl">Summary</h1>
                            <p className="font-normal text-gray-400">{book.description}</p>
                        </div>
                    </div>
                     <div className="flex flex-col justify-between">
                        <button><i className="fa-regular fa-heart  bg-violet-100 rounded-xl p-1"></i></button>
                        <button className="flex justify-between items-center w-72 h-10 bg-orange-600 px-4 text-white hover:bg-orange-500">
                            <h1 className="font-semibold text-lg ">{book.price}$</h1>
                            <p className="font-semibold ">Buy Now</p>

                        </button>
                    </div>

                </div>
            ))}
        </div>

    )
}

export default ChildDetails