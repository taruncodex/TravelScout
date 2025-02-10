import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function HotelPage() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`https://travelscout.onrender.com/gethotel/${id}`)
      .then((res) => setHotel(res.data))
      .catch((err) => {
        console.error("Error fetching hotel:", err);
        setError("Failed to load hotel data");
      });
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!hotel) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800">{hotel.name}</h1>
      <p className="text-yellow-500 text-lg font-semibold">⭐ {hotel.rating} / 5</p>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-4">
        {hotel.images?.map((img, index) => (
          <img key={index} src={img} alt={`Hotel ${index}`} className="rounded-lg shadow-md w-full h-48 object-cover" />
        ))}
      </div>

      <p className="text-gray-700"><strong>Address:</strong> {hotel.address}</p>
      {hotel.contact?.phone && <p className="text-gray-700"><strong>Phone:</strong> {hotel.contact.phone}</p>}
      {hotel.contact?.email && <p className="text-gray-700"><strong>Email:</strong> {hotel.contact.email}</p>}

      <h2 className="text-xl font-semibold mt-4">Room Types:</h2>
      <ul className="list-disc ml-5 text-gray-600">
        {hotel.roomTypes?.map((room, index) => <li key={index}>{room}</li>)}
      </ul>

      <div className="mt-6 flex justify-between items-center">
        <p className="text-lg font-bold text-gray-900">Price per night: <span className="text-green-500">${hotel.pricePerNight}</span></p>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:bg-blue-700 transition">
          Book Now
        </button>
      </div>

      <h2 className="text-xl font-semibold mt-6">Reviews:</h2>
      {hotel.reviews?.length > 0 ? (
        <ul className="mt-2">
          {hotel.reviews.map((review, index) => (
            <li key={index} className="border-b py-2 text-gray-700">{review.id}</li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No reviews yet.</p>
      )}
    </div>
  );
}
