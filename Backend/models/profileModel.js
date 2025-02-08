import mongoose from "mongoose";

const profileeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" }, 
  savedDestinations: [{ type: mongoose.Schema.Types.ObjectId, ref: "Destination" }], 
  travelHistory: [
    {
      destination: { type: mongoose.Schema.Types.ObjectId, ref: "Destination" },
      visitedDate: { type: Date, default: Date.now }
    }
  ],
  preferences: {
    budget: { type: String, enum: ["low", "medium", "high"], default: "medium" },
    interests: [String] 
  },
  createdAt: { type: Date, default: Date.now }
});

const Profile = mongoose.model("User", );
export default Profile;
