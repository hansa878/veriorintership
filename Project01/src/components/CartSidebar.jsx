function CartSidebar({ cart }) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">🛒 Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-600">Cart is empty.</p>
      ) : (
        <ul className="space-y-2">
          {cart.map((item, i) => (
            <li key={i} className="text-sm">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CartSidebar;
