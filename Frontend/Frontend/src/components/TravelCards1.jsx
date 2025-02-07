import { useState, useEffect } from "react";
import app from "../../firebase";
import { getDatabase, ref, get } from "firebase/database";

const TravelCards1 = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getDatabase();
      const dbRef = ref(db, "/");
      const snapshot = await get(dbRef);

      if (snapshot.exists()) {
        const data = snapshot.val();
        const allLocations = Object.values(data);

        // Filter locations by type
        const mountains = allLocations.find(loc => loc.locationType.includes("Mountains"));
        const beaches = allLocations.find(loc => loc.locationType.includes("Beaches"));
        const luxury = allLocations.find(loc => loc.locationType.includes("Luxury"));

        setLocations([mountains, beaches, luxury].filter(Boolean));
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

export default TravelCards1;