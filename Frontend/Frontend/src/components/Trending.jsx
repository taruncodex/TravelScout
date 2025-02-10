import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Trending = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    fetch("https://travelscout.onrender.com/trending")
      .then((response) => response.json())
      .then((data) => {
        if (data.cities) {
          setLocations(data.cities);
        } else {
          throw new Error("Invalid API response format");
        }
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch locations");
        setLoading(false);
      });
  }, []);

  const handleLocationClick = (locationId) => {
    navigate(`/destination/${locationId}`); // Navigate to destination page with location ID
  };

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 bg-teal-100 mt-10 mb-10">
      {locations.map((location) => (
        <div
          key={location._id}
          className="bg-white shadow-xl rounded-2xl overflow-hidden hover:scale-105 transition-transform cursor-pointer border border-gray-200 hover:shadow-2xl"
          onClick={() => handleLocationClick(location._id)} // Call function on click
        >
          <img
            src={location.images[0]}
            alt={location.name}
            className="w-full h-52 object-cover rounded-t-2xl"
          />
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold text-gray-800">{location.name}</h3>
            <p className="text-gray-600 mt-2">{location.location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trending;
