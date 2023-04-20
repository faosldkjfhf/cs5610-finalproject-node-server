import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        firstName: String,
        lastName: String,
        dob: Date,
        email: { type: String, unique: true, required: true },
        role: {
            type: String,
            default: "user",
            enum: ["admin", "user", "guest", "artist"]
        },
        followers: Array,
        following: Array,
        posts: Number,
        reviews: Number,
        bio: String,
        avatar: String,
        banner: String,
        handle: { type: String, required: true, unique: true },
        website: String,
        likes: Array,
        reposts: Array,

    },
    { collection: "users" }
);

export default usersSchema;