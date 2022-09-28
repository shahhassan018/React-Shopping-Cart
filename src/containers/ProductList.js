import React, { useState } from "react";
import List from "../components/List";
import Navbar from "../components/Navbar";
import ShoppingCart from "../components/ShoppingCart";

const ProductList = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, val) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += val;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <>
      <Navbar setShow={setShow} size={cart.length} />
      {show ? (
        <List handleClick={handleClick} />
      ) : (
        <ShoppingCart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </>
  );
};

export default ProductList;
