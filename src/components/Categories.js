import React from "react";
import { useState, useEffect } from "react";
import book from "../images/book.jpg"
import axios from "axios";

import { Link } from "react-router-dom";


const Categories = () => {


    return (
        <div className=" pb-32">
            {/* BEST SELLER */}
            <div className="mx-20 ">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Best Seller</h1>
                    <Link to={"/best-seller"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="flex">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* CLASSİCS */}
            <div className="mx-20">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Classics</h1>
                    <Link to={"/classics"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="flex">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* CHILDREN */}
            <div className="mx-20">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Children</h1>
                    <Link to={"/children"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="flex">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* PHILOSOPHY */}
            <div className="mx-20">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Philosophy</h1>
                    <Link to={"/philosophy"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="flex">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={book} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35$</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>



    )
}

export default Categories