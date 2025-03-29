import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Countries from "./components/Countries";
import Country from "./components/Country";
import About from "./components/About";

function App() {
  // State to manage dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);


  return (
    <div className={`flex-grow ${isDarkMode? "bg-gray-500":" bg-red-100" } bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]`}>
      <Header setIsDarkMode={setIsDarkMode} isDarkMode={isDarkMode} />
      <Routes>
        <Route path="/" element={<Countries isDarkMode={isDarkMode} />} />
        <Route path="/countries/:name" element={<Country isDarkMode={isDarkMode} />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;