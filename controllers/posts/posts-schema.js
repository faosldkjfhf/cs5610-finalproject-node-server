import mongoose from 'mongoose';
const schema = mongoose.Schema({
    post: String,
    likes: Number,
    liked: Boolean,
    type: {
        type: String,
        default: "post",
        enum: ["post", "repost", "review"]
    },
    handle: String,
    reposts: Number,
    reposted: Boolean,
    avatar: String,
    username: String,
    userId: mongoose.Types.ObjectId
}, { collection: 'posts' });
export default schema;