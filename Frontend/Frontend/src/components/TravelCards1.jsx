import { useState, useEffect } from "react";

const API_URL = "https://your-api-url.com/traveldata"; // Replace with your actual API URL

const TravelCards = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        const allLocations = Object.values(data);

        // Filter locations by type
        const mountains = allLocations.find(loc => loc.locationType.includes("Mountains"));
        const beaches = allLocations.find(loc => loc.locationType.includes("Beaches"));
        const luxury = allLocations.find(loc => loc.locationType.includes("Luxury"));

        setLocations([mountains, beaches, luxury].filter(Boolean));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-6 justify-center p-6">
      {locations.map((place, index) => (
        <div key={index} className="w-80 p-4 bg-white rounded-lg shadow-md">
          <img src={place.images[0]} alt={place.name} className="w-full h-48 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-2">{place.name}</h2>
          <p className="text-gray-600">{place.locationType.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default TravelCards;
