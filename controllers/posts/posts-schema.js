import mongoose from 'mongoose';
const schema = mongoose.Schema({
    post: String,
    likes: Number,
    liked: Boolean,
}, { collection: 'posts' });
export default schema;