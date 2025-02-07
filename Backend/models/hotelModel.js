import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
        name: { type: String, required: true },

        destinationId: { type: mongoose.Schema.Types.ObjectId, ref: "Destination", required: true },
        address: { type: String, required: true },
        images: [{ type: String }],

        rating: { type: Number, min: 0, max: 5, default: 0 }, // User rating (0-5 stars)

        reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],

        pricePerNight: { type: Number, required: true },

        roomTypes: [{ type: String, enum: ["Deluxe", "Suite", "Family", "Standard", "Royal Suite"] }],

        contact: {
                phone: { type: String, match: [/^\d{10}$/, "Phone number must be 10 digits"] },
                email: { type: String, match: [/^\S+@\S+\.\S+$/, "Invalid email format"] }
        },
        website: { type: String }
});

const Hotel = mongoose.model("Hotel", hotelSchema);

export default Hotel;
