import React, { Fragment } from "react";
import BookImage from '../Assests/book.jpg';
import './Header.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className="header">
        <h1> BookStore</h1>
        <HeaderCartButton   onClick = {props.onShowCart}/>
      </header>
      <div className="main-image">
        <img src={BookImage} alt="Books"/>
      </div>
    </Fragment>
  );
};

export default Header;
