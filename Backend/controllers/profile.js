import User from "../models/profileModel";

//Get User Profile----->
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).populate(
      "savedDestinations travelHistory.destination"
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//Update User Profile------->
export const updateUserProfile = async (req, res) => {
  try {
    const { name, email, profilePicture } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, profilePicture },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//Update User Preferences----->
export const updateUserPreferences = async (req, res) => {
  try {
    const { budget, interests } = req.body;
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { preferences: { budget, interests } },
      { new: true }
    );

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//Save a Destination------>
export const saveDestination = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const { destinationId } = req.body;
    if (!user.savedDestinations.includes(destinationId)) {
      user.savedDestinations.push(destinationId);
      await user.save();
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

//Add Travel History------>
export const addTravelHistory = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { destinationId } = req.body;
    user.travelHistory.push({ destination: destinationId });
    await user.save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
