// import Navbar from "./components/Navbar"
// import {Outlet} from "react-router-dom"
// import ThemeContext from "./context/ThemeContext"

// function App(){
//   return (
//     <>
    
//     <ThemeContext>
//     <Navbar></Navbar>
//    <Outlet></Outlet>
//    </ThemeContext>
//     </>
//   )
// } 


// export default App


import React from "react";
import { Outlet } from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage"; 

function App() {
  return (
    <>
      <ThemeContext>
        <Navbar />
        <Outlet />
      </ThemeContext>
    </>
  );
}

export default App;
