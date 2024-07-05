import React ,{useState,useEffect}from 'react'
const GetSingleProduct = (id) => {
    const [card, setCard] = useState([]);
    const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const res = await data.json();
    setCard(res);
  };
  useEffect(() => {
    getData();
  }, []);
  return card;
}
export default GetSingleProduct
