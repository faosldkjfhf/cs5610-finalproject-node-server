import mongoose from 'mongoose';
const schema = mongoose.Schema({
    post: String,
    likes: Number,
    liked: Boolean,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: {
        type: String,
        default: "post",
        enum: ["post", "repost", "review"]
    },
    reposts: Number,
    reposted: Boolean,
}, { collection: 'posts' });
export default schema;