import { User } from "../models/userModel.js";
import mongoose from "mongoose";

//Get User Profile------>
export const getUserProfile = async (req, res) => {
  try {
    const userId = new mongoose.Types.ObjectId(req.params.id);

    const user = await User.aggregate([
      { $match: { _id: userId } },
      {
        $lookup: {
          from: "destinations",
          localField: "savedDestinations",
          foreignField: "_id",
          as: "savedDestinations",
        },
      },
      {
        $lookup: {
          from: "destinations",
          localField: "travelHistory.destination",
          foreignField: "_id",
          as: "travelHistory",
        },
      },
    ]);

    if (!user.length) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user[0]); // Since aggregate returns an array, we take the first item.
  } catch (error) {
    return res.status(500).json({ error: "Server error", err: error.message });
  }
};

//Update User Profile------>
export const updateUserProfile = async (req, res) => {
  try {

    const updates = {};
    const { name, email, profilePicture } = req.body;

    if (name) updates.name = name;
    if (email) updates.email = email;
    if (profilePicture) updates.profilePicture = profilePicture;

    console.log({ updates });

    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: updates }, { new: true });
    console.log({ updatedUser });
    return res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: "Server error", err: error.message });
  }
};

//Update User Preferences------->
export const updateUserPreferences = async (req, res) => {
  try {
    const updates = {};
    const { budget, interests } = req.body;

    if (budget) updates["preferences.budget"] = budget;
    if (interests) updates["preferences.interests"] = interests;

    const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: updates }, { new: true });

    res.json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: "Server error", err: error.message });
  }
};

//Save a Destination (Avoid duplicates)
export const saveDestination = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { destinationId } = req.body;

    if (!user.savedDestinations.includes(destinationId)) {
      user.savedDestinations.push(destinationId);
      await user.save();
    }

    res.json({ message: "Destination saved", user });
  } catch (error) {
    return res.status(500).json({ error: "Server error", err: error.message });
  }
};

//Add Travel History (Avoid duplicate entries)
export const addTravelHistory = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { destinationId } = req.body;

    const alreadyVisited = user.travelHistory.some(
      (entry) => entry.destination.toString() === destinationId
    );

    if (!alreadyVisited) {
      user.travelHistory.push({ destination: destinationId });
      await user.save();
    }

    res.json({ message: "Travel history updated", user });
  } catch (error) {
    return res.status(500).json({ error: "Server error", err: error.message });
  }
};

//Add to Wishlist (Avoid duplicates)
export const addWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { destinationId } = req.body;

    if (!user.wishlist) user.wishlist = [];

    if (!user.wishlist.includes(destinationId)) {
      user.wishlist.push(destinationId);
      await user.save();
    }

    res.json({ message: "Destination added to wishlist", user });
  } catch (error) {
    return res.status(500).json({ error: "Server error", err: error.message });
  }
};


export const deleteProfile = async (req, res) => {
  try {
    // Logic : 

  } catch (error) {
    return res.status(500).json({ error: "Server error", err: error.message });
  }
}