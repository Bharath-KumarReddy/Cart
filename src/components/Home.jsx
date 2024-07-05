import React, { useState,useEffect ,useContext} from "react";
// import products from "../Data"; // Assuming products is imported correctly
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";
import { ThemeStore } from "../context/ThemeContext";
const Home = () => {
  const [actual, setActual] = useState([]);
  const [product, setProduct] = useState([]);
  const [value, setValue] = useState(""); // Initialize value state

  let {theme} = useContext(ThemeStore);

  const getData = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const obj  = await data.json();
    setProduct(obj.products);
    setActual(obj.products);
    console.log(obj);
  }

 useEffect(() => {
    getData();
 },[])




  const handleRating = (e) => {
    e.preventDefault();
    let temp = actual.filter(obj => obj.rating >= 4);
    setProduct(temp);
  };

  const handleGrocery = (e) => {
    e.preventDefault();
    let temp = actual.filter(obj => obj.category === "groceries");
    setProduct(temp);
  };

  const handleFurniture = (e) => {
    e.preventDefault();
    let temp = actual.filter(obj => obj.category === "furniture");
    setProduct(temp);
  };

  const handleBeauty = (e) => {
    e.preventDefault();
    let temp = actual.filter(obj => obj.category === "beauty");
    setProduct(temp);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    if(value.length ==0){
     return setProduct(actual);
    }
    let temp = product.filter(obj =>
      obj.title.toLowerCase().includes(value.toLowerCase())
    );
    setProduct(temp);
    setValue("");
  };

  if(product.length ==0) return <Shimmer></Shimmer>


  let dark = "bg-slate-800 border-2 border-black min-h-[91vh] w-screen bg-base-300 flex flex-wrap justify-around"
  let light= "bg-gray-300 border-2 border-black min-h-[91vh] w-screen bg-base-300 flex flex-wrap justify-around"
  return (
    <div className={theme == "light" ? dark : light}>
      <div className="utility flex justify-around w-screen mt-5">
        <button className="btn btn-error" onClick={handleRating}>
          Top Rating
        </button>
        <button className="btn btn-error" onClick={handleGrocery}>
          Grocery
        </button>
        <div className="searchBar">
          <input
            type="text"
            placeholder="filter..."
            className="p-3 rounded-2xl border-none"
            value={value}
            onChange={(e) => setValue(e.target.value.trim())}
          />
          <button className="btn btn-success ml-1 text-white" onClick={handleSearch}>
            Search
          </button>
        </div>
        <button className="btn btn-error" onClick={handleFurniture}>
          Furniture
        </button>
        <button className="btn btn-error" onClick={handleBeauty}>
          Beauty
        </button>
      </div>
      {product.map((card, i) => (
        <ProductCard fobj={card} key={i} />
      ))}
    </div>
  );
};
export default Home;
