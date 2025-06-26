import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <div className="container">
      <h1 className="heading">🛒 Shopping Cart App</h1>
      <div className="content">
        <ProductList onAddToCart={handleAddToCart} />
        <Cart cartItems={cartItems} />
      </div>
    </div>
  );
};

export default App;
