import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Types.ObjectId },
        postId: { type: mongoose.Types.ObjectId },
        comment: String,
        username: String,
        handle: String,
        likes: Number,
        liked: Boolean,
    },
    { collection: "reviews" }
);

export default commentsSchema;