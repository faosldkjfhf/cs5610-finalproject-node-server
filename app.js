import express from "express";
import PostsController from "./controllers/posts/posts-controller.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

PostsController(app);

const CONNECTION_STRING = process.env.SF_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/symfolio';
console.log(CONNECTION_STRING);
mongoose.connect(CONNECTION_STRING);
app.listen(process.env.PORT || 4000);
