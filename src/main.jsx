import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import Product from './components/Product.jsx'
const Router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    children : [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/cart',
        element:<Cart></Cart>
      },
      {
        path:'/product/:id',
        element:<Product></Product>
      }
    ],
    errorElement : <ErrorBoundary></ErrorBoundary>
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={Router}>

    <App />
  </RouterProvider>
  </React.StrictMode>,
)
