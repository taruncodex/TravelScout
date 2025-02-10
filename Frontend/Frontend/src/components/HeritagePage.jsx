import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const HeritagePage = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // React Router hook for navigation

  useEffect(() => {
    fetch("https://travelscout.onrender.com/travelstyle/Heritage")
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data); // Debugging line
        if (data && Array.isArray(data.data)) {
          setLocations(data.data); // Extracting the 'data' array from API response
        } else {
          console.error("Unexpected API response format:", data);
          setLocations([]);
        }
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  const handleImageClick = (id) => {
    navigate(`/destination/${id}`); // Navigate to destination page
  };

  if (loading) {
    return <div className="text-center text-gray-600 p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
      Heritage Destinations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {locations.length > 0 ? (
          locations.map((location) => (
            <div
              key={location._id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transform hover:scale-105 transition duration-300"
              onClick={() => handleImageClick(location._id)} // Handle click event
            >
              <img
                src={location.images[0] || "/placeholder.jpg"} // Directly use images since it's a string
                alt={location.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-700">{location.name}</h2>
                <p className="text-gray-500 text-sm">{location.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            No destinations available.
          </p>
        )}
      </div>
    </div>
  );
};

export default HeritagePage;
