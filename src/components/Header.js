import React from "react"
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Header = ()=>{

    return(
        
        <nav className="py-3 border-b-2">
            <div className="flex justify-between px-5">
                <Link to={"/home"}><img className="h-10 mt-3 cursor-pointer" src={logo} /></Link>
                <div className="my-4 flex">
                    <input className="w-96 block mx-5 p-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-violet-50 " type="text" placeholder="Search.." />
                    <button><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
                <ul className="flex py-4">
                    <li>
                        <button ><i className="pr-6 fa-regular fa-user fa-xl "></i></button>
                    </li>
                    <li>
                        <button><i className="pr-6 fa-regular fa-heart fa-xl"></i></button>
                    </li>
                    <li>
                        <button><i className="pr-6 fa-solid fa-cart-shopping fa-xl"></i></button>
                    </li>
                </ul>

            </div>
        </nav>
    )
}

export default Header