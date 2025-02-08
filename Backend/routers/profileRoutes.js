import express from "express";
import { getUserProfile, updateUserProfile, updateUserPreferences, deleteProfile, addTravelHistory, addWishlist } from "../controllers/profile.js";

import { checkForToken } from "../controllers/auth.controller.js";

const profileRouter = express.Router();

//Protect routes using checkForToken middleware
profileRouter.get("/:id", getUserProfile);
profileRouter.put("/:id", updateUserProfile);
profileRouter.post("/:id/preferences", updateUserPreferences);
profileRouter.post("/:id/travel-history", addTravelHistory);
profileRouter.post("/:id/add-wishlist", addWishlist);
profileRouter.delete("/:id", deleteProfile);
export default profileRouter;
