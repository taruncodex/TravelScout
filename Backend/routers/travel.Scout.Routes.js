import express from "express";
const siteRouter = express.Router();
import { getHomePageData, getTrendingDestinations, getDiscoverDestinations, getUserTrips, getTravelStyles, showDestination } from "../controllers/explore.controller.js";
import Destination from "../models/destinationModel.js";
import Hotel from "../models/hotelModel.js";
import Review from "../models/reviewModel.js";
// Get top 3 trending cities for homepage
siteRouter.get("/homepage", getHomePageData);

// Get top 10 trending destinations
siteRouter.get("/trending", getTrendingDestinations);

// Get multiple destinations for explore page
siteRouter.get("/discover", getDiscoverDestinations);

// Get user's previous trips
siteRouter.get("/mytrips", getUserTrips);

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


export { siteRouter }; 