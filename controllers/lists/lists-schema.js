import mongoose from "mongoose";

const listsSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Types.ObjectId },
        albums: { type: Array, default: [] },
        name: String,
        description: String,
    },
    { collection: "lists" }
);

export default listsSchema;