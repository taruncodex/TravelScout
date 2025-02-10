import express from "express";
const siteRouter = express.Router();
import { getHomePageData, getTrendingDestinations, getDiscoverDestinations, getUserTrips, getTravelStyles, showDestination } from "../controllers/explore.controller.js";
import Destination from "../models/destinationModel.js";
import Hotel from "../models/hotelModel.js";
import Review from "../models/reviewModel.js";
import { checkForToken } from "../controllers/auth.controller.js"
import mongoose from "mongoose";
// Get top 3 trending cities for homepage
siteRouter.get("/homepage", getHomePageData);

// Get top 10 trending destinations
siteRouter.get("/trending", getTrendingDestinations);

// Get multiple destinations for explore page
siteRouter.get("/discover", getDiscoverDestinations);

// Get user's previous trips
siteRouter.get("/mytrips", checkForToken, getUserTrips);

// Get adventure travel styles by location type
siteRouter.get("/travelstyle/:locationType", getTravelStyles);

siteRouter.get("/destination/:cityId", showDestination);


siteRouter.post("/postdes", async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        await Destination.create(req.body);

        res.status(200).json({ msg: "Destination details added. ", data });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
})

siteRouter.post("/posthotel", async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        await Hotel.insertMany(req.body);

        res.status(200).json({ msg: "Hotel details added.", data });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
})

siteRouter.post("/postreview", async (req, res) => {
    try {
        console.log(req.body);
        const data = req.body;
        await Review.insertMany(req.body);
        res.status(200).json({ msg: "Review added.", data });
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
})



// get hotel Route---->
siteRouter.get("/gethotel/:hotelid", async (req, res) => {
    try {
        const { hotelid } = req.params;

        const hotels = await Hotel.aggregate([
            //Filter the hotel by `hotelid`
            {
                $match: { _id: new mongoose.Types.ObjectId(hotelid) }
            },

            //Join with Destination Collection
            {
                $lookup: {
                    from: "destinations",
                    localField: "destinationId",
                    foreignField: "_id",
                    as: "destinationDetails"
                }
            },

            //Join with Reviews Collection
            {
                $lookup: {
                    from: "reviews",
                    localField: "reviews",
                    foreignField: "_id",
                    as: "hotelReviews"
                }
            },

            // Format Response (Convert array fields to objects)
            {
                $addFields: {
                    destinationDetails: { $arrayElemAt: ["$destinationDetails", 0] }
                }
            }
        ]);

        //If no hotel found, return 404
        if (!hotels.length) {
            return res.status(404).json({ msg: "Hotel not found" });
        }
        // Return only the first match (Single Hotel)
        return res.status(200).json(hotels[0]);
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error", err: error.message });
    }
});


export { siteRouter }; 