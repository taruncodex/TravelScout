import express from "express";
import { getUserProfile, updateUserProfile, updateUserPreferences, deleteProfile, addTravelHistory, addWishlist } from "../controllers/profile.js";

import { checkForToken } from "../controllers/auth.controller.js";

const profileRouter = express.Router();

//Protect routes using checkForToken middleware
profileRouter.get("/:id", checkForToken, getUserProfile);
profileRouter.put("/:id", checkForToken, updateUserProfile);
profileRouter.post("/:id/preferences", checkForToken, updateUserPreferences);
profileRouter.post("/:id/travel-history", checkForToken, addTravelHistory);
profileRouter.post("/:id/add-wishlist", checkForToken, addWishlist);
profileRouter.delete("/:id", checkForToken, deleteProfile);
export default profileRouter;
