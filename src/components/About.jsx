import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 text-gray-900 dark:text-white rounded-2xl shadow-2xl mt-16">
      <h1 className="text-5xl font-extrabold mb-8 text-center text-blue-600 dark:text-blue-400">About This Application</h1>
      <p className="mb-6 text-lg leading-relaxed text-center">
        Discover detailed insights about countries worldwide, including population, region, capital, and more.
      </p>
      
      <h2 className="text-3xl font-semibold mb-5 text-blue-500 dark:text-blue-300">✨ Features</h2>
      <ul className="list-disc list-inside space-y-3 text-lg">
        <li>🔍 Search for countries by name.</li>
        <li>🌍 View comprehensive country details.</li>
        <li>🔧 Filter countries by various criteria.</li>
        <li>📱 Fully responsive for mobile and desktop.</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-5 text-blue-500 dark:text-blue-300">🛠 Technologies Used</h2>
      <ul className="list-disc list-inside space-y-3 text-lg">
        <li>⚛️ React for an interactive user interface.</li>
        <li>🎨 Tailwind CSS for sleek and responsive styling.</li>
        <li>🔗 React Router for seamless navigation.</li>
        <li>🌐 REST API integration for real-time data.</li>
      </ul>
      
      <h2 className="text-3xl font-semibold mt-8 mb-5 text-blue-500 dark:text-blue-300 text-center">📩 Get In Touch</h2>
      <p className="text-lg text-center">
        Have any questions or feedback? We'd love to hear from you!
      </p>
      
      <div className="mt-8 text-center">
        <a 
          href="mailto:rs05652@gmail.com" 
          className="inline-block px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default About;
