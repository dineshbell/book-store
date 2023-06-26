import React from "react";
import "./BookItem.css";
import BookItemform from "./BookItemform";
import { useContext } from "react";
import CartContext from "../Store/CartContext";

const BookItem = (props) => {
 const cardCtx = useContext(CartContext)
  const price = `Rs${props.price.toFixed(2)}`;
const addToCartHandler = amount => {
  cardCtx.addItem({
    id: props.id,
    name: props.name,
    amount: amount,
    price: props.price
  })
}

  return (
    <li className="book">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
        <div className="price"> {price}</div>
      </div>
      <div><BookItemform onAddToCart = {addToCartHandler}/></div>
    </li>
  );
};

export default BookItem;
