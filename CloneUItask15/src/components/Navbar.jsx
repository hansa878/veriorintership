const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 border-b bg-white sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" className="w-24" alt="YouTube" />
      </div>
      <div className="flex-1 max-w-xl flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-300 rounded-l-full"
        />
        <button className="px-4 py-2 bg-gray-100 rounded-r-full border border-l-0">
          🔍
        </button>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVKeylr9fuz797Gzhagam3mmycQ6s8YKjQA&s"
        className="w-8 h-8 rounded-full"
        alt="Avatar"
      />
    </header>
  );
};

export default Navbar;
