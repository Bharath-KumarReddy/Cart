// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { ThemeStore } from "../context/ThemeContext.jsx";
// import { useDispatch } from "react-redux";
// import { addCart } from "../utility/Store/cartSlice.jsx";

// let ProductCard = ({ obj }) => {
//   let { title, thumbnail, rating, price, category, id } = obj;
//   let {theme } = useContext(ThemeStore);
//   let Navigate = useNavigate();
//   let handleClick = () => {
//     Navigate(`/product/${id}`);
//   };

//   let dispatch = useDispatch();
//   let handleAddbtn = (event) => {

//     dispatch(addCart(obj));
    
//     event.stopPropagation()
//   }

//   let darkTheme = "card w-96 bg-base-300 shadow-5xl m-3 mt-8 shadow-3xl hover:shadow-2xl hover:shadow-amber-500 transition-all  hover:scale-110 ";
//   let lightTheme = "card w-96 bg-gray-300 shadow-xl m-3 mt-8 shadow-3xl hover:shadow-3xl hover:shadow-orange-700 transition-all hover:scale-110"
//   return (
//     <div className={theme == "light" ? lightTheme : darkTheme} onClick={handleClick} >
      
//       <figure>
//         <img
//           className="bg-zinc-400 h-[90%] rounded-2xl cursor-pointer" 
//           src={thumbnail}
//           alt="Shoes"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>

//         <div className="card-actions justify-between items-center ">
//           <div className="badge badge-secondary bg-orange-700">{category}</div>
//           <div className="badge badge-secondary bg-orange-800">{rating}</div>

//           <p className=" p-1"> {price} $</p>
//           <button className="bg-black text-white p-4 rounded-2xl" onClick={handleAddbtn}> Add </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;





// import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { ThemeStore } from "../context/ThemeContext.jsx";
// import { useDispatch } from "react-redux";
// import { addCart } from "../utility/Store/cartSlice.jsx";

// let ProductCard = ({ obj }) => {
//   let { title, thumbnail, rating, price, category, id } = obj;
//   let { theme } = useContext(ThemeStore);
//   let Navigate = useNavigate();
//   let handleClick = () => {
//     Navigate(`/product/${id}`);
//   };

//   let dispatch = useDispatch();
//   let handleAddbtn = (event) => {
//     dispatch(addCart(obj));
//     event.stopPropagation();
//   };

//   let cardClass = theme === "light"
//     ? "card w-96 bg-gray-300 shadow-xl m-3 mt-8 shadow-3xl hover:shadow-3xl hover:shadow-orange-700 transition-all hover:scale-110"
//     : "card w-96 bg-base-300 shadow-5xl m-3 mt-8 shadow-3xl hover:shadow-2xl hover:shadow-amber-500 transition-all hover:scale-110";

//   return (
//     <div className={cardClass} onClick={handleClick}>
//       <figure>
//         <img
//           className="bg-zinc-400 h-[90%] rounded-2xl cursor-pointer"
//           src={thumbnail}
//           alt="Shoes"
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{title}</h2>
//         <div className="card-actions justify-between items-center">
//           <div className="badge badge-secondary bg-orange-700">{category}</div>
//           <div className="badge badge-secondary bg-orange-800">{rating}</div>
//           <p className=" p-1"> {price} $</p>
//           <button className="bg-black text-white p-4 rounded-2xl" onClick={handleAddbtn}> Add </button>
//         </div>
//       </div>

//       {/* CSS for glowing gradient border effect */}
//       <style jsx>{`
//         .card {
//           position: relative;
//           overflow: hidden;
//         }
//         .card::before {
//           content: "";
//           position: absolute;
//           top: -2px; /* Adjust this value to control the glow distance */
//           left: -2px; /* Adjust this value to control the glow distance */
//           right: -2px; /* Adjust this value to control the glow distance */
//           bottom: -2px; /* Adjust this value to control the glow distance */
//           z-index: -1;
//           background: linear-gradient(to top left, rgba(255, 165, 0, 0.5), rgba(0, 0, 0, 0.5));
//           opacity: 0;
//           transition: opacity 0.3s ease-in-out;
//           border-radius: 8px; /* Adjust border-radius to match your card */
//           pointer-events: none; /* Ensure clicks go through to the card */
//         }
//         .card:hover::before {
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProductCard;


