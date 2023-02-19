import React from "react";

// IMAGES 
import dune from "../images/asd.jpg"
import bin984 from "../images/1984.jpg"
import ikigai from "../images/IKIGAI.jpg"
import tutunamayanlar from "../images/tutunamayanlar.jpg"
import romeo from "../images/romeo.jpg"
import olaganustu from "../images/olaganustu.jpg"
import gencwerther from "../images/gencwerther.jpg"
import morbirfil from "../images/morbirfil.jpg"
import alevsacli from "../images/alevsacli.jpg"
import melodi from "../images/melodi.jpg"
import meditasyon from "../images/meditasyon.jpg"
import metafizik from "../images/metafizik.jpg"
import mutluolma from "../images/mutluolma.jpg"




import { Link } from "react-router-dom";


const Categories = () => {


    return (
        <div className=" pb-32 flex flex-col">
            {/* BEST SELLER */}
            <div className="mx-20 ">
                <div className="flex font-bold py-16 justify-between">
                    <h1 className="text-4xl ">Best Seller</h1>
                    <Link to={"/best-seller"} className="mr-9 mt-9 text-orange-600">View All</Link>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="ob w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={dune} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Dune</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Frank Herbert.</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">87.75$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={bin984} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">1984</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">George Orwell</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">35.75$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={ikigai} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">İkigai</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Hector Garcia</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">36$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={tutunamayanlar} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tutunamayanlar</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Oğuz Atay</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">65.9$</p>
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
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={romeo} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white ">Romeo ve Juliet</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">William Shakespeare</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">65.9$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={olaganustu} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Olağanüstü Bir Gece</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Stefan Zweig</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">40.5$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={gencwerther} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Genç Werther'in Acıları</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Johann Wolfgang Von Goethe</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">60.5$</p>
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
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={morbirfil} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mor Bir Fil Gördüm Sanki</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Varol Yaşaroğlu</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">85.7$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={alevsacli} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Alev Saçlı Çocuk</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Christine Nöstlinger</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">45.5$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={melodi} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Melodi</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Anıl Basılı</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">25.9$</p>
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
                <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-12">

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={meditasyon} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Meditasyonun Temelleri</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Bora Ercan</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">25.9$</p>
                        </div>
                    </div>

                    <div className=" mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={metafizik} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Metafizik</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aristoteles</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">33.9$</p>
                        </div>
                    </div>

                    <div className="mx-4 flex flex-col items-center bg-violet-50 border border-gray-200 rounded-lg shadow xl:flex-row xl:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={mutluolma} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mutlu Olma Sanatı</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Aristo Schopenhauer</p>
                            <p className="font-bold text-2xl mt-4 text-violet-500">75.9$</p>
                        </div>
                    </div>

                 
                </div>
            </div>

        </div>



    )
}

export default Categories