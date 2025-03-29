import React, { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`${isDarkMode? "bg-gray-400" : "bg-red-300"} text-white p-4 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md`}>
      <Link className={`text-2xl font-bold ${isDarkMode? "text-white" :"text-red-900"}`} to="/">Know Your World</Link>
      <div className="flex items-center">
        <nav className={`flex ${navOpen ? 'flex-col' : 'hidden'} md:flex-row md:flex gap-3`}>
          <Link to="/" className={`p-2 ${isDarkMode? "hover:bg-gray-500": "hover:bg-red-400" } text-xl font-bold hover:rounded-md ${isDarkMode? "text-white" :"text-gray-900"}`}>Home</Link>
          <Link to="/about" className={`p-2 ${isDarkMode? "hover:bg-gray-500": "hover:bg-red-400" } text-xl font-bold hover:rounded-md ${isDarkMode? "text-white" :"text-gray-900"}`}>About</Link>
        </nav>
        <button onClick={() => setIsDarkMode(!isDarkMode)} className={`p-2 cursor-pointer ${isDarkMode? "hover:bg-gray-500": "hover:bg-red-400"} `}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button onClick={() => setNavOpen(!navOpen)} className="md:hidden p-2">
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
