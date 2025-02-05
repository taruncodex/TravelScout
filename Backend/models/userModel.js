import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    resetToken: { type: String, default: null },
    phone: {
        type: Number,
        required: true,
        trim: true,
        minlength: [10, 'Phone number should be at least 10 characters'],
        maxlength: [10, 'Phone number should not exceed 10 characters']
    },
    location: { type: String },
    profilePicture: String,
});

// Create the User model 
export const User = new model("User", userSchema);



