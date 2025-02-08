import React from "react";

const CityCards = () => {
    

    return (
        <>
            <h1 className="text-black text-3xl font-bold text-center">Dream Your Next Trip</h1>
            <h2 className="text-black text-xl font-bold text-center">Weekend getaways</h2>
            <div className="flex justify-evenly w-full">
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SmFpcHVyfGVufDB8fDB8fHww" alt="Jaipur" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Jaipur, India</p>
                </div>
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://media.istockphoto.com/id/898467608/photo/the-india-gate-in-delhi.webp?a=1&b=1&s=612x612&w=0&k=20&c=WTnCHnh39Pc5mmkWsHr1Hv4QZcViyAIc2v7__YsPfAE=" alt="Delhi" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Delhi, India</p>
                </div>
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://media.istockphoto.com/id/1382384282/photo/bangalore-or-bengaluru.webp?a=1&b=1&s=612x612&w=0&k=20&c=j9jKtYxzHAHjodEQYuVPvQKPAlXvjCzx_TvqLh6BmKM=" alt="Bangalore" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Bangalore, India</p>
                </div>
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVtYmFpfGVufDB8fDB8fHww" alt="Mumbai" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Mumbai, India</p>
                </div>
            </div>
        </>
    )
}

export default CityCards;