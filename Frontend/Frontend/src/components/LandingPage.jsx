import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://travelscout.onrender.com/homepage";

const LandingPage = () => {
  const [data, setData] = useState({ cities: [], indianCities: [], thailandCities: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center text-lg py-20 text-purple-700 animate-pulse">Loading...</div>;
  if (error) return <div className="text-center text-red-600 py-20">Error: {error.message}</div>;

  const renderSection = (title, items, colorScheme) => (
    <div className="mb-16">
      <h2 className={`text-4xl font-bold mb-8 text-center uppercase tracking-wider ${colorScheme.title}`}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((destination, index) => (
          <div 
            key={destination._id} 
            className={`border border-gray-200 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 ${colorScheme.cardBg}`}
          >
            <h3 className={`text-2xl font-bold mb-3 ${colorScheme.destinationName}`}>
              {destination.name}
            </h3>
            <p className={`text-gray-700 mb-2 font-semibold ${colorScheme.location}`}>
              <span className="mr-2">📍</span> Location: {destination.location}
            </p>
            <p className={`text-gray-700 mb-4 font-semibold ${colorScheme.cost}`}>
              <span className="mr-2">💰</span> Estimated Cost: ₹{destination.estimatedCost}
            </p>
            {destination.images && destination.images.length > 0 && (
              <Link to={`/destination/${destination._id}`}>
                <img 
                  src={destination.images[0]} 
                  alt={destination.name} 
                  className="w-full h-48 object-cover rounded-xl cursor-pointer hover:opacity-80 transition-opacity duration-300" 
                />
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div  className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-6xl font-extrabold text-center mb-16 bg-gradient-to-r from-purple-800 to-indigo-800 bg-clip-text text-transparent uppercase tracking-tighter">
          Trending Travel Destinations
        </h1>
        {renderSection("Top Cities", data.cities, {
          title: "bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent",
          cardBg: "bg-gradient-to-br from-blue-50 to-cyan-50",
          destinationName: "bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent",
          location: "text-blue-600",
          cost: "text-cyan-600",
        })}
        {renderSection("Indian Cities", data.indianCities, {
          title: "bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent",
          cardBg: "bg-gradient-to-br from-green-50 to-teal-50",
          destinationName: "bg-gradient-to-r from-green-700 to-teal-700 bg-clip-text text-transparent",
          location: "text-green-600",
          cost: "text-teal-600",
        })}
        {renderSection("Thailand Cities", data.thailandCities, {
          title: "bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent",
          cardBg: "bg-gradient-to-br from-orange-50 to-red-50",
          destinationName: "bg-gradient-to-r from-orange-700 to-red-700 bg-clip-text text-transparent",
          location: "text-orange-600",
          cost: "text-red-600",
        })}
      </div>
    </div>
  );
};

export default LandingPage;