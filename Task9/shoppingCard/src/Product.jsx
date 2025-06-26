import React from "react";

const Product = ({ product, onAddToCart }) => {
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <button className="button" onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
