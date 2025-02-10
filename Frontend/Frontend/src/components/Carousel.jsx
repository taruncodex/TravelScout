import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
  "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    navigate("/trending"); // Navigate to Trending.jsx page
  };

  return (
    <div className="relative w-full overflow-hidden mt-16">
      {/* Carousel Container */}
      <div
        className="flex transition-transform duration-1000 ease-in-out w-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((img, index) => (
          <div key={index} className="relative w-full flex-shrink-0" style={{ minWidth: "100%" }}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-[500px] object-cover"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/800x400?text=Image+Not+Found";
              }}
            />
            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h2 className="text-4xl font-bold mb-4">The 2025 TravelScout Trendcast</h2>
              <p className="text-xl font-semibold mb-6">Forecasting the future of travel—now.</p>
              <button
                className="px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer"
                onClick={handleButtonClick}
              >
                Check it out
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
