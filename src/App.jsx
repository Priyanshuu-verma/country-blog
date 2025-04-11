import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import About from "./components/About";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Initial check at page load
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme === "dark") return true;
    if (storedTheme === "light") return false;

    // System preference fallback
    return window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  // Update localStorage whenever user toggles theme
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <div
      className={`min-h-screen flex-grow ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-red-100 text-black"
      } bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]`}
    >
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />

      <Routes>
        <Route path="/" element={<Countries isDarkMode={isDarkMode} />} />
        <Route path="/countries/:name" element={<Country isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About isDarkMode={isDarkMode}/>} />
      </Routes>
    </div>
  );
}

export default App;
