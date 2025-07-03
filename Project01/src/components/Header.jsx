function Header({ userName }) {
  return (
    <header className="bg-yellow-500 text-white py-4 px-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">🍕 Fast React Pizza Co.</h1>
      <p className="text-sm font-medium">👤 {userName}</p>
    </header>
  );
}

export default Header;
