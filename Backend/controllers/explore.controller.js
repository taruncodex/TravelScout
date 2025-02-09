import Destination from "../models/destinationModel.js";
import Review from "../models/reviewModel.js";
import { User } from "../models/userModel.js"

//Get Home Page Data (Trending & New Destinations)
export const getHomePageData = async (req, res) => {
    try {
        //Fetch the top  highest-rated destinations & latest 3 destinations, Sort in descending order

        const data = await Review.aggregate([{
            $group: {
                _id: "$destinationId",
                avgRating: { $avg: "$rating" }, // Calculate the average rating
                totalReviews: { $sum: 1 },
            }
        }, { $sort: { avgRating: -1, totalReviews: -1 } }, { $limit: 3 },
        {
            $lookup: {
                from: "destinations",
                localField: "_id",
                foreignField: "_id",
                as: "destination"
            }
        }, { $unwind: "$destination" },
        {
            $project: {
                _id: "$destination._id",
                name: "$destination.name",
                location: "$destination.location",
                estimatedCost: "$destination.estimatedCost",
                weather: "$destination.weather",
                locationType: "$destination.locationType",
                avgRating: 1,
                totalReviews: 1,
            }
        }

        ])
        console.info({ data });
        return res.status(200).json({ msg: "Top 3 Trending Destinations: ", cities: data });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};


//Get Trending Destinations (Highest Rated)
export const getTrendingDestinations = async (req, res) => {
    try {

        // Using aggregation to get top 10 destination data 

        // group -> dort -> lookup -> unwind -> project.
        const data = await Review.aggregate([{
            $group: {
                _id: "$destinationId",
                avgRating: { $avg: "$rating" }, // Calculate the average rating
                totalReviews: { $sum: 1 },
            }
        }, { $sort: { avgRating: -1, totalReviews: -1 } }, { $limit: 10 },
        {
            $lookup: {
                from: "destinations",
                localField: "_id",
                foreignField: "_id",
                as: "destination"
            }
        }, { $unwind: "$destination" },
        {
            $project: {
                _id: "$destination._id",
                name: "$destination.name",
                location: "$destination.location",
                estimatedCost: "$destination.estimatedCost",
                weather: "$destination.weather",
                locationType: "$destination.locationType",
                avgRating: 1,
                totalReviews: 1,
            }
        }

        ])
        console.info({ data });
        return res.status(200).json({ msg: "Top 10 Trending Destinations: ", cities: data });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

//Get Discover Destinations (Random Picks)
export const getDiscoverDestinations = async (req, res) => {
    try {
        // Fetch destinations from the database and limit to 10 documents.
        const discoverDestinations = await Destination.aggregate([{ $match: {} }, {
            $limit: 10
        }, {
            $project: {
                _id: 1,
                name: 1,
                location: 1,
                description: 1,
                locationType: 1,
                bestTimeToVisit: 1,
                weather: 1,
                estimatedCost: 1
            }
        }])
        return res.status(200).json({ cities: discoverDestinations });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

// Get User Trips (Saved & Visited Destinations)
export const getUserTrips = async (req, res) => {
    try {

        //Fetch the user from the database and populate related destination details
        const userId = req.user._id;
        const user = await User.findById(userId).populate("travelHistory.destination");

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.json({
            savedDestinations: user.savedDestinations, pastTrips: user.travelHistory
        });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

//Get Travel Styles------>
export const getTravelStyles = async (req, res) => {
    try {
        // Take the locationType then fetch the data based on the fetch and send 
        const { locationType } = req.params;
        console.info(locationType);

        const data = await Destination.find({
            locationType: { $in: [locationType] },
        }, "name description location weather ");
        console.log(data);

        if (!data) {
            return res.status(404).json({ Message: `No Destination is available with ${locationType}` });
        }
        return res.json({ msg: `Here is the Destination of ${locationType}`, data });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};



//Show Destination------->
export const showDestination = async (req, res) => {
    try {
        // Fetch the destination details along with related reviews & hotels
        const { cityId } = req.params;
        const destination = await Destination.findById(cityId).populate("reviews hotels");

        if (!destination) {
            return res.status(404).json({ msg: "Destination not found" });
        }

        return res.json(destination);
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};
