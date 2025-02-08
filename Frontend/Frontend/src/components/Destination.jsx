import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Destination() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) {
      setError("Invalid destination ID");
      setLoading(false);
      return;
    }

    fetch(`https://travelscout.onrender.com/destination/${id}?populate=true`)
      .then((res) => {
        console.log("Response status:", res.status);
        if (!res.ok) {
          throw new Error("Failed to fetch destination data");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API Response:", data);
        setDestination(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load destination data");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div className="text-center text-2xl py-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-2xl py-10 text-red-500">{error}</div>;
  }

  if (!destination || Object.keys(destination).length === 0) {
    return <div className="text-center text-2xl py-10">No data available</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div
        className="relative h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-extrabold">{destination.name}</h1>
          <p className="text-lg mt-2">{destination.location}</p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-blue-700">About {destination.name}</h2>
        <p className="text-gray-700 mt-2">{destination.description}</p>

        {/* Hotels Section */}
        {Array.isArray(destination.hotels) && destination.hotels.length > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-blue-700">Hotels</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
              {destination.hotels.map((hotel, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-32 object-cover rounded-md" />
                  <p className="text-center font-semibold mt-2">{hotel.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Attractions Section */}
        {destination.Attractions && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-blue-700">Attractions</h2>
            
            {/* Food Spots */}
            {Array.isArray(destination.Attractions.food) && destination.Attractions.food.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold mt-4">Food Spots</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {destination.Attractions.food.map((place, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                      <img src={place.image} alt={place.name} className="w-full h-32 object-cover rounded-md" />
                      <p className="text-center font-semibold mt-2">{place.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Must See */}
            {Array.isArray(destination.Attractions.must_see) && destination.Attractions.must_see.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold mt-4">Must-See Places</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {destination.Attractions.must_see.map((place, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                      <img src={place.image} alt={place.name} className="w-full h-32 object-cover rounded-md" />
                      <p className="text-center font-semibold mt-2">{place.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* LifeStyle */}
            {Array.isArray(destination.Attractions.lifeStyle) && destination.Attractions.lifeStyle.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold mt-4">Lifestyle & Shopping</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                  {destination.Attractions.lifeStyle.map((place, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-md bg-white">
                      <img src={place.image} alt={place.name} className="w-full h-32 object-cover rounded-md" />
                      <p className="text-center font-semibold mt-2">{place.name}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {/* Reviews Section */}
        {Array.isArray(destination.reviews) && destination.reviews.length > 0 && (
          <div className="mt-8">
            <h2 className="text-3xl font-bold text-blue-700">Reviews</h2>
            <div className="mt-4 space-y-4">
              {destination.reviews.map((review, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900">{review.username}</h3>
                  <p className="text-gray-700">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
