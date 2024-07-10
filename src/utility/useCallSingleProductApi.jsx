import React ,{useState,useEffect}from 'react'
const useCallSingleProductApi = (id) => {
    const [card, setCard] = useState([]);
    const getData = async () => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const res = await data.json();
    setCard(res);
  };
  useEffect(() => {
    getData();
  }, []);
  console.log(card);
  return card;
}
export default useCallSingleProductApi
