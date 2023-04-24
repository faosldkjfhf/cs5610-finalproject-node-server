import mongoose from "mongoose";
import searchable from "mongoose-regex-search";

const usersSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true, searchable: true },
        password: { type: String, required: true },
        firstName: { type: String, searchable: true },
        lastName: { type: String, searchable: true },
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
        handle: { type: String, required: true, unique: true, searchable: true },
        website: String,
        likes: Array,
        reposts: Array,

    },
    { collection: "users" }
);

usersSchema.plugin(searchable);

export default usersSchema;