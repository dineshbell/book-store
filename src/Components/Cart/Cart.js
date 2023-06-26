import React from "react";
import "./Cart.css";
import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cardCtx = useContext(CartContext);

  const totalAmount = `Rs ${cardCtx.totalAmount.toFixed(2)}`;
  const hasItems = cardCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cardCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cardCtx.addItem({...item,amount:1})
  };
  const cartitems = (
    <ul className="cart-items">
      {cardCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd = {cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartitems}
      <div className="total">
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className="actions">
        <button className="button-alt" onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className="button">Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
