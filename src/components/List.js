import React, { useState, useEffect } from "react";
import { client } from "../api/index";
import data from "../api/data";
import Cards from "./Card";
import "../styles/list.css";

const List = ({ handleClick }) => {
/* Initial States */
const [products, setProducts] = useState(data); 

/* Funtion for fetch the product list data */
const fetchProductList = async () => {
  await client.get().then((res) => {
  //  setProducts(res.data);
   }).catch(error => {
   console.log(error);
})}

useEffect(() => {
    fetchProductList();
}, []);

function selectFilter(e){
  let selectedFilter = e.target.value;
  let filteredRecords = data.filter((elem) => {
      return selectedFilter ? elem.colour === selectedFilter : data;
  })
  setProducts(filteredRecords);
}

  return (
    <>
    <select className="filter" onChange={(e) => selectFilter(e)}>
      <option value="">Filter by Color</option>
      <option value="Black">Black</option>
      <option value="Red">Red</option>
      <option value="Stone">Stone</option>
    </select>
    <section>
      {products.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
    </>
  );
};

export default List;
