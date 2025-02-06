import User from "../models/profileModel.js";

//Get User Profile----->
export const getUserProfile = async (req, res) => {
  try {
    // Populate is not working fine.  We will use lookup instead. 
    const user = await User.findById(req.params.id)
    //   .populate(
    //   "savedDestinations travelHistory.destination"
    // );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error", err: error.messa });
  }
};

// Update User Profile------->
export const updateUserProfile = async (req, res) => {
  try {

    // Add more specifically what to update or not for example if user do not entered the name just mentioned the email then we need to update email only
    // as other field will contain the undefined and can be updated.
    
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
