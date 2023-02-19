import React from "react";
import axios from "axios";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";


const Philosophy = () => {

    const [prod4, setProd4] = useState(null)
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/4")
            .then((response) => {
                setProd4(response.data.product)
            })
            .catch(() => { })

    }, [])

    if (prod4 === null) {
        return null
    }

    return (



        <div>
            <Header />

            <Link to={"/home"}><h1 className="font-bold text-lg pl-5 pt-12"><i className="fa-solid fa-chevron-left fa-xl"></i>Philosophy</h1></Link>
            <div className="grid grid-cols-4 gap-4 mt-12">


                {prod4.map((book) => (
                   <Link  to={`/philosophy-details/${book.id}`}>
                    <div className="flex flex-col  border-2 w-78 h-auto py-5 px-6 mx-12 mb-16 overflow-auto bg-violet-50 cursor-pointer hover:bg-violet-100">
                        <img className="w-56 h-64" src={book.cover} />
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


export default Philosophy