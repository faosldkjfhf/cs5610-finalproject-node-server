import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstName: String,
        lastName: String,
        dob: Date,
        email: String,
        role: {
            type: String,
            default: "user",
            enum: ["admin", "user", "guest", "artist"]
        },
        followers: Number,
        following: Number,
        posts: Number,
        reviews: Number,
        bio: String,
        profilePic: String,
        bannerPic: String,
        website: String,
    },
    { collection: "users" }
);

export default usersSchema;