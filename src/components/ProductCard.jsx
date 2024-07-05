import React from 'react'
import { useNavigate } from 'react-router';
const ProductCard = ({fobj}) => {
   const Navigate = useNavigate();


   const handleProduct = () => {

    const {id} = fobj;
    Navigate(`/product/${id}`);
   }


   const handleAdd = (e) => {
    console.log("added success")
    e.stopPropagation();
   }

  return (
    <div className="card w-96 bg-gray-100 shadow-xl mb-10 mt-9 mr-10" onClick={handleProduct}>
    <figure>
      <img
        src={fobj.thumbnail}
        alt="Shoes"
        className='bg-zinc-400 rounded-2xl'
      />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        {fobj.title}
      </h2>
      {/* <p>{fobj.description.slice(0,50)}</p> */}
      <div className="card-actions justify-between items-center">
        <div className="badge badge-secondary">{fobj.category}</div>
        <div className="badge badge-outline">{fobj.rating} *</div>
        <div className="badge badge-outline">{fobj.price} RS</div>
        <button className=" bg-black  text-white rounded-2xl p-3 cursor-pointer ..." onClick={handleAdd}>Add</button>
      </div>
    </div>
  </div>
  )
}
export default ProductCard
