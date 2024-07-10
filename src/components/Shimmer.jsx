import React from 'react'
import loader from "./loader.gif";

const Shimmer = () => {
  return (

   <div className='w-screen h-screen flex justify-center items-center bg-black'>

    <img src={loader} alt='Loading....'/>



   </div>
    
  )
}

export default Shimmer
