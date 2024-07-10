import React  from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import {createBrowserRouter , RouterProvider } from 'react-router-dom'
import Cart from "./components/Cart";
import About from "./components/About";
import Home from "./components/Home"
import Error from "./components/Error"
import Product from "./components/Product";
import appStore from "./utility/Store/appStore";
import LandingPage from "./components/LandingPage";
import {Provider} from 'react-redux'
import 'antd/dist/reset.css';

let Router = createBrowserRouter([
  { path : "/",
    element : <App></App>,
    children : [
      {
        path:'/',
        element:<LandingPage></LandingPage>
      },
      {
        path :'/home',
        element : <Home></Home>,
      },
      {
        path:"/about",
        element : <About></About>,
      },
      {
        path:'/cart',
        element: <Cart></Cart>,
      },{
        path:"/product/:id",
        element:<Product></Product>
      }
    ],
    errorElement :<Error></Error> 
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={appStore}>
  <RouterProvider router={Router}></RouterProvider>
  </Provider>
);



// import React from "react";
// import ReactDOM from "react-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
// import appStore from "./utility/Store/appStore";
// import "antd/dist/reset.css";

// import App from "./App";
// import Cart from "./components/Cart";
// import About from "./components/About";
// import Home from "./components/Home";
// import Error from "./components/Error";
// import Product from "./components/Product";
// import LandingPage from "./components/LandingPage";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <Provider store={appStore}>
//     <Router>
//       <Routes>
//         <Route path="/" element={<App />}>
//           <Route index element={<LandingPage />} /> {/* Display LandingPage for root URL */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/product/:id" element={<Product />} />
//           <Route path="*" element={<Error />} />
//         </Route>
//       </Routes>
//     </Router>
//   </Provider>
// );
