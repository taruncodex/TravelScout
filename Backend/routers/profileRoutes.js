import express from "express";
import { getUserProfile, updateUserProfile, updateUserPreferences, saveDestination, addTravelHistory } from "../controllers/profile.js";

const profileRouter = express.Router();

router.get("/:id", getUserProfile);
router.put("/:id", updateUserProfile);
router.put("/:id/preferences", updateUserPreferences);
router.post("/:id/saved-destinations", saveDestination);
router.post("/:id/travel-history", addTravelHistory);

export default profileRouter;
