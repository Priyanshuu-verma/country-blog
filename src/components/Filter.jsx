import React, { useState } from "react";

const Filter = ({ searchInput, setSearchInput, setFiltered, countries,isDarkMode}) => {
  const [searchCategory, setSearchCategory] = useState("country");
  const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"];

  const categories = {
    country: "Country",
    region: "Region",
    subregion: "Subregion",
    language: "Language",
    currency: "Currency",
  };

  // Handle search
  const handleSearch = async (value) => {
    setSearchInput(value);

    if (!value) {
      setFiltered(countries);
      return;
    }

    let apiUrl = "";
    if (searchCategory === "country") {
      setFiltered(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(value.toLowerCase())
        )
      );
      return;
    } else {
        const categoryEndpoint = searchCategory === "language" ? "lang" : searchCategory;
        apiUrl = `https://restcountries.com/v3.1/${categoryEndpoint}/${value}`;
    }

    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error("No results found");
      const data = await response.json();
      setFiltered(data);
    } catch (error) {
      setFiltered([]);
    }
  };

  // Filter by region
  const filterRegions = async (region) => {
    if (region === "All") {
      setFiltered(countries);
    } else {
      const response = await fetch(`https://restcountries.com/v3.1/region/${region}`);
      const data = await response.json();
      setFiltered(data);
    }
  };

  return (
    <div className="flex flex-wrap justify-between items-center gap-4 px-6 py-4 mt-16">
      {/* Search Section */}
      <div className="flex items-center space-x-2 w-full md:w-2/3 ">
        <select
          value={searchCategory}
          onChange={(e) =>  setSearchCategory(e.target.value)}
          className={`p-2 w-36 border border-gray-300 dark:border-gray-600 rounded-md  ${isDarkMode? "text-white" :"text-gray-900"} dark:text-white ${isDarkMode ?"bg-gray-600": "bg-red-400 "} `}
        >
          {Object.entries(categories).map(([key, label]) => (
            <option key={key} value={key}>
              {label}
            </option>
          ))}
        </select>

        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder={`Search by ${categories[searchCategory]}`}
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          className={`w-full md:w-[350px] p-2 border border-gray-300 dark:border-gray-600 rounded-md ${isDarkMode ?"bg-gray-600": "bg-red-400 "} ${isDarkMode? "text-white" :"text-gray-900"}`}
        />
      </div>

      {/* Region Filter & Dark Mode */}
      <div className="flex items-center space-x-4">
        <select
          name="select"
          id="select"
          onChange={(e) => filterRegions(e.target.value)}
          className={`p-2 w-32 border border-gray-300 dark:border-gray-600 rounded-md ${isDarkMode ?"bg-gray-600": "bg-red-400 "} ${isDarkMode? "text-white" :"text-gray-900"}`}
        >
          {regions.map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};

export default Filter;
