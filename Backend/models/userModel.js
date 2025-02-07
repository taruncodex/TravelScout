import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: { type: String, required: true, trim: true },
    profilePicture: { type: String, default: "" },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, },
    phone: { type: Number, required: true, trim: true, minlength: [10, 'Phone number should be at least 10 characters'], maxlength: [10, 'Phone number should not exceed 10 characters'] },
    location: { type: String },
    savedDestinations: [{ type: Schema.Types.ObjectId, ref: "Destination" }],
    
    resetToken: { type: String, default: null },
    travelHistory: [
        {
            destination: { type: Schema.Types.ObjectId, ref: "Destination" },
            visitedDate: { type: Date, default: Date.now }
        }
    ],
    preferences: {
        budget: { type: String, enum: ["low", "medium", "high"], default: "medium" },
        interests: [String]
    },
    createdAt: { type: Date, default: Date.now }
});

// Create the User model 
export const User = new model("User", userSchema);



