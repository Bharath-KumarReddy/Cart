import React,{useContext} from "react";
import { Link } from "react-router-dom";
import { ThemeStore } from "../context/ThemeContext";
const Navbar = () => {
  let {theme,setTheme} = useContext(ThemeStore);
  // console.log(obj);

  let darkTheme = 'navbar bg-slate-300'
  let lightTheme = 'navbar bg-black'

  let  darki = 'text-red-900 text-2xl btn btn-ghost'
  let lighi= 'text-indigo-500 text-2xl btn btn-ghost'


  const handleclick = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if(newTheme == 'light'){
      localStorage.setItem('theme', 'light');
    }else {
      localStorage.setItem('theme', 'dark');
    }
  }

  return (
    <>
      <div className={theme == 'light' ? lightTheme : darkTheme}>
        <div className="flex-1">
          <Link to="/" className={theme == 'light' ? lighi : darki}>
            MYCart
          </Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 text-white">
            <li className=" mr-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none rounded-2xl focus:ring focus:ring-violet-300 ...">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="mr-5 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none rounded-2xl focus:ring focus:ring-violet-300 ...">
              {/* <a href="/about">About</a> */}
              <Link to="/about">About</Link>
            </li>
            <li className="mr-5 ">
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
                  onClick={handleclick}
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

