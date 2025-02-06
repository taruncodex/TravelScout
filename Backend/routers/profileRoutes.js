import express from "express";
import { getUserProfile, updateUserProfile, updateUserPreferences, saveDestination, addTravelHistory, addWishlist } from "../controllers/profile.js";
import { checkForToken } from "../controllers/auth.controller.js";

const profileRouter = express.Router();

profileRouter.get("/:id", getUserProfile);
profileRouter.put("/:id", updateUserProfile);
profileRouter.put("/:id/preferences", updateUserPreferences);
profileRouter.post("/:id/saved-destinations", saveDestination);
profileRouter.post("/:id/travel-history", addTravelHistory);
profileRouter.post("/:id/add-wishlist", addWishlist);

export default profileRouter;
