import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
    {
        review: { type: String, required: true },
        score: Number,
        userId: { type: mongoose.Types.ObjectId },
        albumId: String
    },
    { collection: "reviews" }
);

export default reviewsSchema;