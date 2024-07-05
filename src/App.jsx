import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Shimmer from './components/Shimmer'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './components/About'
import Cart from './components/Cart'
import { Outlet } from 'react-router-dom'
import ThemeContext from './context/ThemeContext'
const App = () => {
  return (
    <>
    
      <ThemeContext>
      <Navbar></Navbar>
      <Outlet></Outlet>
      </ThemeContext>
     
      {/* <BrowserRouter>
         <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/cart' element={<Cart/>}/>
          </Routes>
      </BrowserRouter> */}

    </>
  )
}
export default App
