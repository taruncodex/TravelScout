import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userName: { type: String, required: true },
  destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
  hotelId: { type: mongoose.Schema.Types.ObjectId, ref: "Hotel" },
  rating: { type: Number, min: [1, "Rating must be at least 1"], max: [5, "Rating cannot be more than 5"], required: true },
  comment: { type: String, required: true, minlength: [10, "Comment must be at least 10 characters long"], maxlength: [500, "Comment cannot exceed 500 characters"] },
  createdAt: { type: Date, default: Date.now }
});

const Review = mongoose.model("Review", reviewSchema);
export default Review;
