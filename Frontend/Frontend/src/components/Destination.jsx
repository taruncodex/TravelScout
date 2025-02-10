import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import Navbar from "./Navbar";

export default function Destination() {
  const { id } = useParams();
  const navigate = useNavigate(); // Initialize navigate
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid destination ID");
      setLoading(false);
      return;
    }

    // API Call using Axios
    axios
      .get(`https://travelscout.onrender.com/destination/${id}?populate=true`)
      .then((response) => {
        console.log("API Response:", response.data);
        setDestination(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load destination data");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="text-center text-2xl py-10">Loading...</div>;
  if (error) return <div className="text-center text-2xl py-10 text-red-500">{error}</div>;
  if (!destination || Object.keys(destination).length === 0) return <div className="text-center text-2xl py-10">No data available</div>;

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="p-3 bg-blue-600 text-white rounded-md mb-4 ml-6"
      >
        Back
      </button>

      {/* Destination Banner */}
      <div
        className="relative h-[450px] bg-cover bg-center shadow-lg"
        style={{ backgroundImage: `url(${destination.images[0] || "default-banner.jpg"})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold drop-shadow-lg">{destination.name}</h1>
          <p className="text-lg mt-2">{destination.location}</p>
        </div>
      </div>

      {/* Destination Details */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl font-bold text-blue-800 mb-3">{destination.name}</h2>
        <p className="text-gray-700 text-lg leading-relaxed">{destination.description || "No description available."}</p>

        {/* Hotels Section */}
        {Array.isArray(destination.hotels) && destination.hotels.length > 0 && (
          <div className="mt-10">
            <h2 className="text-3xl font-bold text-blue-800">Best Hotels</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
              {destination.hotels.map((hotel) => (
                <div
                  key={hotel._id}
                  className="relative p-4 border rounded-lg shadow-lg bg-white cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2 group"
                  onClick={() => navigate(`/gethotel/${hotel._id}`)}
                >
                  <img
                    src={hotel.images?.[0] || "default-hotel.jpg"}
                    alt={hotel.name}
                    className="w-full h-40 object-cover rounded-md"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-20 transition"></div>
                  <p className="text-center font-semibold mt-3 text-xl text-gray-800">{hotel.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Attractions Section */}
        {destination.Attractions && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-blue-800">Top Attractions</h2>

            {/* Food Spots */}
            {Array.isArray(destination.Attractions.food) && destination.Attractions.food.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold mt-6 text-gray-800">Famous Food Spots</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-3">
                  {destination.Attractions.food.map((place, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition">
                      <img
                        src={place.image || "default-food.jpg"}
                        alt={place.name}
                        className="w-full h-32 object-cover rounded-md"
                        loading="lazy"
                      />
                      <p className="text-center font-semibold mt-2 text-gray-900">{place.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Must See Places */}
            {Array.isArray(destination.Attractions.must_see) && destination.Attractions.must_see.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold mt-6 text-gray-800">Must-See Places</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-3">
                  {destination.Attractions.must_see.map((place, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-lg bg-white hover:shadow-2xl transition">
                      <img
                        src={place.image || "default-place.jpg"}
                        alt={place.name}
                        className="w-full h-32 object-cover rounded-md"
                        loading="lazy"
                      />
                      <p className="text-center font-semibold mt-2 text-gray-900">{place.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Reviews Section */}
        {Array.isArray(destination.reviews) && destination.reviews.length > 0 && (
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-blue-800">Traveler Reviews</h2>
            <div className="mt-4 space-y-6">
              {destination.reviews.map((review, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-100 hover:bg-gray-200 transition">
                  <h3 className="text-lg font-semibold text-gray-900">{review.username}</h3>
                  <p className="text-gray-700">{review.comment}</p>
                  <p className="text-yellow-600 font-semibold">⭐ {review.rating}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
