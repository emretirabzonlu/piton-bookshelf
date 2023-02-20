import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";




const Categories = () => {
    const [prod1, setProd1] = useState(null)
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/1")
            .then((response) => {
                setProd1(response.data.product)
            })
            .catch(() => { })

    }, [])

    const [prod2, setProd2] = useState(null)
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/2")
            .then((response) => {
                setProd2(response.data.product)
            })
            .catch(() => { })

    }, [])

    const [prod3, setProd3] = useState(null)
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/3")
            .then((response) => {
                setProd3(response.data.product)
            })
            .catch(() => { })

    }, [])

    const [prod4, setProd4] = useState(null)
    useEffect(() => {
        axios.get("https://assign-api.piton.com.tr/api/rest/products/4")
            .then((response) => {
                setProd4(response.data.product)
            })
            .catch(() => { })

    }, [])

    if (prod1 === null) {
        return null
    }
    if (prod2 === null) {
        return null
    }
    if (prod3 === null) {
        return null
    }
    if (prod4 === null) {
        return null
    }
    return (
        <div className=" pb-32 flex flex-col">
            {/* BEST SELLER */}
            <div className="mx-20 ">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Best Seller</h1>
                    <Link to={"/best-seller"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">


                    {prod1.slice(0, 4).map((book) => (
                        <Link to={`/bestseller-details/${book.id}`}>
                            <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`/images/${book.cover}`} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white capitalize">{book.name}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
                                    <p className="font-bold text-2xl mt-4 text-violet-500">{book.price}$</p>
                                </div>
                            </div>

                        </Link>
                    ))}


                </div>

            </div>
            {/* CLASSİCS */}
            <div className="mx-20">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Classics</h1>
                    <Link to={"/classics"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                    {prod2.map((book) => (
                        <Link to={`/classics-details/${book.id}`}>
                            <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`/images/${book.cover}`} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">{book.name}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
                                    <p className="font-bold text-2xl mt-4 text-violet-500">{book.price}$</p>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>
            {/* CHILDREN */}
            <div className="mx-20">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Children</h1>
                    <Link to={"/children"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                    {prod3.map((book) => (
                        <Link to={`/child-details/${book.id}`}>
                            <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`/images/${book.cover}`} alt="" />
                                <div className="flex flex-col justify-between p-4 leading-normal">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.name}</h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
                                    <p className="font-bold text-2xl mt-4 text-violet-500">{book.price}$</p>
                                </div>
                            </div>
                        </Link>
                    ))}

                </div>
            </div>

            {/* PHILOSOPHY */}
            <div className="mx-20">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Philosophy</h1>
                    <Link to={"/philosophy"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                    {prod4.map((book)=>(
                           <Link to={`/philosophy-details/${book.id}`}>
                           <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                               <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={`/images/${book.cover}`} alt="" />
                               <div className="flex flex-col justify-between p-4 leading-normal">
                                   <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{book.name}</h5>
                                   <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{book.author}</p>
                                   <p className="font-bold text-2xl mt-4 text-violet-500">{book.price}$</p>
                               </div>
                           </div>
                       </Link>
                    ))}

                </div>
            </div>

        </div>



    )
}

export default Categories