import React, { useState } from "react";
import { Link } from "react-router-dom";

// PAGES
import Register from "./Register";

// IMAGES İMPORT
import log from "../images/log.png";
import logo from "../images/logo.png"
import axios from "axios";


const Login = () => {

    const [form,setForm] = useState({
        email:"",
        password:"",
    
    });
    const [remember,setRemember] = useState(false)
console.log(remember)
const handleSubmit = (event) => {
event.preventDefault();
axios.post("https://assign-api.piton.com.tr/api/rest/login",form)
.then((res) => remember ? localStorage.setItem(res.data.action_login.token) : sessionStorage.setItem(res.data.action_login.token))
.catch((err) => console.log(err))
}

    return (

        
        <section className=" bg-gray-50 ">
            <div className="flex flex-row items-center justify-between py-8 mx-auto md:h-screen lg:py-0">

                <img className="h-full w-full" src={log} />

                <div className="mx-40 w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <img className="h-20 w-32 ml-36 mt-4" src={logo} />

                    <div className=" p-6 space-y-4 md:space-y-6 sm:p-8">
                        <p className="text-sm font-light text-gray-500">
                            Welcome back!
                        </p>

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Login to your account
                        </h1>

                        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 " >
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={form.email} onChange={(event)=> setForm({...form, email: event.target.value})} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={form.password} onChange={(event)=> setForm({...form, password: event.target.value})} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>

                            {/* REMEMBER ME */}
                            <div className="flex items-center justify-between ">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5 ">
                                        <input onChange={(event)=> setRemember(event.target.checked)} id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-orange-500 rounded bg-orange-500 focus:ring-3 focus:ring-primary-300 dark:bg-orange-500 dark:border-orange-500 dark:focus:ring-primary-600 dark:ring-offset-orange-500" required="" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-violet-700 dark:text-gray-300 font-medium">Remember me</label>
                                    </div>
                                </div>

                            </div>

                            <button  type="submit" className="w-full text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Sign in</button>
                            <Link to={"/register"} type="button" className="w-full text-white bg-violet-700 hover:bg-violet-500 focus:ring-4 focus:outline-double focus:ring-white font-medium rounded-lg text-sm px-5 py-2.5 text-center  ">Register</Link>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login