import PizzaCard from "./PizzaCard";
import pizzaData from "../data/pizzaData";

function PizzaList({ dispatch }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {pizzaData.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} dispatch={dispatch} />
      ))}
    </div>
  );
}

export default PizzaList;
