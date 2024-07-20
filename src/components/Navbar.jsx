import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeStore } from "../context/ThemeContext";
import {useSelector } from 'react-redux'

import pic from "./store.png"
let Navbar = () => {

  let {theme , setTheme } = useContext(ThemeStore);
    let cartItems = useSelector((store)=> store.cart.items)
   let darkTheme = 'navbar bg-black';
   let lightTheme = 'navbar bg-slate-300'
  return (
    <>
   
      <div className={theme=='dark'? darkTheme : lightTheme}> 
        <div className="flex-1">
        <i class="ri-shopping-cart-fill text-5xl text-orange-600 ">
        </i>
        <Link to="/" className=" text-2xl  text-indigo-500 ml-2">
            YOCart
          </Link>
          
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-indigo-500 text-2xl font-bold  ">
            <li>
              <Link to="/cart"><i class="ri-shopping-cart-fill"></i> <sup className="text-xl text-orange-600 "> {cartItems.length }</sup></Link>
              
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <label className="flex cursor-pointer gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                </svg>
                <input
                  type="checkbox"
                  value="synthwave"
                  className="toggle theme-controller"
                  onClick={ ()=>{
                    setTheme(theme=='light'?'dark':'light')
                    // localStorage.setItem("Theme", theme) // Not working 
                    localStorage.setItem("Theme", theme=='light'?'dark':'light') //Working 
                  } }
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;