import express from "express";
const siteRouter = express.Router();
import { getHomePageData, getTrendingDestinations, getDiscoverDestinations, getUserTrips, getTravelStyles, showDestination } from "../controllers/explore.controller";

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





export { siteRouter }; 