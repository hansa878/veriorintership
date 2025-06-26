import React from "react";
import Product from "./Product";

const products = [
  { id: 1, name: "T-Shirt", price: 10 },
  { id: 2, name: "Shoes", price: 40 },
  { id: 3, name: "Cap", price: 5 },
];

const ProductList = ({ onAddToCart }) => {
  return (
    <div>
      <h2>🛍 Products</h2>
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={onAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;
