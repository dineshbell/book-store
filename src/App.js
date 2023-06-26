import Header from "./Components/Layout/Header";
import {useState } from "react";
import Books from "./Components/Books/Books";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [cart, setCart] = useState(false);
  const showCartHandler = () => {
    setCart(true);
  };
  const hideCartHandler = () => {
    setCart(false);
  };

  return (
    <CartProvider>
      {cart && <Cart onClose = {hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Books />
      </main>
    </CartProvider>
  );
}

export default App;
