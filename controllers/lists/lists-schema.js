import mongoose from "mongoose";

const listsSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Types.ObjectId },
        albums: { type: Array, default: [] },
        name: String,
        description: String,
    }
)

export default listsSchema;