import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeStore } from "../context/ThemeContext.jsx";
import { useDispatch } from "react-redux";
import { addCart } from "../utility/Store/cartSlice.jsx";

let ProductCard = ({ obj }) => {
  let { title, thumbnail, rating, price, category, id } = obj;
  let { theme } = useContext(ThemeStore);
  let Navigate = useNavigate();
  let handleClick = () => {
    Navigate(`/product/${id}`);
  };

  let dispatch = useDispatch();
  let handleAddbtn = (event) => {
    dispatch(addCart(obj));
    event.stopPropagation();
  };

  let cardClass = theme === "light"
    ? "card w-96 bg-gray-300 shadow-xl m-3 mt-8 shadow-3xl hover:shadow-3xl hover:shadow-orange-700 transition-all hover:scale-110 cursor-pointer"
    : "card w-96 bg-base-300 shadow-5xl m-3 mt-8 shadow-3xl hover:shadow-2xl hover:shadow-amber-500 transition-all hover:scale-110 cursor-pointer";

  return (
    <div className={cardClass} onClick={handleClick}>
      <figure>
        <img
          className="bg-zinc-400 h-[90%] rounded-2xl cursor-pointer"
          src={thumbnail}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between items-center">
          <div className="badge badge-secondary bg-orange-700">{category}</div>
          <div className="badge badge-secondary bg-orange-800">{rating}</div>
          <p className=" p-1"> {price} $</p>
          <button className="bg-black text-white p-4 rounded-2xl" onClick={handleAddbtn}> Add </button>
        </div>
      </div>

      {/* CSS for card edges animation */}
      <style jsx>{`
        .card {
          position: relative;
          overflow: hidden;
          border-radius: 8px; /* Adjust border-radius to match your card */
          border-top: 13px solid rgba(255, 165, 0, 0.8); /* Top edge color */
          border-right: 1px solid transparent; /* Right edge color (initially transparent) */
          border-bottom: 10px solid transparent; /* Bottom edge color (initially transparent) */
          border-left: 13px solid rgba(255, 1, 52, 0.8); /* Left edge color */
          // animation: borderAnimation 4s linear infinite; /* Animation for border colors */
        }
        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: linear-gradient(to top left, rgba(255, 165, 0, 0.5), rgba(0, 0, 0, 0.5));
          opacity: 0; /* Initially hidden */
          border-right: 2px solid rgba(255, 165, 0, 0.8); /* Top-right edge color */
          border-bottom: 2px solid rgba(0, 0, 0, 0.8); /* Bottom-left edge color */
          transition: opacity 0.1s ease-in-out;
        }
        .card:hover::before {
          border-right: 2px solid rgba(255, 165, 0, 0.8); /* Top-right edge color */
          border-bottom: 2px solid rgba(0, 0, 0, 0.8); /* Bottom-left edge color */
          opacity: 1; /* Show gradient on hover */
        }

        @keyframes borderAnimation {
          0% {
            border-color: rgba(255, 165, 0, 0.8) transparent transparent rgba(0, 0, 0, 0.8);
          }
          25% {
            border-color: transparent rgba(255, 165, 0, 0.8) transparent rgba(0, 0, 0, 0.8);
          }
          50% {
            border-color: transparent transparent rgba(255, 165, 0, 0.8) rgba(0, 0, 0, 0.8);
          }
          75% {
            border-color: rgba(0, 0, 0, 0.8) transparent transparent rgba(255, 165, 0, 0.8);
          }
          100% {
            border-color: rgba(255, 165, 0, 0.8) transparent transparent rgba(0, 0, 0, 0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;

