function PizzaCard({ pizza, dispatch }) {
  return (
    <div className="border rounded shadow p-4 hover:shadow-lg transition flex flex-col">
      <img
        src={pizza.image}
        alt={pizza.name}
        className="h-40 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-bold">{pizza.name}</h3>
      <p className="text-sm text-gray-600">{pizza.ingredients}</p>
      <p className="font-bold text-yellow-600 mt-2 mb-3">${pizza.price}</p>
      <button
        onClick={() => dispatch(pizza)}
        className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition mt-auto"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default PizzaCard;
