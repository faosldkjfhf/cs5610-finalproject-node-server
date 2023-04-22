import mongoose from 'mongoose';
const schema = mongoose.Schema({
    post: String,
    likes: Number,
    likeUsers: Array,
    type: {
        type: String,
        default: "post",
        enum: ["post", "repost", "review"]
    },
    handle: String,
    comments: Number,
    reposts: Array,
    repostUsers: Array,
    avatar: String,
    username: String,
    userId: mongoose.Types.ObjectId,
    originalPost: mongoose.Types.ObjectId
}, { collection: 'posts' });
export default schema;