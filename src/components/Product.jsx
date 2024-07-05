import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import GetSingleProduct from "../utility/GetSingleProduct";
const Product = () => {
  const { id } = useParams();
// console.log(id);
//   const [card, setCard] = useState([]);
//   const getData = async () => {
//     const data = await fetch(`https://dummyjson.com/products/${id}`);
//     const res = await data.json();
//     setCard(res);
//   };
//   useEffect(() => {
//     getData();
//   }, []);
  const card = GetSingleProduct(id);
  if (card.length == 0) return <Shimmer></Shimmer>;
  return (
    <div className="h-[92vh] w-screen bg-base-300 pt-6">
      <div className="card card-side bg-base-100 shadow-xl w-1/2 mx-auto ">
        <figure>
          <img src={card.thumbnail} alt="Movie" className="bg-zinc-400 h-full" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{card.title}</h2>
          <div className="flex gap-5 flex-wrap">
            <button className="btn">
              Price
              <div className="badge badge-secondary">{card.price}</div>
            </button>
            <button className="btn">
              Rating
              <div className="badge badge-secondary">{card.rating}</div>
            </button>
            <button className="btn">
              category
              <div className="badge badge-secondary">{card.category}</div>
            </button>
            <button className="btn">
              Stock
              <div className="badge badge-secondary">{card.stock}</div>
            </button>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
