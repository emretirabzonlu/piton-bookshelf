import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";



// IMAGES İMPORT
import log from "../images/log.png";
import logo from "../images/logo.png"






const Register = () => {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        email: "",
        name: "",
        password: "",
    });


    const handleSubmit = (event) => {
        event.preventDefault();
        
        axios.post("https://assign-api.piton.com.tr/api/rest/register", form)
            .then((res) => {


                const loginOption = {
                    email: form.email,
                    password: form.password,
                }

                axios.post("https://assign-api.piton.com.tr/api/rest/login", loginOption)
                    .then((loginRes) => 
                  {  sessionStorage.setItem("token", loginRes.data.action_login.token)
                    navigate("/home")}
                    )
            })
            .catch((err) => console.log(err))
    }

    return (
        <section className=" bg-gray-50  ">
            <div className="lg:flex lg:flex-row lg:items-center lg:justify-between  lg:mx-auto md:h-screen lg:py-0 ">

                <img className="lg:h-full lg:w-full " src={log} />

                <div className="flex flex-col items-center xl:mx-40 w-full bg-white rounded-lg shadow dark:border md:mt-0  xl:p-0 dark:bg-gray-800 dark:border-gray-700 justify-center" >
                    <img className="h-20 w-32  mt-8 " src={logo} />

                    <div className=" p-6 space-y-4 md:space-y-6 sm:p-8  ">
                        <p className="text-lg font-light text-gray-500">
                            Hello!
                        </p>

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create account
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 w-96">
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
                                <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} type="text" name="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="username" required="" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>


                            <button type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Register</button>
                            <Link to={"/"} type="button" className="w-full text-white bg-violet-700 hover:bg-violet-500 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Login</Link>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register