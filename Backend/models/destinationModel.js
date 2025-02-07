import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Destination name (e.g., Mussoorie)
  location: { type: String, required: true },
  description: { type: String, required: true },

  // HotelDetails: [
  //   {
  //     name: { type: String },
  //     image: { type: String },
  //     rating: { type: Number, min: 1, max: 5 },
  //     address: { type: String },
  //     price: { type: Number },
  //   },
  // ],

  // Attractions in the destination
  Attractions: {
    food: [{ name: String, image: String }],
    must_see: [{ name: String, image: String }],
    lifeStyle: [{ name: String, image: String }],
  },

  locationType: [
    {
      type: String,enum: ["Mountains", "Forest","Beaches","Luxury","Trekking", "Spiritual", "Heritage", "Religious", "Festival",],
    },
  ],

  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }], // Linked reviews schema
  hotels: [{ type: mongoose.Schema.Types.ObjectId, ref: "Hotel" }], // Linked hotels schema

  bestTimeToVisit: { type: String },
  weather: { type: String }, // Example: "Cold, Snowfall in Winter"

  estimatedCost: { type: Number }, // Average trip cost in local currency

  createdAt: { type: Date, default: Date.now },
});

const Destination = mongoose.model("Destination", destinationSchema);

export default Destination;
