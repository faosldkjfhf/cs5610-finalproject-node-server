import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
    {
        review: { type: String, required: true },
        score: { type: Number, required: true },
        userId: { type: mongoose.Types.ObjectId, unique: true },
        username: String,
        handle: String,
        albumId: String,
        albumName: String
    },
    { collection: "reviews" }
);

export default reviewsSchema;