import mongoose from "mongoose";

const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true }, // Destination name (e.g., Mussoorie)
  location: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }],
  coordinates: { // Geo-coordinates for map integration
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
  },

  // Attractions in the destination
  Attractions: {
    food: [{ name: String, image: String }],
    must_see: [{ name: String, image: String }],
    lifeStyle: [{ name: String, image: String }],
  },

  locationType: [
    {
      type: String, enum: ["Mountains", "Forest", "Nature", "junglesafari", "Beach", "Luxury", "Trekking", "Nightlife", "Desert", "Island", "Entertainment", "Spiritual", "Heritage", "Cultural", "Religious", "Festival"],
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
