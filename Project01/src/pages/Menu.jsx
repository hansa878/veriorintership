import Header from "../components/Header";
import PizzaList from "../components/PizzaList";
import CartSidebar from "../components/CartSidebar";
import { useState } from "react";

function Menu() {
  const [cart, setCart] = useState([]);
  const userName = localStorage.getItem("userName");

  function addToCart(pizza) {
    setCart((prev) => [...prev, pizza]);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header userName={userName} />
      <div className="flex flex-col md:flex-row flex-1">
        <div className="flex-1 p-4">
          <PizzaList dispatch={addToCart} />
        </div>
        <div className="w-full md:w-72 bg-yellow-50 p-4 border-t md:border-l md:border-t-0">
          <CartSidebar cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
