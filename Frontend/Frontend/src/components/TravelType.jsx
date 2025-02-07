import React from "react"


const TravelType = () => {
    return (
        <>
        <h1 className="text-black text-3xl font-bold text-center">Travel Type</h1>
        <div className="flex justify-evenly w-full">
            <div className="w-90 h-100 border-solid text-center">
            <img src="https://media.istockphoto.com/id/1322194555/photo/mount-abu-hill-station-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=laEpC8WaqWNFvxgtySOslqRVeIKicnsoS6xcO2gfAoc=" alt="Adventure" className="w-full h-70 rounded-md mt-10"/>
            <p className="font-bold text-xl">Adventure</p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">View More</button>
            </div>
            <div className="w-90 h-100 border-solid text-center">
            <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGx1eHVyeSUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D" alt="Adventure" className="w-full h-70 rounded-md mt-10"/>
            <p className="font-bold text-xl">Luxury</p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">View More</button>
            </div>
            <div className="w-90 h-100 border-solid text-center">
            <img src="https://media.istockphoto.com/id/1503371454/photo/details-of-patrika-gate.webp?a=1&b=1&s=612x612&w=0&k=20&c=bApM_uMzi-oPXfoIkPyIeCQhZsEmIa8HwwJAHsOhptQ=" alt="Adventure" className="w-full h-70 rounded-md mt-10"/>
            <p className="font-bold text-xl">Culture</p>
            <button className="mt-4 px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition cursor-pointer">View More</button>
            </div>
        </div>
        </>
    )}

export default TravelType