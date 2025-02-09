import React from "react";

const CountryCards = () => {
    

    return (
        <>
            <h1 className="text-black text-3xl font-bold text-center">Top destinations in Thailand</h1>
            <h2 className="text-black text-xl font-bold text-center">Here's where your fellow travellers are headed</h2>
            <div className="flex justify-evenly w-full">
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFuZ2tva3xlbnwwfHwwfHx8MA%3D%3D" alt="Bangkok" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Bangkok, Thailand</p>
                </div>
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://media.istockphoto.com/id/1488122726/photo/drone-point-view-of-phi-phi-island-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=IU-G2PQlvf-JlWRVDGOH60js-P-zYRqhHLtOPLZYl_Q=" alt="Phuket" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Phuket, Thailand</p>
                </div>
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://media.istockphoto.com/id/1097373600/photo/asian-tropical-beach-paradise-in-thailand.webp?a=1&b=1&s=612x612&w=0&k=20&c=j6iBF1HGpWL7vYLRHoFHzswnBkUq9Nc2ezR7qkfqkhs=" alt="Pattaya" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Pattaya, Thailand</p>
                </div>
                <div className="w-80 h-100 border-solid text-center">
                    <img src="https://images.unsplash.com/photo-1589211059547-2dc456fd0be0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8S3JhYml8ZW58MHx8MHx8fDA%3D" alt="Krabi" className="w-full h-70 rounded-md mt-10"/>
                    <p className="font-bold text-xl cursor-pointer hover:underline">Krabi, Thailand</p>
                </div>
            </div>
        </>
    )
}

export default CountryCards;