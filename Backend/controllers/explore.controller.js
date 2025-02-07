import Destination from "../models/destinationModel.js";
import User from "../models/userModel.js"

//Get Home Page Data (Trending & New Destinations)
export const getHomePageData = async (req, res) => {
    try {
        //Fetch the top  highest-rated destinations & latest 4 destinations, Sort in descending order
        const trendingDestinations = await Destination.find().sort({ rating: -1 }).limit(4);
        const newDestinations = await Destination.find().sort({ createdAt: -1 }).limit(4);

        return res.json({trendingDestinations,newDestinations});
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

//Get Trending Destinations (Highest Rated)
export const getTrendingDestinations = async (req, res) => {
    try {
        //Fetch the top destinations with the highest rating & Sort by rating in descending order
        const trendingDestinations = await Destination.find().sort({ rating: -1 }).limit(10);
        return res.json(trendingDestinations);
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

//Get Discover Destinations (Random Picks)
export const getDiscoverDestinations = async (req, res) => {
    try {
        //Fetch random destinations from the database
        const discoverDestinations = await Destination.aggregate([{ $sample: { size: 4 } }]);
        return res.json(discoverDestinations);
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

// Get User Trips (Saved & Visited Destinations)
export const getUserTrips = async (req, res) => {
    try {
        //Fetch the user from the database and populate related destination details
        const userId = req.user._id; 
        const user = await User.findById(userId).populate("travelHistory.destination savedDestinations");

        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.json({savedDestinations: user.savedDestinations,pastTrips: user.travelHistory
        });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

//Get Travel Styles------>
export const getTravelStyles = async (req, res) => {
    try {
        const travelStyles = ["Adventure", "Luxury", "Cultural"];
        return res.json({ travelStyles });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};

//Show Destination------->
export const showDestination = async (req, res) => {
    try {
        // Fetch the destination details along with related reviews & hotels
        const { id } = req.params;
        const destination = await Destination.findById(id).populate("reviews hotels");

        if (!destination) {
            return res.status(404).json({ msg: "Destination not found" });
        }
        return res.json(destination);
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
};
