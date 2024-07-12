import React,{useState,useEffect,useContext} from "react";
import { useParams } from "react-router-dom";
import { useDispatch ,useSelector} from "react-redux";
import Reviews from "../Reviews/Reviews";
import { addCart } from "../utility/Store/cartSlice";
import useCallSingleProductApi from "../utility/useCallSingleProductApi"
import { ThemeStore } from "../context/ThemeContext";
import Shimmer from "./Shimmer";

const Product = () => {
  let { id } = useParams();
   const [obj,setObj] = useState([]);


  let dispatch = useDispatch();
  let {theme} = useContext(ThemeStore);

  let cartItems = useSelector((store=> store.cart.items ))


  const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const res = await data.json();
    setObj(res);
  };

  useEffect(() => {
    getData();
  }, []);



  let isPresentIncart = ()=>{
    let objIdx = cartItems.findIndex((cartObj)=> cartObj.dataObj.id == id );
    return objIdx
  }

  // put shimmer UI
  if (obj == null) return <Shimmer></Shimmer>

  let { thumbnail, title, category, price, rating, stock , reviews} = obj;


   
  let darki = " card-body bg-slate-800 "
  let lighti = "card-body "

  let darktitle = "card-title text-white mx-auto text-2xl"
  let lighttitle = "card-title text-black mx-auto text-2xl"

  let lightimage = "bg-zinc-400 h-[100%] rounded-2xl cursor-pointer tansition-all duration-500 hover:scale-110"
  return (
    <div className="h-[92vh] w-screen bg-base-200 pt-6">
      <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto  transition-all duration-700 hover:scale-110 hover:shadow-amber-500">
      { isPresentIncart() !=-1 ?  <p  className="bg-green-600 rounded-2xl  absolute text-black p-1 top-3 left-3 font-bold "> Added in Cart  </p> : null }
      <figure>
          <img src={thumbnail} alt="product"  className={theme == 'light' ? lightimage : "tansition-all duration-500 hover:scale-110 cursor-pointer"}/>
        </figure>
        <div className={theme == 'light' ? lighti : darki}>
          <h2 className={theme == 'light' ? lighttitle : darktitle} >{title}</h2>
          <div className="flex gap-10 flex-wrap">
            <button className="btn m-1">
              Price
              <div className="badge badge-secondary">{price}</div>
            </button>
            <button className="btn m-1">
              Rating
              <div className="badge badge-secondary">{rating}</div>
            </button>
            <button className="btn m-1">
              category
              <div className="badge badge-secondary">{category}</div>
            </button>
            <button className="btn m-1">
              Stock
              <div className="badge badge-secondary">{stock}</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={()=> dispatch(addCart(obj))}>Add to cart </button>
          </div> 
        </div>
      </div>
          <Reviews reviews={reviews}></Reviews>
    </div>
  );
};
export default Product;