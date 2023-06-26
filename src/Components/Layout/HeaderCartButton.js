import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.css";
import CartContext from "../Store/CartContext";

const HeaderCartButton = (props) => {
  const cardCtx = useContext(CartContext);
  const noOfCartItems = cardCtx.items.reduce((curNumber,item) => {
    return curNumber + item.amount;
  },0);
  return (
    <button className="button" onClick={props.onClick}>
      <span className="icon">
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className="badge">{noOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
