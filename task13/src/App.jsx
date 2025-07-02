import React, { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
    setIsDark(!isDark);
  };

  return (
    <div className="h-screen w-full grid grid-cols-1 md:grid-cols-[250px_1fr] grid-rows-[auto_1fr] dark:bg-gray-900 dark:text-white">

      {/* Mobile Navbar with Hamburger */}
      <div className="md:hidden flex justify-between items-center bg-white dark:bg-gray-800 p-4 shadow row-start-1 col-span-full">
        <h1 className="font-bold text-xl">Admin</h1>
        <div className="flex items-center gap-2">
          <button onClick={toggleDarkMode}>
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setSidebarOpen(!sidebarOpen)}>
            {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <aside className={`bg-gray-800 text-white p-4 space-y-4 md:row-span-2 ${sidebarOpen ? 'block' : 'hidden'} md:block`}>
        <h2 className="text-xl font-semibold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-2">
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Home</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Users</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Reports</a>
          <a href="#" className="hover:bg-gray-700 px-3 py-2 rounded">Settings</a>
        </nav>
      </aside>

      {/* Top Navbar */}
      <header className="hidden md:flex justify-between items-center bg-white dark:bg-gray-800 shadow px-6 py-4 row-start-1 col-start-2">
        <h2 className="text-lg font-semibold">Welcome Back, Admin</h2>
        <div className="flex items-center gap-3">
          <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-xl text-sm">Log Out</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-gray-100 dark:bg-gray-900 p-6 overflow-y-auto row-start-2 col-span-full md:col-start-2">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">$567</div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">$678</div>
          <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow">$578</div>
        </div>
      </main>
    </div>
  );
};

export default App;
