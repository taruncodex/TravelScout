import React from "react";
import { useNavigate } from "react-router-dom";

const CulturalTravel = () => {
    const navigate = useNavigate();

    const handleExploreClick = (destination) => {
        navigate(`/${destination}`);
    };

    return (
        <div>
            <div className="flex justify-content mt-20 mb-20 mr-10 ml-10 bg-orange-100 rounded-lg">
                <div className="mt-20 text-center mb-10">
                    <h1 className="text-black text-3xl font-bold text-center">Spiritual</h1>
                    <p className="text-l">Reconnect with your inner self and find peace on a spiritual journey. Explore sacred sites, ancient temples, and serene landscapes that nourish the soul.</p>
                    <button onClick={() => handleExploreClick("spiritual")} className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">Explore</button>
                </div>
                <div className="mr-2 mt-2 mb-2 rounded-lg">
                    <img src="https://media.istockphoto.com/id/905049262/photo/varanasi-at-sunrise.webp?a=1&b=1&s=612x612&w=0&k=20&c=SRslCKFL6ufxWELRSAsS8NDf5qQBtsjDSCldiS5vvWA=" alt="Spiritual" className="h-full w-full rounded-lg"/>
                </div>
            </div>

            <div className="flex justify-content mt-20 mb-20 mr-10 ml-10 bg-orange-100 rounded-lg">
                <div className="mr-2 mt-2 mb-2 rounded-lg">
                    <img src="https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.webp?a=1&b=1&s=612x612&w=0&k=20&c=KvQq5YpYZepJmWkDa1R3MeQb2Xrd5tLjpoS9kvIf4GY=" alt="Heritage" className="h-full w-full rounded-lg"/>
                </div>
                <div className="mt-20 text-center mb-10">
                    <h1 className="text-black text-3xl font-bold text-center">Heritage</h1>
                    <p className="text-l">Uncover the stories of the past and explore iconic landmarks on a heritage travel adventure. Immerse yourself in rich cultures and traditions that have shaped our world.</p>
                    <button onClick={() => handleExploreClick("heritage")} className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">Explore</button>
                </div>
            </div>

            <div className="flex justify-content mt-20 mb-20 mr-10 ml-10 bg-orange-100 rounded-lg">
                <div className="mt-20 text-center mb-10">
                    <h1 className="text-black text-3xl font-bold text-center">Cultural</h1>
                    <p className="text-l">Immerse yourself in vibrant traditions, artistic expressions, and unique ways of life on a captivating cultural journey.</p>
                    <button onClick={() => handleExploreClick("cultural")} className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">Explore</button>
                </div>
                <div className="mr-2 mt-2 mb-2 rounded-lg">
                    <img src="https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U=" alt="Cultural" className="h-full w-full rounded-lg"/>
                </div>
            </div>

            <div className="flex justify-content mt-20 mb-20 mr-10 ml-10 bg-orange-100 rounded-lg">
                <div className="mr-2 mt-2 mb-2 rounded-lg">
                    <img src="https://media.istockphoto.com/id/1381030718/photo/barsana-holi-one-of-the-most-joyful-festival-of-india-this-is-birth-place-of-radha-lord.webp?a=1&b=1&s=612x612&w=0&k=20&c=jTAyFnheEbcFcs8YfqVjRMzlBdl0lGG7F0bcGJyG5tU=" alt="Festival" className="h-full w-full rounded-lg"/>
                </div>
                <div className="mt-20 text-center mb-10">
                    <h1 className="text-black text-3xl font-bold text-center">Festival</h1>
                    <p className="text-l">Celebrate life with vibrant festivals around the globe! Experience the energy, music, and traditions that bring communities together.</p>
                    <button onClick={() => handleExploreClick("festival")} className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default CulturalTravel;