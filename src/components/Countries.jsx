import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";

const url = "https://restcountries.com/v3.1/all";

const Countries = ({isDarkMode}) => {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCountries = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setCountries(data);
      setFiltered(data);
      setIsLoading(false);
    };

    fetchCountries();
  }, []);

  return (
    <div className={`p-4 dark:bg-gray-900 min-h-screen ${isDarkMode?"text-white": "text-gray-900" }`}>
      <Filter
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        setFiltered={setFiltered}
        countries={countries}
        isDarkMode={isDarkMode}
      />

      {isLoading ? (
        <h1 className="text-center text-2xl font-bold mt-10">Loading...</h1>
      ) : (
        <section className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filtered.map((country) => {
            const { cca3, name, flags, population, region, capital } = country;

            return (
              <Link
                to={`/countries/${name.common}`}
                key={cca3}
                className={`${ isDarkMode? "bg-gray-800" :"bg-red-200" } shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl`}
              >
                <article>
                  <div className="h-40 w-full">
                    <img
                      src={flags.png}
                      alt={name.common}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-semibold">{name.common}</h4>
                    <p className="text-sm">
                      <strong>Population:</strong> <span className="font-medium">{population.toLocaleString()}</span>
                    </p>
                    <p className="text-sm">
                      <strong>Region:</strong> <span className="font-medium">{region}</span>
                    </p>
                    <p className="text-sm">
                      <strong>Capital:</strong> <span className="font-medium">{capital?.[0]}</span>
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </section>
      )}
    </div>
  );
};

export default Countries;