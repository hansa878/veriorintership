import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function handleStart() {
    if (name.trim() !== "") {
      localStorage.setItem("userName", name);
      navigate("/menu");
    }
  }

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1303021179/photo/different-tipes-of-pizza.jpg?b=1&s=612x612&w=0&k=20&c=4poaks08wUNTcLIGGmjpJpNL3gv-NhRIItKI_lDaKYs=')",
      }}
    >
      <div className="bg-white/90 backdrop-blur-md shadow-2xl p-8 rounded-xl max-w-md w-full text-center">
        <h1 className="text-4xl font-extrabold text-yellow-600 mb-4">
          🍕 Welcome to Fast React Pizza
        </h1>
        <p className="text-gray-700 mb-6 text-sm">Enter your name to begin ordering</p>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          onClick={handleStart}
          disabled={name.trim() === ""}
          className={`w-full py-2 rounded-lg font-semibold text-white transition ${
            name.trim() === ""
              ? "bg-yellow-300 cursor-not-allowed"
              : "bg-yellow-500 hover:bg-yellow-600"
          }`}
        >
          Start Ordering
        </button>
      </div>
    </div>
  );
}

export default Home;
