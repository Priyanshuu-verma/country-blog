import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = ({isDarkMode}) => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
      const data = await response.json();
      setCountry(data);
    };

    fetchCountryData();

    // Load likes & comments from local storage
    const storedLikes = localStorage.getItem(`likes_${name}`);
    const storedComments = localStorage.getItem(`comments_${name}`);

    if (storedLikes) setLikes(parseInt(storedLikes, 10));
    if (storedComments) setComments(JSON.parse(storedComments));
  }, [name]);

  // Handle Like
  const handleLike = () => {
    const newLikes = likes + 1;
    setLikes(newLikes);
    localStorage.setItem(`likes_${name}`, newLikes);
  };

  // Handle Comment Submission
  const handleCommentSubmit = () => {
    if (commentInput.trim() === "") return;
    
    const newComments = [...comments, commentInput];
    setComments(newComments);
    setCommentInput("");
    localStorage.setItem(`comments_${name}`, JSON.stringify(newComments));
  };

  return (
    <section className={`container mx-auto p-6 ${isDarkMode?"bg-gray-500 ": "bg-red-100 " } ${isDarkMode?"text-white":"text-gray-900"} dark: mt-16 min-h-screen`}>
      <Link to="/" className={`inline-flex items-center${isDarkMode?"bg-gray-900 ": "bg-gray-200 " }  ${isDarkMode?"text-white":"text-gray-900"} dark:text-white px-4 py-2 rounded shadow-md ${isDarkMode? "hover:bg-gray-900" :"hover:bg-red-400"}`}>
        <i className="fas fa-arrow-left mr-2"></i> Back Home
      </Link>
      {country.map((c) => {
        const {
          cca3,
          flags,
          name,
          population,
          region,
          subregion,
          capital,
          tld,
          currencies,
          languages,
          borders,
        } = c;

        return (
          <article key={cca3} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src={flags.png} alt={name.common} className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">{name.common}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-lg"><strong>Native Name:</strong> {Object.values(name.nativeName || {})[0]?.common}</p>
                  <p className="text-lg"><strong>Population:</strong> {population.toLocaleString()}</p>
                  <p className="text-lg"><strong>Region:</strong> {region}</p>
                  <p className="text-lg"><strong>Sub Region:</strong> {subregion}</p>
                  <p className="text-lg"><strong>Capital:</strong> {capital?.[0]}</p>
                </div>
                <div>
                  <p className="text-lg"><strong>Top Level Domain:</strong> {tld?.[0]}</p>
                  <p className="text-lg"><strong>Currencies:</strong> {Object.values(currencies || {})[0]?.name}</p>
                  <p className="text-lg"><strong>Languages:</strong> {Object.values(languages || {}).join(", ")}</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-semibold">Border Countries:</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {borders?.length ? (
                    borders.map((border) => (
                      <span key={border} className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white px-3 py-1 rounded-md shadow">
                        {border}
                      </span>
                    ))
                  ) : (
                    <p className={`${isDarkMode?"text-white":"text-gray-500"}`}>No bordering countries</p>
                  )}
                </div>
              </div>

              {/* Like & Comment Section */}
              <div className="mt-6">
               
                                <button 
                  onClick={handleLike}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
                >
                  👍 Like ({likes})
                </button>

               
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">Comments</h3>
                  <div className="mt-2">
                    <input 
                      type="text"
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      placeholder="Write a comment..."
                      className="w-full p-2 border border-gray-300 rounded-md dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                    />
                    <button 
                      onClick={handleCommentSubmit}
                      className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
                    >
                      💬 Comment
                    </button>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {comments.map((comment, index) => (
                      <li key={index} className={`${isDarkMode? "bg-gray-700":"bg-gray-100" } p-2 rounded-md shadow-sm ${isDarkMode?"text-white":"text-gray-800"}`}>
                        {comment}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Country;