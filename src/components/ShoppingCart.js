import React, { useState, useEffect } from "react";
import "../styles/cart.css";

const ShoppingCart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <>
      <article>
        {cart.map((item, key) => (
          <div className="cart_box" key={key}>
            <div className="image_box">
                <img src={item.img} alt="" />
            </div>
            <div className="details">
                <p>{item.name}</p>
                <p>Price - {item.price}Rs</p>
            </div>
            <div className="buttons">
                <button onClick={() => handleChange(item, -1)}>-</button>
                <button>{item.amount}</button>            
                <button onClick={() => handleChange(item, 1)}>+</button>  
                <button onClick={() => handleRemove(item.id)}><i className="fa fa-trash"></i></button>
            </div>
          </div>
        ))}
        <div className="total">
          <span>Total Price of your Cart</span>
          <span>Rs - {price}</span>
        </div>
      </article>
    </>
  );
};

export default ShoppingCart;
