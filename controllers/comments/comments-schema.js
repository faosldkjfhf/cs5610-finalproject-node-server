import mongoose from "mongoose";

const commentsSchema = new mongoose.Schema(
    {
        userId: { type: mongoose.Types.ObjectId },
        postId: { type: mongoose.Types.ObjectId },
        comment: String,
        username: String,
        handle: String,
        likeUsers: Array,
        likes: Number
    },
    { collection: "comments" }
);

export default commentsSchema;