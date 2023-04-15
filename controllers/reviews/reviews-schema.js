import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema(
    {
        review: { type: String, required: true },
        userId: { type: mongoose.Types.ObjectId }
    },
    { collection: "reviews" }
);

export default reviewsSchema;